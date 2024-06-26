import { Metadata } from 'next';

import { UsersPage } from '@/components/atomic/pages';

export const metadata: Metadata = {
	title: 'Users',
	description: 'users',
};

export default function Page() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<UsersPage />
		</main>
	);
}
