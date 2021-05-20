import MasterLayout from '../globals/MasterLayout'
import s from './Home.module.scss'

function Home() {

	return (

		<MasterLayout>
			<div className={s.home}>
				<h1>Chọn chủ đề bạn đang vướng bận</h1>
				<div className="pageSubTitle">Hãy hít thở nhẹ trước khi chọn bài nhé</div>
				<div className="box backgroundOrange">
					<a href={"/career"}>
						<h5 className="boxTitle">Sự nghiệp</h5>
						<div className="boxSubTitle">Lời khuyên cho sự nghiệp của bạn</div>
					</a>
				</div>
				<div className="box backgroundPurple">
					<h5 className="boxTitle">Tình cảm</h5>
					<div className="boxSubTitle">Soi nghĩa, thấu hiểu những cảm nhận của bạn</div>
				</div>
				<div className="box backgroundGreen">
					<a href="/random">
						<h5 className="boxTitle">Ngẫu nhiên</h5>
						<div className="boxSubTitle">Để sự tình cờ dẫn lối tới thông điệp vũ trụ</div>
					</a>
				</div>
			</div>
		</MasterLayout>
	)
}

export default Home
