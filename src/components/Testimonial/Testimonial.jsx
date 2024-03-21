
import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import Carousel from "../Carousel/Carousel";

const Testimonial = (props) => {
  const { testimonialInfo, brandInfo } = props.data;
  if (!props.userdata) {
    return <p></p>; // Or any other loading indicator
  }
  return (props.userdata)?( <section className="section testimonials-section bg-g">
      <div className="container">
        <SectionHeading title="What they says" subTitle="Testimonial" />
        <div className="testimonials">
          <Carousel data={testimonialInfo} userdata={props.userdata} />
        </div>
        {/* <div className="testimonials-brand">
          <Carousel data={brandInfo} userdata={props.userdata} />
        </div> */}
      </div>
    </section >):"";
}
Testimonial.propTypes = {
  data: PropTypes.object
}

export default Testimonial
