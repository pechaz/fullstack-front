import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useFormik } from 'formik';

import { AlertHook } from '@/hooks';
import { IToDoTask } from '@/models/IToDoTask';
import { Constant, StorageUtil } from '@/utils';
import { todoTaskSchema } from './ToDoTask.Schema';

const useToDoTaskForm = () => {
	const navigation = useRouter();
	const { slug } = useParams();
	const { alert } = AlertHook();

	const createTask = (model: IToDoTask) => {
		model.log = [];
		const tasks = StorageUtil.getData(
			Constant.TO_DO_TASK_LOCAL_STORAGE_KEYS
		);
		if (tasks) {
			(tasks as IToDoTask[]).push(model);
			StorageUtil.setData(Constant.TO_DO_TASK_LOCAL_STORAGE_KEYS, tasks);
		} else {
			StorageUtil.setData(Constant.TO_DO_TASK_LOCAL_STORAGE_KEYS, [
				model,
			]);
		}
		alert({
			message: 'Task created successfully',
			variant: 'success',
		});
		navigation.back();
	};

	const updateTask = (model: IToDoTask) => {
		const tasks = StorageUtil.getData(
			Constant.TO_DO_TASK_LOCAL_STORAGE_KEYS
		);
		if (tasks) {
			const newTasks = (tasks as IToDoTask[]).map((task, index) => {
				if (index !== Number(slug)) {
					return task;
				}
				task.log!.push('update');
				task.title = model.title;
				task.assignedUser = model.assignedUser;
				return task;
			});
			StorageUtil.setData(
				Constant.TO_DO_TASK_LOCAL_STORAGE_KEYS,
				newTasks
			);
			alert({
				message: 'Task updated successfully',
				variant: 'success',
			});
			navigation.back();
		} else {
			alert({
				message: 'Some thing wrong',
				variant: 'error',
			});
		}
	};

	const formik = useFormik<IToDoTask>({
		initialValues: {
			title: '',
			assignedUser: null,
			status: 'remained',
			log: [],
		},
		enableReinitialize: true,
		onSubmit: slug !== undefined ? updateTask : createTask,
		validationSchema: todoTaskSchema,
	});

	useEffect(() => {
		if (slug !== undefined) {
			const data = StorageUtil.getData(
				Constant.TO_DO_TASK_LOCAL_STORAGE_KEYS
			);
			if (data && Array.isArray(data)) {
				const model = data[Number(slug)] as IToDoTask;
				formik.setValues(model);
			}
		}
	}, [slug]);

	return { formik, navigation };
};

export default useToDoTaskForm;
