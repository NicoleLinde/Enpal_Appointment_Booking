import { ReactNode } from 'react';

/**
 * The properties for the basic layout component.
 */
interface IBasicLayoutProps {
    /** The children to render. */
    children: ReactNode;
    /** The font to apply on the layout. */
    font?: string;
}

export type { IBasicLayoutProps };
