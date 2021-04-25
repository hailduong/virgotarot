import { memo } from 'react'
import MasterLayout from '../globals/MasterLayout'
import cardHelper from '../helpers/cardHelper'
import Card from './Card'

function Random() {

	const randomCard = cardHelper.getRandomCardId(0, 14)

	return (
		<MasterLayout>
			<div className={'d-flex flex-column align-items-center'}>
				<h1>Random</h1>
				<Card cardId={randomCard} />
				<div><i>Các dự báo của tarrot không xa hơn 1 năm</i></div>
			</div>
		</MasterLayout>
	)
}

export default memo(Random)
