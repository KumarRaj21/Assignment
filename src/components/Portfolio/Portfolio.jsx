import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import Modal from '../Modal/Modal';


const Portfolio = (props) => {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (imgLink, title,description) => {
    console.log(imgLink, title, description);
    let tempData = [imgLink, title, description];
    setTempData(element => [1, ...tempData]);
    setModal(true);
  }

  const modalClose = () => {
    setModal(false);
  }

  if (!props.userdata) {
    return <p></p>; // Or any other loading indicator
  }
  return (props.userdata)?(    <section>
      <div id="work" className="section work-section">
        <div className="container">
          <SectionHeading title="RECENT PROJECT" subTitle="My Work" />
          <div className="row gy-5 lightbox-gallery" data-aos="fade-up" data-aos-duration="800">
            {
              props.userdata.projects.map((element, index) => (
                <div className="col-lg-6" key={index}>
                  <div className="work-box">
                  
                    <div className="work-img" onClick={() => getData(element.image.url, element.title, element.description)}>
                      <img src={element.image.url} title="" alt="protfolio image" />
                    </div>
                    <div className="work-text">
                      {/* <h6>{element.subTitle}</h6> */}
                      <h4>{element.title}</h4>
                      <a href={element.githuburl}><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8333 9.16658L17.6666 2.33325" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3333 5.66675V1.66675H14.3333" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.16669 1.66675H7.50002C3.33335 1.66675 1.66669 3.33341 1.66669 7.50008V12.5001C1.66669 16.6667 3.33335 18.3334 7.50002 18.3334H12.5C16.6667 18.3334 18.3334 16.6667 18.3334 12.5001V10.8334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></a>

                      <div className="btn-bar">
                        <a className="gallery-link" onClick={() => getData(element.image.url, element.title, element.description)}>
                          <Icon icon="bi:arrow-up-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {modal === true ? <Modal img={tempData[1]} title={tempData[2]} subTitle={tempData[3]} paraList={tempData[4]} modalClose={modalClose} /> : ""}
    </section>):"";
}

Portfolio.propTypes = {
  data: PropTypes.array
}


export default Portfolio;
