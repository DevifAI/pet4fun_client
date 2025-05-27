import BlogPostItem from "./BlogPostItem";
import h4_blog_post01 from "../../../assets/img/blog/h4_blog_post01.jpg";
import h4_blog_post02 from "../../../assets/img/blog/h4_blog_post02.jpg";
import h4_blog_post03 from "../../../assets/img/blog/h4_blog_post03.jpg";
import h4_blog_post04 from "../../../assets/img/blog/h4_blog_post04.jpg";
import h4_blog_shape01 from "../../../assets/img/blog/h4_blog_shape01.png";
import h4_blog_shape02 from "../../../assets/img/blog/h4_blog_shape02.png";

const blogPosts = [
  {
    img: h4_blog_post01,
    tag: "Pet",
    date: "25th Aug",
    author: "admin",
    title: "10 Things You Didn’t Know about The Shinese",
    link: "",
  },
  {
    img: h4_blog_post02,
    tag: "Care",
    date: "25th Aug",
    author: "admin",
    title: "A Complete Price Guide for the Shar Pei Breed",
    link: "",
  },
  {
    img: h4_blog_post03,
    tag: "Pet Health",
    date: "25th Aug",
    author: "admin",
    title: "Comparing the Blue vs. Lilac French Bulldog",
    link: "",
  },
  {
    img: h4_blog_post04,
    tag: "Cat",
    date: "25th Aug",
    author: "admin",
    title: "Five Things You Didn’t Know about the Red",
    link: "",
  },
];

const BlogPostArea = () => {
  return (
    <section className="blog__post-area-four">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="section__title-two mb-20">
              <h2 className="title">
                Latest News & Updates
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
                See All <i className="flaticon-right-arrow-angle"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {blogPosts.map((post, idx) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={idx}>
              <BlogPostItem {...post} />
            </div>
          ))}
        </div>
      </div>
      <div className="blog__shape-wrap-four">
        <img
          src={h4_blog_shape01}
          alt="img"
          data-aos="fade-down-left"
          data-aos-delay="400"
        />
        <img
          src={h4_blog_shape02}
          alt="img"
          data-aos="fade-up-right"
          data-aos-delay="400"
        />
      </div>
    </section>
  );
};

export default BlogPostArea;
