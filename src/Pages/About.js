import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import PageHeader from  '../Components/PageHeader';

const About = () => (
	<div id="about">
		<Container fluid>
			<PageHeader headerText="About ReactJS Starter Kit" />

			<Row>
				<Col>
					<h4>Tips</h4>
				</Col>
			</Row>

			<Row>
				<Col>
					You can use &lt;Col&gt;&lt;/Col&gt; to render equal columns as long as it's wrapped in a &lt;Row&gt;&lt;/Row&gt;
				</Col>
			</Row>
		</Container>
	</div>
);

export default About;
