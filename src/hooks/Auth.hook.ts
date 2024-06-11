import { useMutation } from '@tanstack/react-query';

import { AuthService, IFakeLogin } from '@/network';
import axios from 'axios';

export function useLogin() {
	return useMutation({
		mutationFn: AuthService.login,
	});
}

export function useFakeLogin() {
	const source = axios.CancelToken.source();

	const mutation = useMutation({
		mutationFn: (data: IFakeLogin) =>
			AuthService.fakeLogin(data, source.token),
	});

	const abort = () => {
		source.cancel('abort by user');
	};

	return { ...mutation, abort, isCanceled: axios.isCancel };
}
