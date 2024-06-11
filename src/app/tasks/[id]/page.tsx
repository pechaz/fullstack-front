import { Metadata } from 'next';

import { TaskUpdatePage } from '@/components/atomic/pages';

export const metadata: Metadata = {
	title: 'Update Task',
	description: 'update task',
};

export default function Page({ params }: { params: { id: string } }) {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<TaskUpdatePage id={params.id} />
		</main>
	);
}
