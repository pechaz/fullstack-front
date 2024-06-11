import axios, { AxiosResponse } from 'axios';

import { IUserJsonPlaceholder } from '../models';

export const getUsers = (): Promise<
	AxiosResponse<IUserJsonPlaceholder[], any>
> => {
	return axios.get('/users');
};
