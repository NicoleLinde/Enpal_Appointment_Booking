import React, { ReactElement, useEffect } from 'react';
import { IMessageBarProps } from './properties';

/**
 * The message bar.
 *
 * @param {IMessageBarProps} props The properties of the component.
 * @returns {ReactElement | null} The message bar component or no component at all.
 */
const MessageBar: React.FC<IMessageBarProps> = (props): ReactElement | null => {
    /** Closes the message bar after timeout. */
    useEffect(() => {
        if (props.messageState.text) {
            const timer = setTimeout(() => {
                props.onClose();
            }, props.duration || 3000);

            return () => clearTimeout(timer);
        }
    }, [props.messageState.text, props.duration, props.onClose]);

    /** If there is no message text in the props, return null to render nothing.
     * This prevents the component from displaying when there's no message to show.*/
    if (!props.messageState.text) return null;

    return (
        <div
            className={`fixed bottom-10 w-1/2 rounded-md text-center flex justify-between items-center px-3 ${
                props.messageState.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
        >
            {props.messageState.text}
            <button onClick={props.onClose} className="ml-4 text-lg font-bold">
                &times;
            </button>
        </div>
    );
};

export default MessageBar;
