import Image from 'next/image'
import React, { memo } from 'react'
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
			<div className={'container'}>
				<div><a href={'/'}>&lt;Trở về trang trước</a></div>
				<div>Rút thêm</div>
			</div>
			<h2 className={'mt-3'}>{name}</h2>
			<Image src={imagePath} alt="Tarot Card"
				   width={300}
				   height={510}
				   layout="fixed"
			/>
			<div className={'mt-3'}>{keywords.join(' * ')}</div>
			<h2 className="mt-3 mb-3">{positive ? 'Yes' : 'No'}</h2>
		</div>
	)
}

export default memo(Card)
