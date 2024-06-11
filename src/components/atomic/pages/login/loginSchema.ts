import { ValidationUtil } from '@/utils';
import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
	email: Yup.string()
		.test((value) => {
			if (!value) {
				return false;
			}
			return (
				validateEmail(value) ||
				ValidationUtil.isValidNationalCode(value)
			);
		})
		.required('Required'),
	password: Yup.string()
		.required('Required')
		.min(5, 'Too Short!')
		.matches(
			/^(?=.{1,})(?=.*[A-Za-z0-9])(?:[^*$#@]*[*$#@]){2}$/,
			'Must contain at least two special character from *$#@'
		),
});

const validateEmail = (email: string | undefined) => {
	return Yup.string().email().isValidSync(email);
};
