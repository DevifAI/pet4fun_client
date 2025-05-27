import CategoryItem from "./CategoryItem";

import Beds from "../../../assets/img/category/category_img01.png";
import PetToys from "../../../assets/img/category/category_img02.png";
import DogFood from "../../../assets/img/category/category_img03.png";
import CatFood from "../../../assets/img/category/category_img04.png";
import Pharmacy from "../../../assets/img/category/category_img05.png";
import Accessories from "../../../assets/img/category/category_img06.png";

const categories = [
  {
    img: Beds,
    name: "Beds",
    count: 15,
  },
  {
    img: PetToys,
    name: "Pet Toys",
    count: 10,
  },
  {
    img: DogFood,
    name: "Dog Food",
    count: 19,
  },
  {
    img: CatFood,
    name: "Cat Food",
    count: 15,
  },
  {
    img: Pharmacy,
    name: "Pharmacy",
    count: 30,
  },
  {
    img: Accessories,
    name: "Accessories",
    count: 22,
  },
];

const Categories = () => {
  return (
    <section className="category__area">
      <div className="container">
        <div className="row align-tiems-center">
          <div className="col-md-8">
            <div className="section__title-two mb-30">
              <h2 className="title">
                Shop by Category
                <img
                  src="assets/img/images/title_shape.svg"
                  alt=""
                  className="injectable"
                />
              </h2>
            </div>
          </div>
          <div className="col-md-4">
            <div className="view-all-btn">
              <a href="">
                See All Categories{" "}
                <i className="flaticon-right-arrow-angle"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row row-cols-2 row-cols-lg-6 row-cols-md-4 row-cols-sm-3 justify-content-center">
          {categories.map((cat, idx) => (
            <CategoryItem key={idx} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
