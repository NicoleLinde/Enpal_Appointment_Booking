import { ReactElement } from 'react';
import { IBasicLayoutProps } from './properties';
import NavigationBar from '@/components/navigationBar/navigationBarComponent';

/**
 * Basic layout to wrap children.
 *
 * @param {IBasicLayoutProps} props The component properties.
 * @returns {ReactElement} The basic layout component.
 */
const BasicLayout = (props: IBasicLayoutProps): ReactElement => {
    return (
        <div className="flex max-h-screen flex-1 flex-col antialiased">
            <div className="h-16 p-2 flex items-center min-h-max border-b border-base bg-neutral shadow-sm">
                <h1>Booking</h1>
            </div>
            <div className="flex flex-1 overflow-hidden">
                <NavigationBar />
                {props.children}
            </div>
        </div>
    );
};

export default BasicLayout;
