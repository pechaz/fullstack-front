'use client';

import Link from 'next/link';
import {
	SortableContainer,
	SortableElement,
	SortableHandle,
} from 'react-sortable-hoc';
import { Button, Card, Checkbox, Typography } from '@material-tailwind/react';
import {
	PencilSquareIcon,
	PlusCircleIcon,
	TrashIcon,
	Bars3Icon,
} from '@heroicons/react/24/outline';

import useToDoTasks from './useToDoTasks';
import { IToDoTask } from '@/models/IToDoTask';

const ToDoListPage = () => {
	const { tasks, router, handleRemoveItem, handleUpdateItem, handleSort } =
		useToDoTasks();

	const DragHandle = SortableHandle(() => (
		<Bars3Icon className='select-none cursor-pointer w-4' />
	));

	const SortableItem = SortableElement<{
		task: IToDoTask;
		sortIndex: number;
	}>(({ task, sortIndex }: { task: IToDoTask; sortIndex: number }) => (
		<tr key={sortIndex}>
			<td>
				<div className='flex justify-center'>
					<DragHandle />
				</div>
			</td>
			<td>
				<Typography
					variant='small'
					color='blue-gray'
					className='font-normal p-4 w-full'
					placeholder={undefined}
				>
					{task.title}
				</Typography>
			</td>
			<td>
				<Typography
					variant='small'
					color='blue-gray'
					className='font-normal p-4 w-full'
					placeholder={undefined}
				>
					{task.assignedUser ?? ''}
				</Typography>
			</td>
			<td>
				<Checkbox
					crossOrigin
					checked={task.status === 'done'}
					onChange={(e) =>
						handleUpdateItem(
							sortIndex,
							e.target.checked ? 'done' : 'remained'
						)
					}
				/>
			</td>
			<td>
				<div className='flex gap-2 items-center'>
					<Link href={`to-do-task/${sortIndex}`}>
						<PencilSquareIcon className='text-green-500 cursor-pointer w-8' />
					</Link>
					<TrashIcon
						className='text-red-500 cursor-pointer w-8'
						onClick={() => handleRemoveItem(sortIndex)}
					/>
				</div>
			</td>
		</tr>
	));

	const SortableList = SortableContainer<{ tasks: IToDoTask[] }>(
		({ tasks }: { tasks: IToDoTask[] }) => {
			return (
				<tbody>
					{tasks.map((task, index) => {
						return (
							<SortableItem
								key={`item-${index}`}
								index={index}
								task={task}
								sortIndex={index}
							/>
						);
					})}
				</tbody>
			);
		}
	);

	return (
		<Card placeholder={undefined} className='w-full overflow-hidden'>
			<Button
				color='green'
				placeholder={undefined}
				className='max-w-fit flex items-center gap-2 m-3'
				onClick={() => router.push('to-do-task/create')}
			>
				<PlusCircleIcon className='text-gray-400 cursor-pointer w-8' />
				Create Task
			</Button>

			<table className='w-full min-w-max table-auto text-left'>
				<thead>
					<tr>
						<th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4' />
						<th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
							<Typography
								variant='small'
								color='blue-gray'
								className='font-normal leading-none opacity-70'
								placeholder={undefined}
							>
								Title
							</Typography>
						</th>
						<th className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
							<Typography
								variant='small'
								color='blue-gray'
								className='font-normal leading-none opacity-70'
								placeholder={undefined}
							>
								Assigned User
							</Typography>
						</th>
						<th className='border-b border-blue-gray-100 bg-blue-gray-50'>
							<Typography
								variant='small'
								color='blue-gray'
								className='font-normal leading-none opacity-90'
								placeholder={undefined}
							>
								Status
							</Typography>
						</th>
						<th className='border-b border-blue-gray-100 bg-blue-gray-50'>
							<Typography
								variant='small'
								color='blue-gray'
								className='font-normal leading-none opacity-90'
								placeholder={undefined}
							>
								Action
							</Typography>
						</th>
					</tr>
				</thead>
				<SortableList
					onSortEnd={(e) => {
						handleSort(e.oldIndex, e.newIndex);
					}}
					axis='y'
					lockAxis='y'
					lockToContainerEdges={true}
					lockOffset={['30%', '50%']}
					helperClass='helperContainerClass'
					useDragHandle={true}
					tasks={tasks}
				/>
			</table>
		</Card>
	);
};

export default ToDoListPage;
