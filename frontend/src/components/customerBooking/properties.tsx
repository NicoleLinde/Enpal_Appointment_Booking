import { ISlot } from '@/types/ISlot';

/**
 * Properties for customer booking component.
 */
interface ICustomerBookingProps {
    /** The booked slot to display. */
    slot: ISlot;
    /** The action to cancel a booking. */
    onCancelBooking: () => void;
}

export type { ICustomerBookingProps };
