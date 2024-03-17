import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import perser from 'html-react-parser';
import { Icon } from '@iconify/react';

const About = (props) => {
  const {  aboutRight } = props.data;
  // const { ImgLink, name, designation, resumeCv } = aboutLeft;
  const { aboutText, contactInfo, archivement, note } = aboutRight;
  if (!props.userdata) {
    return <p></p>; // Or any other loading indicator
  }
  return (props.userdata) ? (<section id="about" className="section about-section">
      <div className="container">
        <SectionHeading title="WELCOME TO..." subTitle="Nice to meet you!" />
        <div
          className="row gy-4"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <div className="col-lg-5">
            <div className="about-left">
              <div className="about-avatar">
                <img src={`${props.userdata.about.avatar.url}`} alt="Thumb" />
              </div>
              {/* <h3>{name}</h3> */}
              <h3>{props.userdata.about.name}</h3>
              <p>{perser(props.userdata.about.title)}</p>
              <div className="btn-bar">
                <a className="px-btn" href={props.data.resumeCv} download>
                  Download CV <Icon icon="bi-download" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            <div className="about-bio">
              {/* <p>{aboutText}</p> */}
              <p>{props.userdata.about.description}</p>
            </div>
            <div className="about-contact row gx-lg-5">
              {/* {contactInfo.map((element, index) => (
                <div className="col-sm-6" key={index}>
                  <p>
                    <Icon icon={`bi:${element.icon}`} />{' '}
                    <span>{element.data}</span>
                  </p>
                </div>
              ))} */}
              <div className="col-sm-6">
                  <p>
                    <Icon icon={`bi:${contactInfo[0].icon}`} />{' '}
                    <span>{props.userdata.about.phoneNumber}</span>
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    <Icon icon={`bi:${contactInfo[1].icon}`} />{' '}
                    <span>{props.userdata.about.name}</span>
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    <Icon icon={`bi:${contactInfo[2].icon}`} />{' '}
                    <span>{props.userdata.email}</span>
                  </p>
                </div>
                <div className="col-sm-6">
                  <p>
                    <Icon icon={`bi:${contactInfo[3].icon}`} />{' '}
                    <span>{props.userdata.about.address}</span>
                  </p>
                </div>
            </div>
            <div className="about-exp">
              <div className="row gy-4">
                {/* {archivement.map((element, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="a-number">
                      <h6>{element.number}</h6>
                      <span>{perser(element.meta)}</span>
                    </div>
                    <p className="lead">{perser(element.text)}</p>
                  </div>
                ))} */}
                 <div className="col-md-6">
                    <div className="a-number">
                      <h6>{props.userdata.about.exp_year}+</h6>
                      <span>{perser(archivement[0].meta)}</span>
                    </div>
                    <p className="lead">{perser(`Hello there! My name is <span>${props.userdata.about.name}</span>. I am a React and Front end Developer , and Im very passionate and dedicated to my work.`)}</p>
                  </div>
                  <div className="col-md-6">
                    <div className="a-number">
                      <h6>{archivement[1].number}</h6>
                      <span>{perser(archivement[1].meta)}</span>
                    </div>
                    <p className="lead">{perser(archivement[1].text)}</p>
                  </div>
              </div>
              <blockquote>
                <Icon icon="fa6-solid:quote-left" />
                {/* <p>{note}</p> */}
                <p>{props.userdata.about.quote}</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>):"";
};

About.propTypes = {
  data: PropTypes.object,
};

export default About;
