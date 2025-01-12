export const getData = (
	key: string,
	parseAsJson: boolean = true
): Object | string | undefined => {
	const val: string = String(localStorage.getItem(key));
	if (parseAsJson) {
		try {
			const obj = JSON.parse(val);
			return obj;
		} catch (e) {
			return undefined;
		}
	} else {
		return val;
	}
};

export const setData = (key: string, value: Object | string): boolean => {
	try {
		if (typeof value !== 'string') {
			const storageVal = JSON.stringify(value);
			localStorage.setItem(key, storageVal);
		} else {
			localStorage.setItem(key, value);
		}

		return true;
	} catch (e) {
		return false;
	}
};
