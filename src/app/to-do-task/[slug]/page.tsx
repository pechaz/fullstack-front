import { Metadata } from 'next';

import { ToDoTaskForm } from '@/components/atomic/pages';

export const metadata: Metadata = {
	title: 'Update Task',
	description: 'Update Task',
};

export default function Page() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<ToDoTaskForm />
		</main>
	);
}
