import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>SALES</h1>
          <p>
            Good customer service is a key factor to running a successful
            business. Every company strives to have satisfied, loyal customers
            and happy employees. Read these customer service quotes to inspire
            yourself while you work towards these goals.
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="BannerImg" />
      </div>
    </div>
  );
};

export default Banner;
