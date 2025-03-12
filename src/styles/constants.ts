/**
 * Theme constants for buttons and other UI elements
 */
export const buttonStyles = {
    primary: {
        backgroundColor: '#87b5ca',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '30px',
        hoverColor: '#9dbfd1',
        hoverTextColor: 'white'
    },
    secondary: {
        backgroundColor: '#fff',
        color: '#87b5ca',
        padding: '10px 20px',
        borderRadius: '30px',
        hoverColor: '#f4fbff',
        hoverTextColor: '#87b5ca',
        margin: '10px'
    }
};

export const spacing = {
    small: '1rem',
    medium: '2rem',
    large: '4rem',
};

export const breakpoints = {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
};

export const sectionStyles = {
    welcome: {
        backgroundColor: '#ffffff',
        titleColor: '#87b5ca',
        subtitleColor: '#87b5ca'
    },
    intro: {
        backgroundColor: '#D6E9F2',
        imageWidth: '50%',
        textWidth: '50%',
        maxHeight: '100%',
        maxWidth: 'auto%',
        mobileMaxHeight: '100%',
        mobileMaxWidth: '100%'
    },
    offerings: {
        titleColor: '#333',
        titleFontSize: '3rem',
        titleMargin: '30px'
    }
};

export const textStyles = {
    paragraph: {
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        lineHeight: '1.6',
        marginBottom: spacing.medium,
        textAlign: 'left'
    },
    title: {
        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
        lineHeight: '1.2',
        marginBottom: spacing.medium,
        textAlign: 'left'
    },
    subtitle: {
        fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
        lineHeight: '1.4',
        marginBottom: spacing.small,
        textAlign: 'left'
    }
}; 