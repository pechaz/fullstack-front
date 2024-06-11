import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

export interface IAlert {
	message: string;
	variant: 'error' | 'info' | 'success' | 'warn';
}

const useAlert = () => {
	const alertInfo = (message: string) => toast.info(message);

	const alertError = (message: string) => toast.error(message);

	const alertWarn = (message: string) => toast.warn(message);

	const alertSuccess = (message: string) => toast.success(message);

	const alert = ({ message, variant }: IAlert) => {
		switch (variant) {
			case 'error':
				alertError(message);
				return;
			case 'info':
				alertInfo(message);
				return;
			case 'success':
				alertSuccess(message);
				return;
			case 'warn':
				alertWarn(message);
				return;
		}
	};

	const alertList = (items: IAlert[]) => items.map((item) => alert(item));

	return { alert, alertList };
};

export default useAlert;
