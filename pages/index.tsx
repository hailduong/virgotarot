import Head from 'next/head'
import React from 'react'
import Random from '../components/Random'

class Home extends React.PureComponent<any, any> {

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
				<Random />
			</main>

		</div>
	}
}

export default Home
