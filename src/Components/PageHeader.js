import React, { Component } from 'react';

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
				<div className="row">
					<div className="col-md-12">
						<div style={headerStyle}>
							<h1>{this.state.headerText}</h1>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default PageHeader;
