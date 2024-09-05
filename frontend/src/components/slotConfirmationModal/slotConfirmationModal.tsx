import { FunctionComponent, ReactElement, useState } from 'react';
import { ISlotConfirmationModalProps } from './properties';
import StyledButton from '../styledButton/styledButtonComponent';

/**
 * Booking modal to confirm or cancel booking process.
 *
 * @param {IBookingModalProps} props The component properties.
 * @returns {ReactElement} The booking modal component.
 */
const BookingModal: FunctionComponent<ISlotConfirmationModalProps> = (props): ReactElement => {
    /** The costumer's first name. */
    const [firstName, setFirstName] = useState<string>('');
    /** The costumer's last name. */
    const [lastName, setLastName] = useState<string>('');

    /** Confirm button disabled if name is empty or undefined **/
    const confirmDisabled = firstName === '' || firstName === undefined || lastName === '' || lastName === undefined;

    /** Method to cancel the booking process. **/
    const onCancel = () => {
        setFirstName('');
        setLastName('');
        props.updateIsOpen(false);
    };

    /** Method to confirm the booking process. **/
    const handleConfirm = () => {
        const fullName = `${firstName.trim()} ${lastName.trim()}`;
        props.onConfirm(fullName);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">Confirm your slot</h2>
                <div className="flex gap-3">
                    <div className="flex flex-col gap-2">
                        <label>First name</label>
                        <input type="text" placeholder="Enter your name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Last name</label>
                        <input type="text" placeholder="Enter your name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                </div>
                <p className="my-1 font-medium">Selected Slot:</p>
                <p>Date: {new Date(props.slot.startDate).toLocaleDateString()}</p>
                <p className="my-1">Time: {new Date(props.slot.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                <p className="my-1">Duration: 30 min.</p>
                <div className="flex justify-end gap-2 pt-6">
                    <StyledButton text="Cancel" onClick={onCancel} backgroundColor="bg-transparent" textColor="text-primary" />
                    <StyledButton text="Confirm" onClick={handleConfirm} disabled={confirmDisabled} />
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
