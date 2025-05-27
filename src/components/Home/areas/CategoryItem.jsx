const CategoryItem = ({ img, name, count }) => (
  <div className="col">
    <div className="category__item">
      <a href="">
        <img src={img} alt={name} />
        <span className="name">{name}</span>
        <strong>{count} Items</strong>
      </a>
    </div>
  </div>
);

export default CategoryItem;
