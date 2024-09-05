import { ISlot } from '@/types/ISlot';
import { useMutation } from '@tanstack/react-query';

/**
 * Method to book a slot by sending a POST request to the API.
 *
 * @param booking The booking information, including the slot and customer name.
 * @returns A Promise resolving to the API response.
 */
const bookSlot = async (slot: ISlot): Promise<void> => {
    console.log('Booking slot:', slot);
    const response = await fetch(`/api/slots/${slot.id}/book`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: slot.bookedCustomerName }),
    });

    if (!response.ok) {
        throw new Error('Failed to book the slot');
    }

    return response.json();
};

const useBookSlot = () => {
    return useMutation<void, Error, ISlot>({
        mutationFn: (slot) => bookSlot(slot),
    });
};

export default useBookSlot;
