import blog_details_img from "../../../assets/img/blog/blog_details_img.jpg";
import blog_details_img02 from "../../../assets/img/blog/blog_details_img02.jpg";
import avatar from "../../../assets/img/blog/avatar.png";
import comment01 from "../../../assets/img/blog/comment01.png";
import comment02 from "../../../assets/img/blog/comment02.png";
import rc_post01 from "../../../assets/img/blog/rc_post01.jpg";
import rc_post02 from "../../../assets/img/blog/rc_post02.jpg";
import rc_post03 from "../../../assets/img/blog/rc_post03.jpg";
import rc_post04 from "../../../assets/img/blog/rc_post04.jpg";
import Breadcrumb from "../../Breadcrumb";
// import right_arrow from "../../../assets/img/icons/right-arrow.svg";

const relatedBlogs = [
  {
    img: rc_post01,
    title: "weuine easiure and praising",
    date: "Sep 15, 2024",
  },
  {
    img: rc_post02,
    title: "how to pursue pleasure rationally",
    date: "Sep 15, 2024",
  },
  { img: rc_post03, title: "there anyone who loves", date: "Sep 15, 2024" },
  {
    img: rc_post04,
    title: "New occasionally circumstances",
    date: "Sep 15, 2024",
  },
];

const BlogDetails = () => {
  return (
    <div>
      <header>
        <Breadcrumb
          title="Blog Details"
          breadcrumbItems={[
            { label: "Blog", link: "/blogs" },
            { label: "Blog Details" },
          ]}
        />
      </header>
      <section className="blog__details-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-9 col-lg-8 order-0 order-lg-2"
              style={{ margin: "0 auto", float: "none" }}
            >
              <div className="blog__details-wrap">
                <div className="blog__details-thumb">
                  <img src={blog_details_img} alt="img" />
                </div>
                <div className="blog__details-content">
                  <h2 className="title">
                    How Smashing Magazine Uses TinaCMS To Manage Appoint
                    Editorial Workflow
                  </h2>
                  <div className="blog__post-meta">
                    <ul className="list-wrap">
                      <li>
                        <i className="flaticon-user"></i>by
                        <a href="">admin</a>
                      </li>
                      <li>
                        <i className="flaticon-calendar"></i>25th Aug, 2024
                      </li>
                      <li>
                        <i className="fas fa-tags"></i>
                        <a href="">Pet,</a>
                        <a href="">Medical</a>
                      </li>
                      <li>
                        <i className="far fa-comment-alt"></i>
                        <a href="">05 Comments</a>
                      </li>
                    </ul>
                  </div>
                  <p>
                    When an unknown printer took ar galley offer type year
                    anddey scrambled make type aewer specimen awebook bethas
                    survived not only five when annery unknown printer.eed a
                    little help from our friends from time to time.Although we
                    offer the one-stop convenience.
                  </p>
                  <p>
                    Eed a little help from our friends from time to time.
                    Although we offer the one-stop convenience of annery
                    integrated range of legal, financial services under one
                    roof.eed a little help from our friends from time to time.
                    Although we offer the one-stop convenience.
                  </p>
                  <blockquote>
                    <p>
                      “ urabitur varius eros rutrum consequat Mauris aewa
                      sollicitudin enim condimentum luctus enim justo non
                      molestie nisl ”
                    </p>
                  </blockquote>
                  <h4 className="title-two">Rediscovering The Joy Of Design</h4>
                  <p>
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen bookhas a not awertolw only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchan galley of type and scrambled it
                    to make a type specimen book.
                  </p>
                  <div className="blog__details-inner-wrap">
                    <div className="row align-items-center">
                      <div className="col-54">
                        <div className="content">
                          <h3 className="title-two">
                            Revealing Images With CSS Mask Animations
                          </h3>
                          <p>
                            When an unknown printer took a galley type remaining
                            essentially unchan galley of type and scrambled it
                            to make a type specimen book.
                          </p>
                          <ul className="list-wrap">
                            <li>
                              <i className="fas fa-arrow-right"></i>Medicare
                              Advantage Plans
                            </li>
                            <li>
                              <i className="fas fa-arrow-right"></i>Analysis &
                              Research
                            </li>
                            <li>
                              <i className="fas fa-arrow-right"></i>100% Secure
                              Money Back
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-46">
                        <div className="thumb">
                          <img src={blog_details_img02} alt="" />
                          <a
                            href="https://www.youtube.com/watch?v=XdFfCPK5ycw"
                            className="play-btn popup-video"
                          >
                            <i className="fas fa-play"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen bookhas a not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchan galley of type and scrambled it
                    to make a type specimen book.
                  </p>
                  <div className="blog__details-content-bottom">
                    <div className="row align-items-center">
                      <div className="col-md-7">
                        <div className="post-tags">
                          <h5 className="title">Tags:</h5>
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
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="blog-post-share">
                          <h5 className="title">Share:</h5>
                          <ul className="list-wrap">
                            <li>
                              <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.whatsapp.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fab fa-whatsapp"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fab fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="fab fa-youtube"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-avatar-wrap">
                <div className="blog-avatar-img">
                  <a href="">
                    <img src={avatar} alt="img" />
                  </a>
                </div>
                <div className="blog-avatar-info">
                  <span className="designation">Author</span>
                  <h4 className="name">
                    <a href="#">Parker Willy</a>
                  </h4>
                  <p>
                    Finanappreciate your trust greatly Our clients choose
                    dentace ducr emaining essential yearl ow we are the best
                    area Awaitingare really.
                  </p>
                </div>
              </div>
              <div className="comments-wrap">
                <h3 className="comments-wrap-title">02 Comments</h3>
                <div className="latest-comments">
                  <ul className="list-wrap">
                    <li>
                      <div className="comments-box">
                        <div className="comments-avatar">
                          <img src={comment01} alt="img" />
                        </div>
                        <div className="comments-text">
                          <div className="avatar-name">
                            <h6 className="name">Jessica Rose</h6>
                            <span className="date">December 27, 2023</span>
                          </div>
                          <p>
                            Finanappreciate your trust greatly Our clients
                            choose dentace ducts because know we are the best
                            area Awaitingare really.
                          </p>
                          <a href="#" className="reply-btn">
                            Reply
                          </a>
                        </div>
                      </div>
                      <ul className="children">
                        <li>
                          <div className="comments-box">
                            <div className="comments-avatar">
                              <img src={comment02} alt="img" />
                            </div>
                            <div className="comments-text">
                              <div className="avatar-name">
                                <h6 className="name">Parker Willy</h6>
                                <span className="date">December 28, 2023</span>
                              </div>
                              <p>
                                Finanappreciate your trust greatly Our clients
                                choose dentace ducts because know we are the
                                best area Awaitingare really.
                              </p>
                              <a href="#" className="reply-btn">
                                Reply
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="comment-respond">
                <h3 className="comment-reply-title">Post a comment</h3>
                <form action="#" className="comment-form">
                  <p className="comment-notes">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <div className="form-grp">
                    <textarea name="comment" placeholder="Comment"></textarea>
                  </div>
                  <div className="row gutter-20">
                    <div className="col-md-4">
                      <div className="form-grp">
                        <input type="text" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-grp">
                        <input type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-grp">
                        <input type="url" placeholder="Website" />
                      </div>
                    </div>
                  </div>
                  <div className="form-grp checkbox-grp">
                    <input type="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>
                  {/* <button type="submit" className="btn">
                  Read More
                  <img
                    src={right_arrow} // <-- Use the imported variable here
                    alt=""
                    className="injectable"
                  />
                </button> */}
                </form>
              </div>
              {/* Related Blogs Section */}
              <div className="related-blogs-area pt-60">
                <h3 className="related-title mb-30">Related Blogs</h3>
                <div className="row">
                  {relatedBlogs.map((blog, idx) => (
                    <div className="col-md-6 col-lg-4" key={idx}>
                      <div className="rc-post-item">
                        <div className="thumb">
                          <a href="">
                            <img src={blog.img} alt="img" />
                          </a>
                        </div>
                        <div className="content">
                          <h4 className="title">
                            <a href="">{blog.title}</a>
                          </h4>
                          <span className="date">
                            <i className="flaticon-calendar"></i>
                            {blog.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* End Related Blogs */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
