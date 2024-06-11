'use client';

import { Form, Formik } from 'formik';
import { Button } from '@material-tailwind/react';
import { format } from 'date-fns';

import { TextField, TextArea, DatePicker, Dropdown } from '../../atoms';
import { taskSchema } from './taskSchema';
import useTaskForm from './useTaskForm';
import { TaskStatus } from '@/models';
import { ITaskFormProps } from './TaskForm.interface';

const TaskForm = ({ model }: ITaskFormProps) => {
	const { createIsPending, createMutate, updateMutate, updateIsPending } =
		useTaskForm();

	return (
		<div className='p-4 rounded-lg bg-white w-1/3'>
			<Formik
				initialValues={{
					title: model?.title ?? '',
					description: model?.description ?? '',
					status: model?.status ?? TaskStatus.IN_PROGRESS,
					dueDate: model?.dueDate ?? '',
				}}
				validationSchema={taskSchema}
				onSubmit={(values) => {
					model
						? updateMutate({
								...values,
								id: model.id,
							})
						: createMutate(values);
				}}
			>
				{(props) => {
					const {
						handleChange,
						values,
						touched,
						errors,
						handleSubmit,
						setFieldValue,
					} = props;
					return (
						<Form>
							<div className='flex flex-col gap-2 overflow-hidden'>
								<TextField
									name='title'
									type='text'
									placeholder='Title'
									onChange={handleChange}
									value={values.title}
									error={!!(errors.title && touched.title)}
									success={!errors.title && touched.title}
									errorMessage={errors.title}
								/>

								<TextArea
									name='description'
									placeholder='Description'
									onChange={handleChange}
									value={values.description}
									error={
										!!(
											errors.description &&
											touched.description
										)
									}
									success={
										!errors.description &&
										touched.description
									}
									errorMessage={errors.description}
								/>

								<DatePicker
									name='dueDate'
									placeholder='Due Date'
									onChange={(date) => {
										if (date) {
											setFieldValue(
												'dueDate',
												format(date, 'yyyy-MM-dd')
											);
										} else {
											setFieldValue('dueDate', undefined);
										}
									}}
									value={
										values.dueDate
											? new Date(values.dueDate!)
											: undefined
									}
									error={
										!!(errors.dueDate && touched.dueDate)
									}
									success={!errors.dueDate && touched.dueDate}
									errorMessage={errors.dueDate}
								/>

								<Dropdown
									options={[
										{
											label: 'In Progress',
											value: String(
												TaskStatus.IN_PROGRESS
											),
										},
										{
											label: 'Done',
											value: String(TaskStatus.DONE),
										},
									]}
									name='status'
									placeholder='Status'
									onChange={(val) =>
										setFieldValue('status', val)
									}
									value={String(values.status)}
									error={!!(errors.status && touched.status)}
									success={!errors.status && touched.status}
									errorMessage={errors.status}
								/>

								<Button
									color='light-blue'
									ripple
									placeholder={undefined}
									disabled={
										createIsPending || updateIsPending
									}
									onClick={() => handleSubmit()}
								>
									Submit
								</Button>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default TaskForm;
