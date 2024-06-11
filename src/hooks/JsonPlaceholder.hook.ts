import { useQuery } from '@tanstack/react-query';

import { JSONPlaceHolderService } from '@/network';

export const useUsers = () => {
	const { data, error, isFetching, isLoading, isError, isSuccess, refetch } =
		useQuery({
			queryKey: ['users'],
			queryFn: JSONPlaceHolderService.getUsers,
			retry: false,
			refetchOnWindowFocus: false,
		});

	return {
		data,
		error,
		isFetching,
		isLoading,
		isError,
		isSuccess,
		refetch,
	};
};
