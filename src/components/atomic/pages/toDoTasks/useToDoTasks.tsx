import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { arrayMoveImmutable } from 'array-move';

import { IToDoTask, TO_DO_TASK_STATUS } from '@/models/IToDoTask';
import { Constant, StorageUtil } from '@/utils';

const useToDoTasks = () => {
	const router = useRouter();

	const [tasks, setTasks] = useState<IToDoTask[]>([]);

	const handleRemoveItem = (index: number) => {
		const newTasks = tasks.filter((_, i) => i !== index);
		setTasks(newTasks);
		StorageUtil.setData(Constant.TO_DO_TASK_LOCAL_STORAGE_KEYS, newTasks);
	};

	const handleUpdateItem = (index: number, status: TO_DO_TASK_STATUS) => {
		const newTasks = tasks.map((item, i) => {
			if (i === index) {
				item.status = status;
				item.log!.push('change_status');
				return item;
			} else {
				return item;
			}
		});
		setTasks(newTasks);
		StorageUtil.setData(Constant.TO_DO_TASK_LOCAL_STORAGE_KEYS, newTasks);
	};

	const handleSort = (oldIndex: number, newIndex: number) => {
		const newSortTasks = arrayMoveImmutable(tasks, oldIndex, newIndex);
		const newTasks = newSortTasks.map((item) => {
			item.log!.push('change_index');
			return item;
		});
		setTasks(newTasks);
		StorageUtil.setData(Constant.TO_DO_TASK_LOCAL_STORAGE_KEYS, newTasks);
	};

	useEffect(() => {
		const existData = StorageUtil.getData(
			Constant.TO_DO_TASK_LOCAL_STORAGE_KEYS
		);
		if (existData) {
			setTasks(existData as IToDoTask[]);
		}
	}, []);

	return {
		router,
		tasks,
		setTasks,
		handleRemoveItem,
		handleUpdateItem,
		handleSort,
	};
};

export default useToDoTasks;
