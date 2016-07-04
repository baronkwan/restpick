import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slideshow = (props) => (
  <Carousel>
    <Carousel.Item>
      <img width={1280} height={500} alt="1280x500" src="http://www.bridlewoodestatewinery.com/sites/default/files/imgs/recipe/Summertime-Steamer-Clams-and-Muscles-Pot.jpg"/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1280} height={500} alt="1280x500" src="http://cdnimg3.webstaurantstore.com/uploads/buying_guide/2014/11/bafp-header-lg.jpg"/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1280} height={500} alt="1280x500" src="http://bestorants.com/wp-content/uploads/2016/01/plate-display-table.jpg"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)

module.exports = Slideshow
