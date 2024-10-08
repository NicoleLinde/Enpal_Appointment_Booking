import { FunctionComponent, ReactElement} from 'react';
import { IBasicModalProps } from './properties';

/**
 * Basic modal component to use.
 *
 * @param {IBasicModalProps} props The component properties.
 * @returns {ReactElement} The basic modal component.
 */
const BasicModal: FunctionComponent<IBasicModalProps> = (props): ReactElement => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-primary bg-opacity-60 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">{props.title}</h2>
                {props.children}
            </div>
        </div>
    );
};

export default BasicModal;
