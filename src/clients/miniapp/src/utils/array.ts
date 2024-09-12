export const chunkArray = <T>(array: T[], size: number) =>
	array.reduce<T[][]>((acc, _, i) => (i % size ? acc : [...acc, array.slice(i, i + size)]), [])
