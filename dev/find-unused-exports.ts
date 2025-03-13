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
let totalExportsFound = 0;
let totalImportsFound = 0;

// Process all source files
for (const sourceFile of sourceFiles) {
  const filePath = sourceFile.fileName;
  
  // Process all nodes in the source file
  ts.forEachChild(sourceFile, (node) => {
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
      const defaultExport = 'default';
      if (!allExports.has(defaultExport)) {
        allExports.set(defaultExport, new Set());
      }
      allExports.get(defaultExport)!.add(filePath);
      totalExportsFound++;
    }
    
    // Handle imports
    else if (ts.isImportDeclaration(node) && node.importClause) {
      // Default imports
      if (node.importClause.name) {
        const importName = node.importClause.name.text;
        if (!allImports.has(importName)) {
          allImports.set(importName, new Set());
        }
        allImports.get(importName)!.add(filePath);
        totalImportsFound++;
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
  });
}

// Step 4: Find and report unused exports
console.log(`\n${colors.cyan}Analysis complete:${colors.reset}`);
console.log(`${colors.green}Found ${totalExportsFound} exports across ${allExports.size} unique export names${colors.reset}`);
console.log(`${colors.green}Found ${totalImportsFound} imports across ${allImports.size} unique import names${colors.reset}`);

console.log(`\n${colors.yellow}Unused exports:${colors.reset}`);
let unusedCount = 0;
const unusedExports: { name: string; files: string[] }[] = [];

for (const [exportName, files] of allExports.entries()) {
  // Skip exports that are used as imports
  if (allImports.has(exportName)) {
    continue;
  }
  
  unusedCount++;
  const fileList = Array.from(files).map(file => path.relative(process.cwd(), file));
  unusedExports.push({ name: exportName, files: fileList });
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
}