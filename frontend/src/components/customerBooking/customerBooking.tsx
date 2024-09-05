import React, { FunctionComponent, ReactElement } from 'react';
import { ICustomerBookingProps } from './properties';
import StyledButton from '../styledButton/styledButtonComponent';
import useCancelBooking from '@/hooks/useCancelBooking';

/**
 * Component to display booking for customer.
 *
 * @returns {ReactElement} The customer booking.
 */
const CustomerBooking: FunctionComponent<ICustomerBookingProps> = (props): ReactElement => {
    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-bold mb-2">Booking Confirmation</h2>
            <p className="mb-2">Your booking for {props.slot?.startDate.toLocaleString()} has been confirmed.</p>
            <p className="mb-4">Customer Name: {props.slot.bookedCustomerName}</p>
            <div className="flex gap-4">
                <StyledButton text="Cancel Booking" onClick={props.onCancelBooking} />
                <StyledButton text="Join Your Call" />
            </div>
        </div>
    );
};

export default CustomerBooking;
