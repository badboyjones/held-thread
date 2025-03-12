/**
 * Image path constants for organizing and accessing images throughout the application.
 * Centralizes image path management and provides type safety.
 */

export const IMAGES = {
    CARD_IMAGES_PATH: 'src/images/card images/card images',
    KNOT_IMAGES_PATH: 'src/images/card images/knots',
    
    // Card images
    CARDS: {
        CARD_1: 'src/images/card images/card images/1.png',
        CARD_3: 'src/images/card images/card images/3.png',
        CARD_5: 'src/images/card images/card images/5.png',
        HEARTSPUN: 'src/images/card images/card images/HEARTSPUN handwork(2).png'
    },
    
    // Knot images
    KNOTS: {
        KNOT_1: 'src/images/card images/knots/1.png',
        KNOT_2: 'src/images/card images/knots/2.png',
        KNOT_3: 'src/images/card images/knots/3.png',
        KNOT_4: 'src/images/card images/knots/4.png',
        KNOT_5: 'src/images/card images/knots/5.png',
        COLOR_WHEEL: 'src/images/card images/knots/Natural_dye_colour_wheel.jpg'
    }
} as const;

export type ImagePaths = typeof IMAGES; 