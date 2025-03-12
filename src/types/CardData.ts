/**
 * CardData interface defines the structure for card data used across components.
 */
import { ReactNode } from 'react';

export interface CardData {
    title: string;
    description: ReactNode;
    buttonText: string;
    imageUrl: string;
    imageAlt: string;
    titleColor: string;
    link: string;
} 