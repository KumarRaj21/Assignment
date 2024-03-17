import PropTypes from 'prop-types';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
// import { socialData } from '../../data.json';
// import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Header = ({ data }) => {
  const { logoDark, logoLight } = data;

  const [mobileToggle, setMobileToggle] = useState(false);

  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };
  let [userheaddata ,setuserheaddata] = useState(null);
  useEffect(() => {
    const fetchheaddata = async () => {
      try {
        const res = await axios.get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");
        setuserheaddata(res.data.user.social_handles);
      console.log(userheaddata)
      } catch (error) {
        console.error('Error',error);
      }
    };
    fetchheaddata();
  }, []);
  if (!userheaddata) {
    return <p></p>; // Or any other loading indicator
  }
  return (userheaddata)?( <header>
      {/* Mob header */}
      <div className="mob-header" onClick={handleMobileToggle}>
        <div className="mob-h-left">
          <Link className="navbar-brand" to="/">
            <img className="logo-dark" title="" alt="" src={logoDark} />
            <img className="logo-light" title="" alt="" src={logoLight} />
          </Link>
        </div>
        <div className="mob-h-right">
          <button className="toggler-menu">
            <span />
          </button>
        </div>
      </div>
      {/* End */}
      {/* Header Top */}
      <div
        className={`header-left-fixed one-page-nav ${
          mobileToggle ? 'menu-open' : ''
        }`}
      >
        {/* Brand */}
        <div className="logo">
          <Link className="navbar-brand" to="/">
            <img
              className="logo-dark"
              title="Lilon"
              alt="site-logo"
              src={logoDark}
            />
            <img
              className="logo-light"
              title="Lilon"
              alt="site-logo"
              src={logoLight}
            />
          </Link>
        </div>
        {/* / */}
        <ul className="main-menu">
          <li>
            <ScrollLink
              to="home"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="services"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="work"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Portfolio
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="blog"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
             Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              spy={true}
              duration={500}
              onClick={() => setMobileToggle(false)}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
        <ul className="nav social-link">
          {userheaddata.map((element, index) => (
            <li key={index}>
              <a href={element.url} target="_blank" rel="noopener noreferrer">
                {/* <Icon icon={`fa6-brands:${element.icon}`} /> */}
                <img src={element.image.url} alt=''/>
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* End Header Top */}
    </header>):"";
};

Header.propTypes = {
  data: PropTypes.object,
};

export default Header;
