import { ISlot } from '@/types/ISlot';

/**
 * Properties for the slot confirmation modal component.
 */
interface ISlotConfirmationModalProps {
    /** The slot. */
    slot: ISlot;
    /** The action to update whether the modal is open or not. */
    updateIsOpen: (value: boolean) => void;
    /** The action to perform when clicking on confirm button. */
    onConfirm: (customerName: string) => void;
}

export type { ISlotConfirmationModalProps };
