export const ImageURL = (): string => {
	const random = Math.floor(Math.random() * 100) + 1;
	return `https://picsum.photos/id/${random}/300/300`;
};
