import { ReactElement } from 'react';

/**
 * Properties for the styled button component
 */
interface IStyledButtonProps {
    /** The text to display. */
    text?: string;
    /** The icon to display. */
    icon?: ReactElement;
    /** The action to execute on click. */
    onClick?: () => void;
    /** The background color of the button. */
    backgroundColor?: string;
    /** The text color of the button. */
    textColor?: string;
    /** Indicated whether the button is disabled. */
    disabled?: boolean;
}

export type { IStyledButtonProps };
