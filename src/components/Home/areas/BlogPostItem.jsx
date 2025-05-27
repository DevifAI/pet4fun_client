const BlogPostItem = ({ img, tag, date, author, title, link }) => (
  <div className="blog__post-item-four shine-animate-item">
    <div className="blog__post-thumb-four shine-animate">
      <a href={link || ""}>
        <img src={img} alt="img" />
      </a>
      <ul className="list-wrap blog__post-tag blog__post-tag-three">
        <li>
          <a href="">{tag}</a>
        </li>
      </ul>
    </div>
    <div className="blog__post-content-four">
      <div className="blog__post-meta">
        <ul className="list-wrap">
          <li>
            <i className="flaticon-calendar"></i>
            {date}
          </li>
          <li>
            <i className="flaticon-user"></i>by
            <a href="">{author}</a>
          </li>
        </ul>
      </div>
      <h2 className="title">
        <a href={link || ""}>{title}</a>
      </h2>
    </div>
  </div>
);

export default BlogPostItem;
