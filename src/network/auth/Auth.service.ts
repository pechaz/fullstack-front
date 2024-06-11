import axios, { AxiosResponse, CancelToken } from 'axios';

import {
	IAuthInput,
	IAuthResponse,
	IAuthResponseError,
	IFakeLogin,
} from './interfaces';

export const login = (
	data: IAuthInput
): Promise<AxiosResponse<IAuthResponse, IAuthResponseError>> => {
	return axios.post('/v1/auth/login', data, {
		withCredentials: false,
	});
};

export const refreshToken = (
	refreshToken: string
): Promise<AxiosResponse<IAuthResponse, IAuthResponseError>> => {
	return axios.post(
		'/v1/auth/refresh-tokens',
		{
			refreshToken,
		},
		{
			withCredentials: false,
		}
	);
};

export const fakeLogin = (
	data: IFakeLogin,
	cancelToken?: CancelToken
): Promise<AxiosResponse<any, any>> => {
	return axios.post('/posts', data, {
		withCredentials: false,
		cancelToken,
	});
};
