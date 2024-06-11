'use client';

import { Spinner } from '@material-tailwind/react';

import useTaskUpdatePage from './useTaskUPdatePage';
import { TaskForm } from '../../molecules';

const TaskUpdatePage = ({ id }: { id: string }) => {
	const { data, isFetching } = useTaskUpdatePage(id);

	return isFetching ? <Spinner /> : <TaskForm model={data?.data} />;
};

export default TaskUpdatePage;
