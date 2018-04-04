import React, { Component } from 'react';

import {
	Container,
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
	CarouselCaption
} from 'reactstrap';

/** Declare the Carousel Images and Captions **/
const items = [
	{
    src: 'https://mzo5g3ubj8u20bigm1x3cth1-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/Ruth-Hourani-009.jpg',
    altText: 'Slide 1',
    caption: 'This is an example carousel using ReactJS',
		id: 1
  },
  {
    src: 'https://mzo5g3ubj8u20bigm1x3cth1-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/Ruth-Hourani-011.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
		id: 2
  },
  {
    src: 'https://mzo5g3ubj8u20bigm1x3cth1-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/Ruth-Hourani-014.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
		id: 3
  }
];

class HomeBanner extends Component {

	constructor(props) {
		super(props);

		this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
	}

	// On mouse exit
	onExiting() {
    this.animating = true;
  }

	// On mouse enter
  onExited() {
    this.animating = false;
  }

	// Animate to next slide
  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

	// Animate to previous slide
  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

	// Go to selected slide
  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

	// Render the carousel slides
	render() {

		// Get the active slide
		const { activeIndex } = this.state;

		// Set the slides with custom background image
		const slides = items.map((item) => {
			// Set Inline Styles
			var slideStyle = {
				backgroundImage: "url(" + item.src + ")",
				backgroundPosition: "center center",
				backgroundRepeat: "none",
				backgroundSize: "cover"
			}
			return (
				<CarouselItem
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
					<div className="item-bg" style={ slideStyle }>
						<Container fluid>
							<CarouselCaption className="text-danger" captionText="" captionHeader={item.caption} />
						</Container>
					</div>
        </CarouselItem>
			)
		});

		// Render the carousel
		return (
			<div>
				<Carousel
					activeIndex={activeIndex}
					next={this.next}
					previous={this.previous}
				>

					{slides}

					<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
				</Carousel>
			</div>
		);
  }
}

export default HomeBanner;
