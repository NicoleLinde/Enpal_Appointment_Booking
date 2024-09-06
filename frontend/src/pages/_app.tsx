import BasicLayout from '@/components/layout/basicLayout/basicLayoutComponent';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Roboto } from 'next/font/google';

/** Initialize  Roboto-Font with the specified subsets and weights. **/
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

// Create query client to use.
const queryClient = new QueryClient();

/**
 * The main entry point of the next js application.
 *
 * @param {AppProps} param0 The properties of the app component.
 * @returns {ReactElement} The application component.
 */
export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <BasicLayout font={roboto.className}>
                <Component {...pageProps} />
            </BasicLayout>
        </QueryClientProvider>
    );
}
