import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading/SectionHeading';

const Service = (props) => {
  if (!props.userdata) {
    return <p></p>; // Or any other loading indicator
  }
  return (props.userdata)?(<section id="services" className="section services-section bg-dark">
      <div className="container">
        <SectionHeading title="My Specialties" subTitle="My Service" />
        <div className="accordion accordion-flush" id="accordion_services">
          {props.userdata.services.map((element, index) => (
            <div
              className="accordion-item"
              key={index}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="accordion-header">
                <button
                  className={`accordion-button ${
                    element.triger !== 'One' ? 'collapsed' : ''
                  }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${element.triger}`}
                  aria-expanded={`${element.triger ? 'true' : 'false'}`}
                  aria-controls={`${element.triger}`}
                >
                  <span className="services-title">{element.name}</span>
                  <span className="services-small-desc">{element.desc}<br/>Charge: {element.charge}</span>
                  <span className="accordion-icon" />
                </button>
              </div>
              <div
                id={`${element.triger}`}
                className={`accordion-collapse collapse ${
                  element.triger === 'One' ? 'show' : ''
                }`}
                data-bs-parent="#accordion_services"
              >
                <div className="accordion-body">
                  <div className="row gy-4">
                    <div className="col-sm-6 col-md-4">
                      <div className="s-img">
                        <img
                          src={element.image.url}
                          title=""
                          alt="Service Image"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-8">
                      <h3>{element.name}</h3>
                      <div className="s-text">{element.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>):"";
};

Service.propTypes = {
  data: PropTypes.array,
};

export default Service;
