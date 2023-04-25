export const ConvertDate = (time: string) => {
	const timestamp = Date.parse(time);
	const date = new Date(timestamp);
	return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
};
