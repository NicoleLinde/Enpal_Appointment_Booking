import { IBooking } from '@/types/IBooking';
import { useMutation } from '@tanstack/react-query';

/**
 * Method to book a slot by sending a POST request to the API.
 *
 * @param booking The booking information, including the slot and customer name.
 * @returns A Promise resolving to the API response.
 */
const bookSlot = async (booking: IBooking): Promise<void> => {
    const response = await fetch(`/api/slots/${booking.slot.id}/book`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: booking.customerName }),
    });

    if (!response.ok) {
        throw new Error('Failed to book the slot');
    }

    return response.json();
};

const useBookSlot = () => {
    return useMutation<void, Error, IBooking>({
        mutationFn: (booking) => bookSlot(booking),
    });
};

export default useBookSlot;
