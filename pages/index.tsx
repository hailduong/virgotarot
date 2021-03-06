import Head from 'next/head'
import React from 'react'
import Home from '../components/Home'

// import Random from '../components/Random'

class RandomPage extends React.PureComponent<any, any> {

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
				<Home />
			</main>

		</div>
	}
}

export default RandomPage
