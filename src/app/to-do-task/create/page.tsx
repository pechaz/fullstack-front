import { Metadata } from 'next';

import { ToDoTaskForm } from '@/components/atomic/pages';

export const metadata: Metadata = {
	title: 'Create ToDoTask',
	description: 'Create ToDoTask',
};

export default function Page() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<ToDoTaskForm />
		</main>
	);
}
