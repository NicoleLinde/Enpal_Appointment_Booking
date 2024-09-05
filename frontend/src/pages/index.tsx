import BusySpinnerOverlay from '@/components/busySpinner/busySpinnerOverlayComponent';
import DatePicker from '@/components/datePicker/datePickerComponent';
import SlotConfirmationModal from '@/components/slotConfirmationModal/slotConfirmationModal';
import StyledButton from '@/components/styledButton/styledButtonComponent';
import useBookSlot from '@/hooks/useBookSlot';
import useSlots from '@/hooks/useFetchSlots';
import { IBooking } from '@/types/IBooking';
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
    const [bookingConfirmed, setBookingConfirmed] = useState(false);
    const [bookingName, setBookingName] = useState('');
    /** The status message for the booking request. */
    const [message, setMessage] = useState<string | undefined>();

    /** The query for the slots. */
    const slotsResult = useSlots(selectedDate.toISOString().split('T')[0]);

    /** Open the booking modal for the selected slot. */
    const openBookingModal = (slot: ISlot) => {
        setSelectedSlot(slot);
        setIsBookingModalOpen(true);
    };

    /** Hook to book the slot. */
    const bookSlot = useBookSlot();

    /** Method to confirm the booking process. **/
    const confirmBooking = async (fullName: string) => {
        if (selectedSlot) {
            const booking: IBooking = {
                slot: selectedSlot,
                customerName: fullName,
            };
            bookSlot.mutate(booking, {
                onSuccess: () => {
                    setBookingConfirmed(true);
                    setBookingName(fullName);
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

    return (
        <div className="flex flex-1 flex-col items-center overflow-auto py-8 bg-neutral">
            {slotsResult.isLoading && <BusySpinnerOverlay />}
            {bookingConfirmed ? (
                <p className="mt-4 text-lg">
                    Booking confirmed for {bookingName} at {selectedSlot?.startDate.toLocaleString()}
                </p>
            ) : (
                <>
                    <div className="flex flex-col items-center justify-between px-4">
                        <DatePicker label="Date" onChange={(newDate: Date) => setSelectedDate(newDate)} date={selectedDate} />
                    </div>

                    <div className="flex gap-3 flex-wrap p-10">
                        {slotsResult.data?.length ? (
                            slotsResult.data.map((slot) => (
                                <StyledButton
                                    key={slot.id}
                                    text={new Date(slot.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    onClick={() => openBookingModal(slot)}
                                />
                            ))
                        ) : (
                            <p>No slots available for this date</p>
                        )}
                    </div>

                    {isBookingModalOpen && selectedSlot && <SlotConfirmationModal slot={selectedSlot} updateIsOpen={setIsBookingModalOpen} onConfirm={confirmBooking} />}
                </>
            )}
        </div>
    );
};

export default Home;
