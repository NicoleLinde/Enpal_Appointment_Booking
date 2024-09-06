import { ISlot } from '@/types/ISlot';

/**
 * Properties for the slot cancelation modal component.
 */
interface ICancelSlotModalProps {
    /** The slot. */
    slot: ISlot;
    /** The action to update whether the modal is open or not. */
    updateIsOpen: (value: boolean) => void;
    /** The action to perform when clicking on confirm button. */
    onConfirm: (slotId: string) => void;
}

export type { ICancelSlotModalProps };
