import s from './Home.module.scss'
import MasterLayout from '../globals/MasterLayout'

function Home() {

	return (

		<MasterLayout>
			<div className={s.home}>
				<h1>Chọn chủ đề bạn đang vướng bận</h1>
				<h5>Hãy hít thở nhẹ trước khi chọn bài nhé</h5>
				<div className="one">
					<h5 className="two">Sự nghiệp</h5>
					<div>Lời khuyên cho sự nghiệp của bạn</div>
				</div>
				<div className="one">
					<h5 className="two">Tình cảm</h5>
					<div>Soi nghĩa, thấu hiểu những cảm nhận của bạn</div>
				</div>
				<div className="one">
					<a href="/random">
					<h5 className="two">Ngẫu nhiên</h5>
					<div>Để sự tình cờ dẫn lối tới thông điệp vũ trụ</div>
					</a>
				</div>
			</div>
		</MasterLayout>
	)
}

export default Home
