import { memo, useState } from 'react'
import MasterLayout from '../globals/MasterLayout'
import cardHelper from '../helpers/cardHelper'
import Card from './Card'
import {NUMBER_OF_ALL_CARDS} from "../constants/data";

function Random() {

	const initialCard = cardHelper.getRandomCardId(0, NUMBER_OF_ALL_CARDS)
	const [randomCard, setRandomCard] = useState<number>(initialCard)

	const changeCard = () => {
		const randomCard = cardHelper.getRandomCardId(0, NUMBER_OF_ALL_CARDS)
		setRandomCard(randomCard)
	}

	return (
		<MasterLayout>
			<div className={'d-flex flex-column align-items-center'}>
				<h1 className={"bigTitle"}>Ngẫu nhiên</h1>
				<div onClick={changeCard}>
					<Card cardId={randomCard} />
				</div>
				<div><i>Các dự báo của tarot không xa hơn 1 năm</i></div>
			</div>
		</MasterLayout>
	)
}

export default memo(Random)
