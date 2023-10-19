import "./Footer.scss";
import { FaMobileAlt, FaLocationArrow, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Welcome to my Online Shopping Website, your destination for a world
            of shopping possibilities. Find the best deals, quality products,
            and unbeatable convenience, all in one place. Explore, shop, and
            experience the future of online retail with us.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              National Park, Gurgaon Farukh Nagar Rd, Sultanpur, Gurugram,
              Haryana 122006
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 99999 99999</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">EMail: abc@shopping.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphone</span>
          <span className="text">Smart Watch</span>
          <span className="text">Bluetooth Speaker</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About Watch</span>
          <span className="text">Privacy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            ONLINE STORE 2023 CREATED BY BITTU. PREMIUM E-COMMERCE SOLUTIONS.
          </div>
          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
