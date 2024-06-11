'use client';

import { TaskHook } from '@/hooks';

const useTaskUpdatePage = (id: string) => {
	const { data, isFetching } = TaskHook.useTask(id);

	return {
		data,
		isFetching,
	};
};

export default useTaskUpdatePage;
