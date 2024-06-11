import { getCookie, removeCookie, setCookie } from '@/utils/CookieUtil';
import axios from 'axios';
import { AuthService } from '.';

axios.defaults.baseURL = process.env.defaultUrl;

axios.interceptors.request.use((config) => {
	if (config.headers) {
		const token = getCookie('access_token', false);

		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
	}
	return config;
});

axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		const originalRequest = error.config;

		if (error.response.status === 401) {
			if (originalRequest.url.includes('/v1/auth/refresh-tokens')) {
				removeCookie('refresh_token');
				removeCookie('access_token');
				window.location.reload();
				return Promise.reject(error);
			}

			const refreshToken = getCookie('refresh_token', false);
			if (refreshToken) {
				return AuthService.refreshToken(String(refreshToken))
					.then((response) => {
						setCookie(
							'refresh_token',
							response.data.tokens.refresh.token
						);
						setCookie(
							'access_token',
							response.data.tokens.refresh.token
						);
						originalRequest.headers['Authorization'] =
							`Bearer ${response.data.tokens.access.token}`;
						return axios(originalRequest);
					})
					.catch(() => {
						removeCookie('refresh_token');
						removeCookie('access_token');
						window.location.reload();
						return Promise.reject(error);
					});
			} else {
				window.location.reload();
			}
		}

		return Promise.reject(error);
	}
);
