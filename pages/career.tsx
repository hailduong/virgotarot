import Head from 'next/head'
import React from 'react'
import MasterLayout from "../components/globals/MasterLayout";
import Card from "../components/Random/Card";

class Index extends React.PureComponent<any, any> {

	constructor(props, context) {
		super(props, context)
	}

	render() {


		return <div className="container-fluid">
			<Head>
				<title>Virgo Tarot</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<MasterLayout>
					<div className="dung">
						<div className={"container"}>
							<div><a href={"/"}>&lt;Trở về trang trước</a></div>
							<div>Rút thêm</div>
						</div>
						<h1>Sự nghiệp</h1>
						<img src="/images/major/0 the-fool.png" alt="Tarot card"/>
						<div className={"tarotCardNumber upperCard"}>0.</div>
						<div className={"major upperCard"}>Chàng khờ</div>
						<div className={"minor"}>Tôi hào hứng với những cơ hội</div>
						<div className={"minor"}>Tôi muốn ra khỏi vùng an toàn</div>
						<div><i>*Các dự báo của tarot không xa hơn 1 năm</i></div>
					</div>
				</MasterLayout>
			</main>

		</div>
	}
}

export default Index
