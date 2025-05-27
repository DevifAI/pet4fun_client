const ProductItemTwo = ({ img, title, price, oldPrice }) => (
  <div className="col">
    <div className="product__item">
      <div className="product__thumb">
        <a href="">
          <img src={img} alt="img" />
        </a>
        <div className="product__action">
          <a href="">
            <i className="flaticon-love"></i>
          </a>
          <a href="">
            <i className="flaticon-loupe"></i>
          </a>
          <a href="">
            <i className="flaticon-exchange"></i>
          </a>
        </div>
        <div className="sale-wrap sale-wrap-two">
          <span>Sale!</span>
        </div>
        <div className="product__add-cart">
          <a href="" className="btn">
            <i className="flaticon-shopping-bag"></i>Add To Cart
          </a>
        </div>
      </div>
      <div className="product__content">
        <div className="product__reviews">
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <span>(2 Reviews)</span>
        </div>
        <h4 className="title">
          <a href="">{title}</a>
        </h4>
        <h3 className="price">
          {price} <del>{oldPrice}</del>
        </h3>
      </div>
    </div>
  </div>
);

export default ProductItemTwo;
