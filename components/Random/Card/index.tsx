import Image from 'next/image'
import React, { memo } from 'react'
import cardHelper from '../../helpers/cardHelper'
import {EPossibility} from "../../constants/data";

type TProps = {
	cardId: number
}

function Card(props: TProps) {
	const cardData = cardHelper.getCardData(props.cardId)
	const { image, keywords, name, possibility } = cardData
	const imagePath = cardHelper.getCardPath(image)

	const renderPossibility = function(){
		if (possibility === 0) {
			return <div>YES</div>
		} else if (possibility === 1){
			return <div>NO</div>
		} else if (possibility ===2){
			return <div>POSSIBLY</div>
		}
	}

	return (
		<div className={'text-center'}>
			<h2 className={'mt-3'}>{name}</h2>
			<Image src={imagePath} alt="Tarot Card"
				   width={300}
				   height={510}
				   layout="fixed"
			/>
			<div className={'mt-3'}>{keywords.join(' * ')}</div>
			<h2 className="mt-3 mb-3">
				{renderPossibility()}
			</h2>
		</div>
	)
}

export default memo(Card)
