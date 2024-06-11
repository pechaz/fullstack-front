'use client';

import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { store } from '@/redux/store';
import { getCookie } from '@/utils/CookieUtil';

import './globals.css';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const queryClient = new QueryClient();

	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<html lang='en'>
					<body className={inter.className}>
						<ToastContainer />
						{children}
					</body>
				</html>
			</QueryClientProvider>
		</Provider>
	);
}
