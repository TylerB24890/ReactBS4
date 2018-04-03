import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';

class PageHeader extends Component {

	constructor(props) {
		super(props);

		this.state = {
			headerText: props.headerText,
			textAlign: (props.textAlign ? props.textAlign : "left")
		}
	}

	render() {

		var headerStyle = {
			textAlign: this.state.textAlign
		}

		return(
			<section>
				<Row>
					<Col style={headerStyle}>
						<h1>{this.state.headerText}</h1>
					</Col>
				</Row>
			</section>
		)
	}
}

export default PageHeader;
