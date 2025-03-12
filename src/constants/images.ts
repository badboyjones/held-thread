import Card1 from '/card_images/1.png'
import Card3 from '/card_images/3.png'
import Card5 from '/card_images/5.png'
import Heartspun from '/card_images/HEARTSPUN handwork(2).png'

import Knot1 from '/knot_images/1.png'
import Knot2 from '/knot_images/2.png'
import Knot3 from '/knot_images/3.png'
import Knot4 from '/knot_images/4.png'
import Knot5 from '/knot_images/5.png'
import ColorWheel from '/knot_images/Natural_dye_colour_wheel.jpg'
import TransparentStars from '/card_images/Transparent Stars.png'
import AboutCollage from '/card_images/about collage.png'

/**
 * Image path constants for organizing and accessing images throughout the application.
 * Centralizes image path management and provides type safety.
 */
export const IMAGES = {
    CARD_IMAGES_PATH: 'src/images/card images/card images',
    KNOT_IMAGES_PATH: 'src/images/card images/knots',
    
    // Card images
    CARDS: {
        CARD_1: Card1,
        CARD_3: Card3,
        CARD_5: Card5,
        HEARTSPUN: Heartspun,
        TRANSPARENT_STARS: TransparentStars,
        ABOUT_COLLAGE: AboutCollage
    },
    
    // Knot images
    KNOTS: {
        KNOT_1: Knot1,
        KNOT_2: Knot2,
        KNOT_3: Knot3,
        KNOT_4: Knot4,
        KNOT_5: Knot5,
        COLOR_WHEEL: ColorWheel
    }
} as const;

export type ImagePaths = typeof IMAGES; 