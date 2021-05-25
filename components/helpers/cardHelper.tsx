import {ALL_CARDS} from '../constants/data'

const imagePath = `/images`


class CardHelper {
    getRandomCardId(min, max): number {
        return Math.round((Math.random() * (max - min) + min))
    }

    getCardData(cardId: number) {
        return ALL_CARDS[cardId] || ALL_CARDS[0]
    }

    getCardPath(imageName: string) {
        let path = "";
        if (imageName.includes("cups")) {
            path = `${imagePath}/minor/1 cups/${imageName}.png`
        } else if (imageName.includes("swords")) {
            path = `${imagePath}/minor/2 swords/${imageName}.png`
        } else if (imageName.includes("wands")) {
            path = `${imagePath}/minor/3 wands/${imageName}.png`
        } else if (imageName.includes("pentacles")) {
            path = `${imagePath}/minor/4 pentacles/${imageName}.png`
        } else path=`${imagePath}/major/${imageName}.png`;

        return path;
    }
}

export default new CardHelper()
