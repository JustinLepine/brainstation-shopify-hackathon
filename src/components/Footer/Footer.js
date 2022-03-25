import "./Footer.scss";
import footerImage from "../../assets/images/Footer.png";

function Footer() {
  return (
    <div className="footer">
      <img className="footer__image" alt="footer" src={footerImage} />
    </div>
  );
}

export default Footer;
