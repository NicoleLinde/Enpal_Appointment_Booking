/**
 * Represents a single slot.
 */
interface ISlot {
    /** The unique identifier of the slot. */
    id: string;
    /** The start date of the slot. */
    startDate: Date | string;
}

export type { ISlot };
