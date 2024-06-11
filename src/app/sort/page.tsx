import { Metadata } from 'next';

import { Challenge } from '@/components/atomic/pages';

export const metadata: Metadata = {
	title: 'Challenge',
	description: 'Challenge',
};

export default function Page() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Challenge />
		</main>
	);
}
