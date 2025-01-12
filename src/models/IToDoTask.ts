export type TO_DO_TASK_STATUS = 'done' | 'remained';
export type TO_DO_TASK_LOG = 'change_status' | 'change_index' | 'update';

export interface IToDoTask {
	title: string;
	assignedUser?: string | null;
	status: TO_DO_TASK_STATUS;
	log?: TO_DO_TASK_LOG[];
}
