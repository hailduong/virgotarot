import { memo, useState } from 'react'
import MasterLayout from '../globals/MasterLayout'
import cardHelper from '../helpers/cardHelper'
import Card from './Card'

function Random() {

	const initialCard = cardHelper.getRandomCardId(0, 14)
	const [randomCard, setRandomCard] = useState<number>(initialCard)

	const changeCard = () => {
		const randomCard = cardHelper.getRandomCardId(0, 14)
		setRandomCard(randomCard)
	}

	return (
		<MasterLayout>
			<div className={'d-flex flex-column align-items-center'}>
				<h1>Random</h1>
				<div onClick={changeCard}>
					<Card cardId={randomCard} />
				</div>
				<div><i>Các dự báo của tarot không xa hơn 1 năm</i></div>
			</div>
		</MasterLayout>
	)
}

export default memo(Random)
