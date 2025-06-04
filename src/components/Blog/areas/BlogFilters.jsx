import React from "react";

const BlogFilters = ({ recentPosts }) => (
  <aside className="blog-sidebar">
    <div className="blog-widget">
      <h4 className="widget-title">Search</h4>
      <div className="sidebar-search-form">
        <form action="#">
          <input type="text" placeholder="Type Keywords. . ." />
          <button type="submit">
            <i className="flaticon-loupe"></i>
          </button>
        </form>
      </div>
    </div>
    <div className="blog-widget">
      <h4 className="widget-title">Categories</h4>
      <div className="sidebar-cat-list">
        <ul className="list-wrap">
          <li>
            <a href="#">Animals (15)</a>
          </li>
          <li>
            <a href="#">Pet Love (11)</a>
          </li>
          <li>
            <a href="#">Grooming (05)</a>
          </li>
          <li>
            <a href="#">Dog Care (07)</a>
          </li>
          <li>
            <a href="#">pet Health (04)</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="blog-widget">
      <h4 className="widget-title">Recent Post</h4>
      <div className="rc-post-wrap">
        {recentPosts.map((post, idx) => (
          <div className="rc-post-item" key={idx}>
            <div className="thumb">
              <a href="">
                <img src={post.img} alt="img" />
              </a>
            </div>
            <div className="content">
              <h4 className="title">
                <a href="">{post.title}</a>
              </h4>
              <span className="date">
                <i className="flaticon-calendar"></i>
                {post.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="blog-widget">
      <h4 className="widget-title">Tags</h4>
      <div className="sidebar-tag-list">
        <ul className="list-wrap">
          <li>
            <a href="#">Dogs</a>
          </li>
          <li>
            <a href="#">Pet Care</a>
          </li>
          <li>
            <a href="#">Cats</a>
          </li>
          <li>
            <a href="#">Modern Lab</a>
          </li>
          <li>
            <a href="#">Expert Vet</a>
          </li>
          <li>
            <a href="#">Grooming</a>
          </li>
          <li>
            <a href="#">Caring</a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
);

export default BlogFilters;
