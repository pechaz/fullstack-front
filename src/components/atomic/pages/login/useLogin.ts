import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { AxiosError } from 'axios';

import { AlertHook, AuthHook } from '@/hooks';
import { handleLogin } from '@/redux/auth';
import { setCookie } from '@/utils/CookieUtil';
import { IAuthResponseError } from '@/network';

const useLogin = () => {
	const navigation = useRouter();
	const dispatch = useDispatch();
	const { alert } = AlertHook();
	const { mutate, isPending, isSuccess, data, isError, error, abort } =
		AuthHook.useFakeLogin();

	useEffect(() => {
		if (isSuccess) {
			// const accessToken = data.data.tokens.access.token;
			// const refreshToken = data.data.tokens.refresh.token;
			setCookie('access_token', 'some_thing');
			// setCookie("refresh_token", refreshToken);
			dispatch(
				handleLogin({
					isLogin: true,
				})
			);
			navigation.replace('/');
		}
	}, [isSuccess, data]);

	useEffect(() => {
		if (isError) {
			alert({
				message: (error as AxiosError<IAuthResponseError>).response
					?.data?.message!,
				variant: 'error',
			});
		}
	}, [isError, error]);

	return { mutate, isPending, abort };
};

export default useLogin;
