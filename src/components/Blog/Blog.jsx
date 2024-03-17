import PropTypes from 'prop-types';
import SectionHeading from "../SectionHeading/SectionHeading";
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Blog = (props) => {
  // Modal
  const [modal, setModal] = useState(false);
  const [tempData, setTempData] = useState([]);

  const getData = (imgLink, name, percentage, ) => {
    let tempData = [imgLink, name, percentage,];
    setTempData(element => [1, ...tempData]);
    setModal(true);
  }

  const modalClose = () => {
    setModal(false);
  }
  if (!props.userdata) {
    return <p></p>; // Or any other loading indicator
  }

  return (props.userdata)?(  <section id='blog'>
      <div className="section blog-section bg-dark">
        <div className="container">
          <SectionHeading title="My Skills" subTitle="" />
          <div className="row gy-4">
            {
              props.userdata.skills.map((element, index) => (
                <div className="col-lg-3 col-sm-6" key={index} onClick={() => getData(element.image.url, element.name, element.percentage)} data-aos="fade-left" data-aos-duration="800" data-aos-delay={element.delay ? element.delay : "500"}>
                  <div className="blog-post">
                    <div className="blog-post-img">
                      <a className="px_modal">
                        <img src={element.image.url} title="" alt="blog-img" />
                      </a>
                    </div>
                    <div className="blog-post-info">
                      <h6>Percentage : {element.percentage}</h6>
                      <h2>
                        <a className="px_modal">
                          {element.name}
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {modal === true ? <Modal img={tempData[1]} title={tempData[2]} date={tempData[3]} paraList={tempData[4]} modalClose={modalClose} /> : ""}
    </section>):"";
}

Blog.propTypes = {
  data: PropTypes.array
}

export default Blog;
