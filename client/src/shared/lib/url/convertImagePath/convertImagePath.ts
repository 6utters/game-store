export function convertImagePath(imagePath: string): string {
	return imagePath.slice(0, 1) === '/' ? imagePath : `/${imagePath}`
}