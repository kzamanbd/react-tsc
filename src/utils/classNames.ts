const classNames = (...args: string[]) => {
	return args.filter(Boolean).join(' ');
};

export default classNames;
