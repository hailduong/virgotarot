import Image from 'next/image'
import { memo } from 'react'
import cardHelper from '../../helpers/cardHelper'

type TProps = {
	cardId: number
}

function Card(props: TProps) {
	const cardData = cardHelper.getCardData(props.cardId)
	const { image, keywords, name } = cardData
	const imagePath = cardHelper.getCardPath(image)
	const positive = true
	return (
		<div className={'text-center'}>
			<h2>{name}</h2>
			<Image src={imagePath} alt="Tarot Card"
				   width={300}
				   height={510} />
			<div>{keywords.join(' * ')}</div>
			<h2>Yes/No</h2>
			{positive ? 'Yes' : 'No'}
		</div>
	)
}

export default memo(Card)