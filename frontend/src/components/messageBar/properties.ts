import { IMessageState } from '@/types/IMessagState';

/**
 * Properties for the message bar component.
 */
interface IMessageBarProps {
    /** The message to display. */
    messageState: IMessageState;
    /** The action to perform when closing the message. */
    onClose: () => void;
    /** The duration of the message display. */
    duration?: number;
}

export type { IMessageBarProps };
