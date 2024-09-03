import BasicLayout from '@/components/layout/basicLayout/basicLayoutComponent';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <BasicLayout>
            <Component {...pageProps} />
        </BasicLayout>
    );
}
