import React from 'react';

import HomeBanner from '../Components/HomeBanner';
import PageHeader from '../Components/PageHeader';

const Home = () => (
	<div id="home">
		<HomeBanner />

		<div className="container-fluid">
			<PageHeader headerText="Welcome to the ReactJS Starter Kit" textAlign="center" />

			<div className="row">
				<div className="col">
					<div className="cta">
						<h2>Extremely fast "single page" websites.</h2>
					</div>
				</div>

				<div className="col">
					<div className="cta">
						<h2>Bootstrap 4 elements and pre-built layouts</h2>
					</div>
				</div>

				<div className="col">
					<div className="cta">
						<h2>Extremely fast "single page" websites.</h2>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Home;
