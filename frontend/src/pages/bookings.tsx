import { NextPage } from 'next';
import useCancelBooking from '@/hooks/useCancelBooking';
import BusySpinnerOverlay from '@/components/busySpinner/busySpinnerOverlayComponent';
import StyledButton from '@/components/styledButton/styledButtonComponent';
import useFetchSlots from '@/hooks/useFetchSlots';
import Card from '@/components/card/cardComponent';
import CancelSlotModal from '@/components/modals/cancelSlotModal/cancelSlotModal';
import { useState } from 'react';
import { ISlot } from '@/types/ISlot';
import { IMessageState } from '@/types/IMessagState';
import MessageBar from '@/components/messageBar/messageBarComponent';

/**
 * The page component to render at "/bookings".
 *
 * @returns {NextPage} The bookings page component.
 */
const Bookings: NextPage = () => {
    /** The selected slot to cancel. */
    const [selectedSlot, setSelectedSlot] = useState<ISlot | null>(null);
    /** Indicates whether the cancel modal is open or not. */
    const [isCancelModalOpen, setIsCancelModalOpen] = useState<boolean>(false);
    /** The status message for the booking request. */
    const [messageState, setMessageState] = useState<IMessageState>({ text: null, type: null });
    /** The query hook to fetch the slots. */
    const bookedSlots = useFetchSlots(undefined, true);
    /** Mutation hook to cancel the booking. */
    const cancelBooking = useCancelBooking();

    /** Cancel the booking. */
    const cancelSlot = async (slotId: string) => {
        await cancelBooking.mutateAsync(slotId, {
            onSuccess: () => {
                setIsCancelModalOpen(false);
                setMessageState({ text: 'Booking canceled successfully!', type: 'success' });
            },
            onError: (error) => {
                console.error('Error canceling booking:', error);
                setMessageState({ text: 'Error canceling booking.', type: 'error' });
            },
        });
    };

    /** Method to close the message. **/
    const handleCloseMessage = () => {
        setMessageState({ text: null, type: null });
    };

    return (
        <div className="relative flex flex-1 justify-center items-center flex-col overflow-auto py-8 bg-neutral">
            <div className="w-full max-w-6xl">
                {bookedSlots.isLoading || (cancelBooking.isPending && <BusySpinnerOverlay />)}
                <Card>
                    {bookedSlots.data && bookedSlots.data?.length > 0 ? (
                        <div className="p-10">
                            <div className="grid grid-cols-4 gap-4 font-bold mb-4">
                                <p>Date</p>
                                <p>Time</p>
                                <p>Customer Name</p>
                                <p className="justify-self-end">Cancel Appointment</p>
                            </div>
                            <div className="grid gap-3">
                                {bookedSlots.data?.map((slot) => (
                                    <div key={slot.id} className="grid grid-cols-4 gap-4 items-center">
                                        <p>{`${new Date(slot.startDate).toLocaleDateString()}`}</p>
                                        <p>{`${new Date(slot.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}</p>
                                        <p>{`${slot.bookedCustomerName}`}</p>
                                        <div className="justify-self-end">
                                            <StyledButton
                                                text="X"
                                                onClick={() => {
                                                    setSelectedSlot(slot);
                                                    setIsCancelModalOpen(true);
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p>No booked slots available.</p>
                    )}
                </Card>
                {isCancelModalOpen && selectedSlot && <CancelSlotModal slot={selectedSlot} updateIsOpen={setIsCancelModalOpen} onConfirm={cancelSlot} />}
            </div>
            <MessageBar messageState={messageState} onClose={handleCloseMessage} />
        </div>
    );
};

export default Bookings;
