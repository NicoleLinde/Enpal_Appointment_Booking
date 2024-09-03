import Image from 'next/image';
import { Inter } from 'next/font/google';
import { NextPage } from 'next';
import BasicLayout from '@/components/layout/basicLayout/basicLayoutComponent';

const inter = Inter({ subsets: ['latin'] });

/**
 * The page component to render at "/bookings".
 *
 * @returns {NextPage} The bookings page component.
 */
const Bookings: NextPage = () => {
    return (
        <>
           Bookings
        </>
    );
};

export default Bookings;
