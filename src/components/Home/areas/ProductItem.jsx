const ProductItem = ({ img, title, price, oldPrice, badge, badgeClass }) => (
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
      {badge && (
        <div className={`sale-wrap${badgeClass ? " " + badgeClass : ""}`}>
          <span>{badge}</span>
        </div>
      )}
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
);

export default ProductItem;
