import { ALL_CARDS } from '../constants/data'

const imagePath = `/images`


class CardHelper {
	getRandomCardId(min, max): number {
		return Math.round((Math.random() * (max - min) + min))
	}

	getCardData(cardId: number) {
		return ALL_CARDS[cardId] || ALL_CARDS[0]
	}

	getCardPath(imageName: string) {
		return `${imagePath}/major/${imageName}.png`
	}
}

export default new CardHelper()
