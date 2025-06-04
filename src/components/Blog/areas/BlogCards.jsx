import React from "react";
import { Link } from "react-router-dom";
import right_arrow from "../../../assets/img/icon/right_arrow.svg";

const BlogCards = ({ blogs }) => (
  <div className="row">
    {blogs.map((blog, idx) => (
      <div className="col-md-6" key={idx}>
        <div className="blog__post-item-three blog__post-item-five shine-animate-item">
          <div className="blog__post-thumb-three blog__post-thumb-five shine-animate">
            <Link to="/blogDetails">
              <img src={blog.img} alt="img" />
            </Link>
            <ul className="list-wrap blog__post-tag blog__post-tag-two">
              {blog.tags.map((tag, i) => (
                <li key={i}>
                  <Link to="/blogDetails">{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="blog__post-content-three">
            <div className="blog__post-meta">
              <ul className="list-wrap">
                <li>
                  <i className="flaticon-calendar"></i>
                  {blog.date}
                </li>
                <li>
                  <i className="flaticon-user"></i>by{" "}
                  <Link to="/blogDetails">{blog.author}</Link>
                </li>
              </ul>
            </div>
            <h2 className="title">
              <Link to="/blogDetails">{blog.title}</Link>
            </h2>
            <p>{blog.desc}</p>
            <Link to="/blogDetails" className="btn">
              Read More
              <img src={right_arrow} alt="" className="injectable" />
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default BlogCards;
