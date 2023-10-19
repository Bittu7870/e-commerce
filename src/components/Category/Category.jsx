import "./Category.scss";
import cat1 from "../../../src/assets/category/cat-1.jpg";
import cat2 from "../../../src/assets/category/cat-2.jpg";
import cat3 from "../../../src/assets/category/cat-3.jpg";
import cat4 from "../../../src/assets/category/cat-4.jpg";

const Category = () => {
  return (
    <div className="shop-by-category">
      <div className="categories">
        <div className="category">
          <img src={cat1} alt="img" />
        </div>
        <div className="category">
          <img src={cat2} alt="img" />
        </div>
        <div className="category">
          <img src={cat3} alt="img" />
        </div>
        <div className="category">
          <img src={cat4} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Category;
