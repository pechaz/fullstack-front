import './config';

export * as AuthService from './auth/Auth.service';
export type {
	IAuthInput,
	IAuthResponse,
	IAuthResponseError,
	IFakeLogin,
} from './auth/interfaces';

export * as TaskService from './task/Task.service';
export * as JSONPlaceHolderService from './JSONPlaceHolder.service';
