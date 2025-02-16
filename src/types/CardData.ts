/**
 * CardData interface defines the structure for card data used across components.
 */
export interface CardData {
    title: string;
    description: string;
    buttonText: string;
    imageUrl: string;
    onButtonClick: () => void;
    titleColor: string; // Ensure titleColor is included
} 