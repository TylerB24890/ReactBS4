import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import HomeBanner from '../Components/HomeBanner';
import PageHeader from '../Components/PageHeader';

const Home = () => (
	<div id="home">
		<HomeBanner />

		<Container fluid>
			<PageHeader headerText="Welcome to the ReactJS Starter Kit" textAlign="center" />

			<Row>
				<Col>
					<div className="cta">
						<h2>Blazing fast ReactJS routing using React Router V4.</h2>
					</div>
				</Col>
				<Col>
					<div className="cta">
						<h2>Complete Bootstrap 4 components.<br/>Reference: <a href="https://reactstrap.github.io">ReactStrap</a> for more information.</h2>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
);

export default Home;
