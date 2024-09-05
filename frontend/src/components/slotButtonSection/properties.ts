import { ISlot } from '@/types/ISlot';

/**
 * Properties for the slot button section component.
 */
interface ISlotButtonSectionProps {
    /** The slots to display. */
    slots: ISlot[];
    /** The action to perform when clicking on a slot. */
    onSlotClick: (slot: ISlot) => void;
}

export type { ISlotButtonSectionProps };
