import PropTypes from "prop-types";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Icon } from "@iconify/react";
import ForEducation from "../ForEducation/ForEducation";
import ForExperience from "../ForExperience/ForExperience";
import {useState} from 'react';

const Experience = (props) => {

  const { text, experience, resumeCv } = props.data;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };
    if (!props.userdata) {
    return <p></p>; // Or any other loading indicator
  }
  const [activeTab, setActiveTab] = useState('experience');
  return (props.userdata) ? (<section className="section experience-section bg-g">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-5">
            <div className="section-heading">
              <SectionHeading title="My Experience" subTitle="Experience" />
              <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Hello there! My name is {props.userdata.about.name}. I am a web developer, and Im very passionate and dedicated to my work.</p>
              <div className="btn-bar" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
                <a href={resumeCv} className="px-btn dark" download>
                  Download my resume <Icon icon="bi-download" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 ps-xl-5">
            {/* <ul className="resume-box"> */}
              {/* {props.userdata.timeline.map((element, index) => (
                <li key={index} data-aos="fade-up" data-aos-duration="800">
                  <div className="r-meta">
                    <span>{formatDate(element.startDate)} - {formatDate(element.endDate)}</span>
                    <label>-{element.jobTitle}</label>
                  </div>
                  <h5>{element.company_name}</h5>
                  <label>{element.forEducation ? "For Education":"For Experience"}</label>
                </li>
              ))}
            </ul> */}
            <button  className='px-btn2' onClick={()=> setActiveTab('experience')}>Experience</button>
            <button className='px-btn2' onClick={()=> setActiveTab('education')}>Education</button>
            
      {activeTab === 'experience' && <ForExperience userdata={props.userdata.timeline} formatDate={formatDate}/>}
      {activeTab === 'education' && <ForEducation userdata={props.userdata.timeline} formatDate={formatDate}/>}
          </div>
        </div>
      </div>
    </section>):"";
}

Experience.propTypes = {
  data: PropTypes.object
}

export default Experience;
