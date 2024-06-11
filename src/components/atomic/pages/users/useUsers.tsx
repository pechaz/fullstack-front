import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { JsonPlaceholderHook } from '@/hooks';
import { IUserJsonPlaceholder } from '@/models';

const useUsers = () => {
	const [deletingIndex, setDeletingIndex] = useState(-1);
	const [search, setSearch] = useState('');
	const [dataList, setDataList] = useState<IUserJsonPlaceholder[]>([]);
	const { data, refetch } = JsonPlaceholderHook.useUsers();
	const navigation = useRouter();

	useEffect(() => {
		if (data && data.data) {
			setDataList(
				search
					? data.data.filter((item) => {
							const key = search.toLowerCase();
							return (
								item.name.toLocaleLowerCase().includes(key) ||
								item.email.toLocaleLowerCase().includes(key)
							);
						})
					: data.data
			);
		}
	}, [data, search]);

	return {
		data,
		refetch,
		// mutate,
		navigation,
		// isPending,
		deletingIndex,
		setDeletingIndex,
		dataList,
		search,
		setSearch,
	};
};

export default useUsers;
