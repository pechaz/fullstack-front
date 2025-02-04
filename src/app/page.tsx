import { Metadata } from 'next';

import { ToDoTasks } from '@/components/atomic/pages';

export const metadata: Metadata = {
	title: 'ToDoTasks',
	description: 'ToDoTasks',
};

export default function Page() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<ToDoTasks />
		</main>
	);
}
