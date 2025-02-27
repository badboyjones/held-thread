/**
 * Global style constants for maintaining consistent visual hierarchy
 * across the Held Thread website.
 */

// Button style configurations
export const BUTTON_STYLES = {
    primary: {
        padding: "10px 20px",
        borderRadius: "30px",
        margin: "10px",
        backgroundColor: "#87b5ca",
        color: "white",
        hoverColor: "#9dbfd1",
        hoverTextColor: "white",
        width: "auto"
    },
    secondary: {
        backgroundColor: "#fff",
        color: "#87b5ca",
        hoverColor: "#f4fbff",
        hoverTextColor: "#87b5ca",
    },
    shared: {
        padding: "10px 20px",
        borderRadius: "30px",
        margin: "10px",
    }
} as const;

// Image path constants
export const IMAGES = {
    CARD_IMAGES_PATH: 'src/images/card images/card images',
    KNOT_IMAGES_PATH: 'src/images/card images/knots',
    
    // Card images
    CARDS: {
        CARD_1: 'src/images/card images/card images/1.png',
        CARD_3: 'src/images/card images/card images/3.png',
        CARD_5: 'src/images/card images/card images/5.png',
    },
    
    // Knot images
    KNOTS: {
        KNOT_1: 'src/images/card images/knots/1.png',
        KNOT_2: 'src/images/card images/knots/2.png',
        KNOT_3: 'src/images/card images/knots/3.png',
        KNOT_4: 'src/images/card images/knots/4.png',
        KNOT_5: 'src/images/card images/knots/5.png',
    }
} as const; 