/**
 * Properties for the primary button component
 */
interface IStyledButtonProps {
    /** The text to display. */
    text: string;
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
