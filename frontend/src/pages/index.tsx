import BusySpinnerOverlay from '@/components/busySpinner/busySpinnerOverlayComponent';
import Card from '@/components/card/cardComponent';
import CustomerBooking from '@/components/customerBooking/customerBooking';
import DatePicker from '@/components/datePicker/datePickerComponent';
import SlotConfirmationModal from '@/components/modals/slotConfirmationModal/slotConfirmationModal';
import SlotButtonSection from '@/components/slotButtonSection/slotButtonSectionComponent';
import useBookSlot from '@/hooks/useBookSlot';
import useCancelBooking from '@/hooks/useCancelBooking';
import useFetchSlots from '@/hooks/useFetchSlots';
import { ISlot } from '@/types/ISlot';
import { NextPage } from 'next';
import { useState } from 'react';

/**
 * The page component to render at "/".
 *
 * @returns {NextPage} The home page component.
 */
const Home: NextPage = () => {
    /** The date selected via date picker. */
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    /** The selected slot for booking. */
    const [selectedSlot, setSelectedSlot] = useState<ISlot | null>(null);
    /** Indicates whether the booking modal is open or not. */
    const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
    /** Whether the booking is confirmed or not. */
    const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
    /** The status message for the booking request. */
    const [message, setMessage] = useState<string | undefined>();

    /** The query hook to fetch the slots. */
    const slotsResult = useFetchSlots(selectedDate.toISOString().split('T')[0], false);
    /** Hook to book the slot. */
    const bookSlot = useBookSlot();
    /**Mutation hook to cancel the booking. */
    const cancelBooking = useCancelBooking();

    /** Open the booking modal for the selected slot. */
    const openBookingModal = (slot: ISlot) => {
        setSelectedSlot(slot);
        setIsBookingModalOpen(true);
    };

    /** Method to confirm the booking process. **/
    const confirmBooking = async (fullName: string) => {
        if (selectedSlot) {
            const slotWithCustomerName = {
                ...selectedSlot,
                bookedCustomerName: fullName,
            };
            bookSlot.mutate(slotWithCustomerName, {
                onSuccess: () => {
                    setBookingConfirmed(true);
                    setSelectedSlot(slotWithCustomerName);
                    setMessage('Booking confirmed successfully!');
                    setTimeout(() => setIsBookingModalOpen(false), 2000);
                },
                onError: () => {
                    console.error('Booking failed');
                    setMessage('Booking failed');
                },
            });
        }
    };

    /** Cancel the booking. */
    const onCancelBooking = async () => {
        if (!selectedSlot) return;

        await cancelBooking.mutateAsync(selectedSlot.id, {
            onSuccess: () => {
                setBookingConfirmed(false);
                setSelectedSlot(null);
            },
            onError: (error) => {
                console.error('Error canceling booking:', error);
            },
        });
    };

    return (
        <div className="relative flex flex-1 flex-col justify-center items-center overflow-auto py-8 bg-neutral">
            <div className="w-full max-w-6xl">
                {slotsResult.isLoading || cancelBooking.isPending || (bookSlot.isPending && <BusySpinnerOverlay />)}
                <Card>
                    {bookingConfirmed && selectedSlot ? (
                        <CustomerBooking slot={selectedSlot} onCancelBooking={onCancelBooking} />
                    ) : (
                        <div className="flex flex-col gap-32 w-full">
                            <DatePicker onChange={(newDate: Date) => setSelectedDate(newDate)} date={selectedDate} />
                            <SlotButtonSection slots={slotsResult.data || []} onSlotClick={openBookingModal} />
                            {isBookingModalOpen && selectedSlot && <SlotConfirmationModal slot={selectedSlot} updateIsOpen={setIsBookingModalOpen} onConfirm={confirmBooking} />}
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
};

export default Home;
