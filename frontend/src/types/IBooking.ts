import { ISlot } from './ISlot';

/**
 * Represents a single booking.
 */
interface IBooking {
    /** The booked slot. */
    slot: ISlot;
    /** The name of the customer who booked the slot. */
    customerName: string;
}

export type { IBooking };
