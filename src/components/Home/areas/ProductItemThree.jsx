const ProductItemThree = ({
  img,
  badge,
  badgeClass,
  reviews,
  rating,
  title,
  price,
  oldPrice,
  isThree,
}) => {
  // For main product (left), show reviews and badge, for right, just title/price
  if (!isThree) {
    return (
      <div className="product__item product__item-two">
        <div className="product__thumb product__thumb-two">
          <a href="">
            <img src={img} alt="img" />
          </a>
          {badge && (
            <div className={badgeClass || "sale-wrap"}>
              <span>{badge}</span>
            </div>
          )}
        </div>
        <div className="product__content">
          {typeof reviews !== "undefined" && (
            <div className="product__reviews">
              <div className="rating">
                {[...Array(rating || 5)].map((_, i) => (
                  <i className="fas fa-star" key={i}></i>
                ))}
              </div>
              <span>({reviews} Reviews)</span>
            </div>
          )}
          <h4 className="title">
            <a href="">{title}</a>
          </h4>
          <h3 className="price">
            {price} {oldPrice && <del>{oldPrice}</del>}
          </h3>
        </div>
      </div>
    );
  }

  // For right column (smaller) products
  return (
    <div className="product__item-three">
      <div className="product__thumb-three">
        <a href="">
          <img src={img} alt="img" />
        </a>
      </div>
      <div className="product__content product__content-three">
        <h2 className="title">
          <a href="">{title}</a>
        </h2>
        <h3 className="price">
          {price} {oldPrice && <del>{oldPrice}</del>}
        </h3>
      </div>
    </div>
  );
};

export default ProductItemThree;
