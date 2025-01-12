'use client';

import { Button, Typography } from '@material-tailwind/react';

import { TextField } from '../../atoms';
import useToDoTaskForm from './useToDoTaskForm';

const ToDoTaskForm = () => {
	const { formik, navigation } = useToDoTaskForm();
	const { handleSubmit, values, handleChange, errors, touched } = formik;

	return (
		<div className='p-5 rounded-lg bg-white w-1/2'>
			<form noValidate onSubmit={handleSubmit} autoComplete='off'>
				<div className='flex flex-col gap-2'>
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

					<TextField
						name='assignedUser'
						type='text'
						placeholder='Assigned User'
						onChange={handleChange}
						value={values.assignedUser ?? ''}
						error={!!(errors.assignedUser && touched.assignedUser)}
						success={!errors.assignedUser && touched.assignedUser}
						errorMessage={errors.assignedUser}
					/>

					<Typography
						variant='small'
						color='blue-gray'
						className='font-normal leading-none opacity-90'
						placeholder={undefined}
					>
						Logs
					</Typography>
					<ul>
						{values.log &&
							values.log.map((log, index) => (
								<Typography
									variant='small'
									color='blue-gray'
									className='font-normal leading-none opacity-90'
									placeholder={undefined}
								>
									{log}
								</Typography>
							))}
					</ul>

					<Button
						color='light-blue'
						ripple
						placeholder={undefined}
						type='submit'
					>
						Submit
					</Button>

					<Button
						color='orange'
						ripple
						placeholder={undefined}
						type='button'
						onClick={navigation.back}
					>
						Cancel
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ToDoTaskForm;
