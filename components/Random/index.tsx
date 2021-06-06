import React, { memo, useState } from 'react'
import MasterLayout from '../globals/MasterLayout'
import cardHelper from '../helpers/cardHelper'
import Card from './Card'
import {NUMBER_OF_ALL_CARDS} from "../constants/data";
let count =0
function Random() {

	const initialCard = cardHelper.getRandomCardId(0, NUMBER_OF_ALL_CARDS)
	const [randomCard, setRandomCard] = useState<number>(initialCard)
	const [overThree, setOverThree] = useState<boolean>(false)


	const changeCard = () => {
		const randomCard = cardHelper.getRandomCardId(0, NUMBER_OF_ALL_CARDS)
		setRandomCard(randomCard)
		count++
		if (count > 3){
			setOverThree(true)
		}
	}

	return (
		<MasterLayout>
			<div className={'d-flex flex-column align-items-center'}>
				<h1 className={'bigTitle'}>Ngẫu nhiên</h1>
				<div className={'container'}>
					<div><a href={'/'}>&lt;Trở về trang trước</a></div>
					<div><a href="#"onClick={changeCard}>Rút thêm</a></div>
					{overThree ? <div className={'notify-third-card'}>Bạn đã rút hơn 3 lá liên tục, bình tĩnh nhé!</div> : null}

				</div>
				<div>
					<Card cardId={randomCard} />
				</div>
				<div><i>Các dự báo của tarot không xa hơn 1 năm</i></div>
			</div>
		</MasterLayout>
	)
}

export default memo(Random)
