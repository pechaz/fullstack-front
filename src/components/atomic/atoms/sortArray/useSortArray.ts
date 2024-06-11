const useSortArray = () => {
	const mergeSort = (arr: number[]): number[] => {
		if (arr.length <= 1) {
			return arr;
		}
		let mid = Math.floor(arr.length / 2);
		return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
	};

	const merge = (left: number[], right: number[]) => {
		let mergeArr = [];
		let i = 0,
			j = 0;

		while (i < left.length && j < right.length) {
			if (left[i] < right[j]) {
				mergeArr.push(left[i++]);
			} else {
				mergeArr.push(right[j++]);
			}
		}
		return mergeArr.concat(left.slice(i)).concat(right.slice(j));
	};

	return { mergeSort };
};

export default useSortArray;
