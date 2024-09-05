import { FunctionComponent, ReactElement } from 'react';
import { IStyledButtonProps } from './properties';

/**
 * The styled button.
 *
 * @param {IPrimaryButtonProps} props The component properties.
 * @returns {ReactElement} The styled button component.
 */
const StyledButton: FunctionComponent<IStyledButtonProps> = (props): ReactElement => {
    return (
        <button
            className={`flex items-center justify-center p-3 rounded-md min-w-20 ${props.disabled ? 'bg-disabled' : props.backgroundColor ?? 'bg-primary'} ${
                props.textColor ?? ' text-neutral-content'
            }`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.text}
        </button>
    );
};

export default StyledButton;
