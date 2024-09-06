import 'react-datepicker/dist/react-datepicker.css';
import React, { FunctionComponent, ReactElement } from 'react';
import RDatePicker, { registerLocale } from 'react-datepicker';
import { de } from 'date-fns/locale';

import { IDatePickerProps } from './properties';

registerLocale('de', de);

/**
 * Basic date picker.
 *
 * @param {IDatePickerProps} props The component properties.
 * @returns {ReactElement} The date picker component.
 */
const DatePicker: FunctionComponent<IDatePickerProps> = (props): ReactElement => {
    return (
        <div className="form-control w-full max-w-full">
            <h3 className="font-semibold py-3">Pick a date</h3>
            {props.label && props.label !== '' && <p>{props.label}</p>}
            <RDatePicker
                selected={props.date}
                onChange={(newValue) => {
                    if (newValue) {
                        props.onChange(newValue);
                    }
                }}
                locale={'de'}
                minDate={props.minDate}
                maxDate={props.maxDate}
                dateFormat={'dd.MM.yyyy'}
                placeholderText={props.placeholder}
                showPopperArrow={false}
                className={'w-full p-3 border border-gray-300 rounded-md'}
            />
        </div>
    );
};

export default DatePicker;
