import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => (
	<footer>
		<Container>
			<Row>
				<Col className="text-center">
					Made with &#9829; by <a href="https://www.tylerb.me">Tyler Bailey</a>
				</Col>
			</Row>
		</Container>
	</footer>
);

export default Footer;
