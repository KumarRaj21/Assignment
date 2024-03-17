import PropTypes from 'prop-types';

const Footer = (props) => {
  const { ImgLink, name } = props.data;
  const date = new Date;
  const currentYear = date.getFullYear();
  if (!props.userdata) {
    return <p></p>; // Or any other loading indicator
  }
  return (props.userdata)?(  <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <div className="footer-avatar">
            <img src={props.userdata.about.avatar.url} title="" alt="" />
          </div>
          <h6>{props.userdata.about.name}</h6>
        </div>
        <p className="copyright">© {currentYear} copyright all right reserved</p>
      </div>
    </footer>):"";
}
Footer.propTypes = {
  data: PropTypes.object
}

export default Footer;
