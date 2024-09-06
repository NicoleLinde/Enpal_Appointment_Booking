import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

/**
 * Framework file by NextJS https://nextjs.org/docs/advanced-features/custom-document
 *
 * @returns {Element} Document outline
 */
export default function Document(): JSX.Element {
    return (
        <Html>
            <Head>
                <title>Booking</title>
                <meta name="description" content="This is a booking app." />
                <meta property="og:title" content="Booking" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
