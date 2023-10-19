import "./Home.scss";
import Banner from "../Home/Banner/Banner";
import Category from "../Category/Category";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category />
        </div>
      </div>
    </div>
  );
};

export default Home;
