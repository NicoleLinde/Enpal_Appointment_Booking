import { useMutation, useQueryClient } from '@tanstack/react-query';

/**
 * Method to cancel a booked slot by sending a POST request to the API.
 *
 * @param {string} slotId The id of the slot.
 * @returns {Promise} A Promise resolving to the API response.
 */
const cancelBooking = async (slotId: string): Promise<void> => {
    const response = await fetch(`/api/slots/${slotId}/cancel-booking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to cancel the booking');
    }

    return response.json();
};

const useCancelBooking = () => {
    // Get the query client from the context
    const queryClient = useQueryClient();

    return useMutation<void, Error, string>({
        mutationFn: (slotId) => cancelBooking(slotId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['slots'] });
        },
    });
};

export default useCancelBooking;
