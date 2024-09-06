import React, { ReactElement, useEffect } from 'react';
import { IMessageBarProps } from './properties';

/**
 * The message bar.
 *
 * @param {IMessageBarProps} props The container properties.
 * @returns {ReactElement | null} The message bar component.
 */
const MessageBar: React.FC<IMessageBarProps> = (props): ReactElement | null => {
    useEffect(() => {
        if (props.messageState.text) {
            const timer = setTimeout(() => {
                props.onClose();
            }, props.duration || 3000);

            return () => clearTimeout(timer);
        }
    }, [props.messageState.text]);

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
