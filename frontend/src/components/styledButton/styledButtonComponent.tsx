import { FunctionComponent, ReactElement } from 'react';
import { IStyledButtonProps } from './properties';

/**
 * The styled button.
 *
 * @param {IStyledButtonProps} props The component properties.
 * @returns {ReactElement} The styled button component.
 */
const StyledButton: FunctionComponent<IStyledButtonProps> = (props): ReactElement => {
    return (
        <button
            className={`flex items-center font-semibold justify-center p-3 rounded-md min-w-24 ${props.disabled ? 'bg-disabled' : props.backgroundColor ?? 'bg-primary'} ${
                props.textColor ?? ' text-neutral-content'
            }`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            <span className='flex justify-center items-center gap-2'>
                {props.icon} {props.text}
            </span>
        </button>
    );
};

export default StyledButton;
