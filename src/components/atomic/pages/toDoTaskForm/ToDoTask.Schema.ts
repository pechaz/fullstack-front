import * as Yup from 'yup';

import { IToDoTask } from '@/models/IToDoTask';

export const todoTaskSchema = Yup.object<IToDoTask>().shape({
	title: Yup.string().required('Required'),
	assignedUser: Yup.string().nullable(),
});
