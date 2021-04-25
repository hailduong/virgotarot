import { memo } from 'react'
import { EMajor, getMajorCardPath } from '../constants/tarrotCards'
import MasterLayout from '../globals/MasterLayout'

function Random() {
	const data = {
		image: getMajorCardPath(EMajor.theFool),
		name: 'Chàng khờ',
		keywords: ['Khởi đầu', 'Tự do', 'Tinh khiết', 'Tính không', 'Vô thức'],
		positive: true
	}

	const { image, keywords, name, positive } = data

	return (
		<MasterLayout>
			<div className={'d-flex flex-column align-items-center'}>
				<h1>Random</h1>
				<img src={image} />
				<div>{keywords.join('* ')}</div>
				<h2>Yes/No</h2>
				{positive ? 'Yes' : 'No'}
				<div><i>Các dự báo của tarrot không xa hơn 1 năm</i></div>
			</div>
		</MasterLayout>
	)
}

export default memo(Random)
