import * as ts from 'typescript';
import * as path from 'path';
import * as fs from 'fs';
import * as glob from 'glob';

/**
 * Script to find unused exports in a TypeScript project
 * 
 * This script analyzes the TypeScript AST to identify exports that are never imported
 * anywhere in the codebase, helping to clean up dead code.
 */

// Step 1: Set up colors for better console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
};

/**
 * Find all TypeScript files in the project
 * This is used as a fallback if the TypeScript configuration doesn't include all files
 */
function findTsFiles(rootDir: string): string[] {
  try {
    // Use synchronous glob to find all TypeScript files
    const tsFiles = glob.sync('**/*.{ts,tsx}', {
      cwd: rootDir,
      ignore: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.next/**'],
      absolute: true,
    });
    
    return tsFiles;
  } catch (error) {
    console.error(`${colors.red}Error finding TypeScript files:${colors.reset}`, error);
    return [];
  }
}

// Step 2: Configure and parse the TypeScript project
const configPath = path.resolve('./tsconfig.json');
console.log(`${colors.cyan}Reading TypeScript configuration from:${colors.reset} ${configPath}`);

let program: ts.Program;
let sourceFiles: ts.SourceFile[] = [];

try {
  if (!fs.existsSync(configPath)) {
    console.warn(`${colors.yellow}Warning: tsconfig.json not found at ${configPath}${colors.reset}`);
    console.log(`${colors.yellow}Falling back to manual file discovery...${colors.reset}`);
    
    // Fallback: Create a program from manually discovered files
    const compilerOptions: ts.CompilerOptions = {
      target: ts.ScriptTarget.ES2015,
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.React,
    };
    
    const rootDir = process.cwd();
    const tsFiles = findTsFiles(rootDir);
    
    if (tsFiles.length === 0) {
      console.error(`${colors.red}Error: No TypeScript files found in ${rootDir}${colors.reset}`);
      process.exit(1);
    }
    
    program = ts.createProgram(tsFiles, compilerOptions);
  } else {
    // Use the tsconfig.json
    const { config } = ts.readConfigFile(configPath, ts.sys.readFile);
    
    // Log the included files from tsconfig
    if (config.include) {
      console.log(`${colors.cyan}tsconfig includes:${colors.reset} ${config.include.join(', ')}`);
    }
    if (config.exclude) {
      console.log(`${colors.cyan}tsconfig excludes:${colors.reset} ${config.exclude.join(', ')}`);
    }
    
    // Parse the tsconfig.json
    const parsedConfig = ts.parseJsonConfigFileContent(
      config,
      ts.sys,
      path.dirname(configPath)
    );
    
    // Log the resolved file names
    console.log(`${colors.cyan}Files from tsconfig:${colors.reset} ${parsedConfig.fileNames.length}`);
    
    // Create a program from the tsconfig.json
    program = ts.createProgram(parsedConfig.fileNames, parsedConfig.options);
  }
  
  // Get source files, filtering out declaration files and node_modules
  sourceFiles = program.getSourceFiles().filter(
    sourceFile => !sourceFile.isDeclarationFile && !sourceFile.fileName.includes('node_modules')
  );
  
  // If no source files were found from tsconfig, try the fallback method
  if (sourceFiles.length === 0) {
    console.warn(`${colors.yellow}Warning: No source files found from TypeScript configuration${colors.reset}`);
    console.log(`${colors.yellow}Falling back to manual file discovery...${colors.reset}`);
    
    const rootDir = process.cwd();
    const tsFiles = findTsFiles(rootDir);
    
    if (tsFiles.length === 0) {
      console.error(`${colors.red}Error: No TypeScript files found in ${rootDir}${colors.reset}`);
      process.exit(1);
    }
    
    // Create a new program with the manually discovered files
    const compilerOptions: ts.CompilerOptions = {
      target: ts.ScriptTarget.ES2015,
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.React,
    };
    
    program = ts.createProgram(tsFiles, compilerOptions);
    sourceFiles = program.getSourceFiles().filter(
      sourceFile => !sourceFile.isDeclarationFile && !sourceFile.fileName.includes('node_modules')
    );
  }
} catch (error) {
  console.error(`${colors.red}Error setting up TypeScript program:${colors.reset}`, error);
  process.exit(1);
}

// Log some source file paths for debugging
if (sourceFiles.length > 0) {
  console.log(`${colors.cyan}First few source files:${colors.reset}`);
  sourceFiles.slice(0, 3).forEach(file => {
    console.log(`  - ${path.relative(process.cwd(), file.fileName)}`);
  });
  if (sourceFiles.length > 3) {
    console.log(`  - ... and ${sourceFiles.length - 3} more`);
  }
}

console.log(`${colors.cyan}Analyzing ${colors.yellow}${sourceFiles.length}${colors.cyan} source files...${colors.reset}`);

// Step 3: Track all exports and imports
const allExports = new Map<string, Set<string>>();
const allImports = new Map<string, Set<string>>();
// Track default exports separately with file paths as keys
const defaultExports = new Map<string, boolean>();
// Track default imports with module specifiers
const defaultImports = new Map<string, Set<string>>();
let totalExportsFound = 0;
let totalImportsFound = 0;
let skippedImports = 0;

// Process all source files
for (const sourceFile of sourceFiles) {
  const filePath = sourceFile.fileName;
  
  // Process all nodes in the source file
  ts.forEachChild(sourceFile, (node) => {
    try {
      // Handle export declarations
      if (ts.isExportDeclaration(node) && node.exportClause && ts.isNamedExports(node.exportClause)) {
        for (const exportSpecifier of node.exportClause.elements) {
          const exportName = exportSpecifier.name.text;
          if (!allExports.has(exportName)) {
            allExports.set(exportName, new Set());
          }
          allExports.get(exportName)!.add(filePath);
          totalExportsFound++;
        }
      }
      
      // Handle named export variables/functions/classes
      else if (
        (ts.isFunctionDeclaration(node) || 
         ts.isClassDeclaration(node) || 
         ts.isVariableStatement(node)) && 
        node.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword)
      ) {
        if (ts.isFunctionDeclaration(node) || ts.isClassDeclaration(node)) {
          if (node.name) {
            const exportName = node.name.text;
            if (!allExports.has(exportName)) {
              allExports.set(exportName, new Set());
            }
            allExports.get(exportName)!.add(filePath);
            totalExportsFound++;
          }
        } else if (ts.isVariableStatement(node)) {
          for (const declaration of node.declarationList.declarations) {
            if (ts.isIdentifier(declaration.name)) {
              const exportName = declaration.name.text;
              if (!allExports.has(exportName)) {
                allExports.set(exportName, new Set());
              }
              allExports.get(exportName)!.add(filePath);
              totalExportsFound++;
            }
          }
        }
      }
      
      // Handle default exports
      else if (ts.isExportAssignment(node) && !node.isExportEquals) {
        // Store the file path as having a default export
        defaultExports.set(filePath, true);
        totalExportsFound++;
      }
      
      // Handle imports
      else if (ts.isImportDeclaration(node) && node.importClause) {
        // Get the module specifier (the path being imported from)
        let moduleSpecifier = '';
        
        if (node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
          moduleSpecifier = node.moduleSpecifier.text;
        } else {
          // Skip this import if we can't determine the module specifier
          skippedImports++;
          return;
        }
        
        // Default imports
        if (node.importClause.name) {
          // Track the module being imported from for default imports
          if (!defaultImports.has(moduleSpecifier)) {
            defaultImports.set(moduleSpecifier, new Set());
          }
          defaultImports.get(moduleSpecifier)!.add(filePath);
          totalImportsFound++;
          
          // Also track as a regular import
          const importName = node.importClause.name.text;
          if (!allImports.has(importName)) {
            allImports.set(importName, new Set());
          }
          allImports.get(importName)!.add(filePath);
        }
        
        // Named imports
        if (node.importClause.namedBindings && ts.isNamedImports(node.importClause.namedBindings)) {
          for (const importSpecifier of node.importClause.namedBindings.elements) {
            const importName = importSpecifier.propertyName?.text || importSpecifier.name.text;
            if (!allImports.has(importName)) {
              allImports.set(importName, new Set());
            }
            allImports.get(importName)!.add(filePath);
            totalImportsFound++;
          }
        }
      }
    } catch (error) {
      console.log(`${colors.yellow}Warning: Error processing node in ${path.relative(process.cwd(), filePath)}: ${error}${colors.reset}`);
    }
  });
}

// Step 4: Find and report unused exports
console.log(`\n${colors.cyan}Analysis complete:${colors.reset}`);
console.log(`${colors.green}Found ${totalExportsFound} exports across ${allExports.size + defaultExports.size} unique export names${colors.reset}`);
console.log(`${colors.green}Found ${totalImportsFound} imports across ${allImports.size} unique import names${colors.reset}`);
console.log(`${colors.green}Found ${defaultExports.size} files with default exports${colors.reset}`);
console.log(`${colors.green}Found ${defaultImports.size} modules with default imports${colors.reset}`);
if (skippedImports > 0) {
  console.log(`${colors.yellow}Skipped ${skippedImports} imports due to parsing issues${colors.reset}`);
}

// Resolve relative paths to absolute paths for comparison
function resolveModulePath(importPath: string, importingFilePath: string): string | null {
  try {
    // Handle non-relative imports (from node_modules, etc.)
    if (!importPath.startsWith('.')) {
      return null;
    }
    
    const importingDir = path.dirname(importingFilePath);
    const resolvedPath = path.resolve(importingDir, importPath);
    
    // Try different extensions if the exact path doesn't exist
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    
    // Check if the path exists directly
    if (fs.existsSync(resolvedPath)) {
      return resolvedPath;
    }
    
    // Try with extensions
    for (const ext of extensions) {
      const pathWithExt = `${resolvedPath}${ext}`;
      if (fs.existsSync(pathWithExt)) {
        return pathWithExt;
      }
    }
    
    // Try as a directory with index files
    for (const ext of extensions) {
      const indexPath = path.join(resolvedPath, `index${ext}`);
      if (fs.existsSync(indexPath)) {
        return indexPath;
      }
    }
    
    return null;
  } catch (error) {
    console.log(`${colors.yellow}Warning: Error resolving module path ${importPath} from ${importingFilePath}: ${error}${colors.reset}`);
    return null;
  }
}

console.log(`\n${colors.yellow}Unused exports:${colors.reset}`);
let unusedCount = 0;
const unusedExports: { name: string; files: string[] }[] = [];

// Check named exports
for (const [exportName, files] of allExports.entries()) {
  // Skip exports that are used as imports
  if (allImports.has(exportName)) {
    continue;
  }
  
  unusedCount++;
  const fileList = Array.from(files).map(file => path.relative(process.cwd(), file));
  unusedExports.push({ name: exportName, files: fileList });
}

// Check default exports
const unusedDefaultExports: string[] = [];
for (const exportFilePath of defaultExports.keys()) {
  let isUsed = false;
  
  // Check if this file's default export is imported anywhere
  for (const [importSpecifier, importingFiles] of defaultImports.entries()) {
    // Resolve the import specifier to an absolute path for each importing file
    for (const importingFile of importingFiles) {
      const resolvedPath = resolveModulePath(importSpecifier, importingFile);
      if (resolvedPath === exportFilePath) {
        isUsed = true;
        break;
      }
    }
    if (isUsed) break;
  }
  
  if (!isUsed) {
    unusedDefaultExports.push(path.relative(process.cwd(), exportFilePath));
  }
}

// Add unused default exports to the list
if (unusedDefaultExports.length > 0) {
  unusedCount += unusedDefaultExports.length;
  for (const filePath of unusedDefaultExports) {
    unusedExports.push({ name: 'default', files: [filePath] });
  }
}

// Sort unused exports by file path for better readability
unusedExports.sort((a, b) => {
  // First sort by file path
  if (a.files[0] < b.files[0]) return -1;
  if (a.files[0] > b.files[0]) return 1;
  // Then by export name
  return a.name.localeCompare(b.name);
});

// Print the results
if (unusedCount === 0) {
  console.log(`${colors.green}No unused exports found.${colors.reset}`);
} else {
  console.log(`${colors.red}Found ${unusedCount} unused exports:${colors.reset}\n`);
  
  let currentFile = '';
  for (const { name, files } of unusedExports) {
    // Group by file for better readability
    if (files[0] !== currentFile) {
      currentFile = files[0];
      console.log(`${colors.cyan}File: ${colors.yellow}${currentFile}${colors.reset}`);
    }
    console.log(`  ${colors.red}→ '${name}'${colors.reset} is exported but not imported anywhere`);
    
    // If exported in multiple files (rare but possible)
    if (files.length > 1) {
      console.log(`    Also exported in: ${files.slice(1).join(', ')}`);
    }
  }
  
  // Print suggestions
  console.log(`\n${colors.yellow}Suggestions:${colors.reset}`);
  console.log(`${colors.green}1. Remove unused exports if they're not needed${colors.reset}`);
  console.log(`${colors.green}2. For intentional public API exports, consider adding a comment: /* public API */${colors.reset}`);
  console.log(`${colors.green}3. For default exports in entry points, mark with: /* entry point */${colors.reset}`);
}