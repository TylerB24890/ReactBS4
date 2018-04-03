import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import PageHeader from  '../Components/PageHeader';

const About = () => (
	<div id="about">
		<Container fluid>
			<PageHeader headerText="About ReactJS Starter Kit" />

			<Row>
				<Col>
					<h4>This is the about page content.</h4>
				</Col>
			</Row>
		</Container>
	</div>
);

export default About;
