'use client';

import { ISortArrayProps } from './SortArray.interface';
import useSortArray from './useSortArray';

const SortArray = ({ arrayA, arrayB }: ISortArrayProps) => {
	const { mergeSort } = useSortArray();

	const result = mergeSort([...arrayA, ...arrayB]);
	return (
		<div>
			{result.map((item, index) => (
				<div key={index}>{item}</div>
			))}
		</div>
	);
};

export default SortArray;
