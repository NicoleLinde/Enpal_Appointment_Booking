/**
 * Properties for the card component.
 */
interface ICardProps {
    /** The children to render. */
    children: React.ReactNode;
    /** The class name to apply on the card. */
    className?: string;
    /** The minimum height of the card. */
    minHeight?: string;
}

export type { ICardProps };
