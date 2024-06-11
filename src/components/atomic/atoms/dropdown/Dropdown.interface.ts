import { ChangeEvent } from 'react';

interface DropdownOption {
	label: string;
	value: string;
}

export interface IDropdownProps {
	value: string;
	options: DropdownOption[];
	name: string;
	placeholder: string;
	onChange: (val: string) => void;
	error?: boolean;
	success?: boolean;
	errorMessage?: string;
	className?: string;
}
