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
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
