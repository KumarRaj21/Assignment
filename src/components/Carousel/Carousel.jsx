import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Singletestimonial from '../Testimonial/SingleTestimonial';
import "slick-carousel/slick/slick.css";
import Brand from '../Brand/Brand';



const Carousel = (props) => {
  const { useFor, info, settings } = props.data;
  if (useFor === "testimonial") {
    return (
      <Slider {...settings}>
        {
          props.userdata.testimonials.map((element, index) => (
            <Singletestimonial element={element} key={index} />
          ))
        }
      </Slider>
    )
  } else if (useFor === "brand") {
    return (
      <Slider {...settings}>
        {
          props.userdata.testimonials.map((element, index) => (
            <Brand key={index} brandLogo={element.image.url} />
          ))
        }
      </Slider>
    )
  }
}

Carousel.propTypes = {
  data: PropTypes.object
}


export default Carousel
