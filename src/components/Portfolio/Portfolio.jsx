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
    return <p>Loading...</p>; // Or any other loading indicator
  }
  return (
    <section>
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
    </section>
  )
}

Portfolio.propTypes = {
  data: PropTypes.array
}


export default Portfolio;
