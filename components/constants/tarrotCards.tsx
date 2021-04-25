const imagePath = `/images`

export function getMajorCardPath(card: EMajor) {
	return `${imagePath}/major/${card}.png`
}

export enum EMajor {
	theFool = '0 the-fool'
}
