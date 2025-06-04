import React from "react";
import blog_img01 from "../../../assets/img/blog/blog_img01.jpg";
import blog_img02 from "../../../assets/img/blog/blog_img02.jpg";
import blog_img03 from "../../../assets/img/blog/blog_img03.jpg";
import blog_img04 from "../../../assets/img/blog/blog_img04.jpg";
import blog_img05 from "../../../assets/img/blog/blog_img05.jpg";
import blog_img06 from "../../../assets/img/blog/blog_img06.jpg";
import rc_post01 from "../../../assets/img/blog/rc_post01.jpg";
import rc_post02 from "../../../assets/img/blog/rc_post02.jpg";
import rc_post03 from "../../../assets/img/blog/rc_post03.jpg";
import rc_post04 from "../../../assets/img/blog/rc_post04.jpg";
import BlogFilters from "./BlogFilters";
import BlogCards from "./BlogCards";
import Pagination from "../../Pagination";

const blogs = [
  {
    img: blog_img01,
    tags: ["Pet", "Medical"],
    date: "25th Aug, 2024",
    author: "admin",
    title: "3 Signs It’s Time for the First Pets Dental Cleaning",
    desc: "Duis aute irure dolor in reprehenderit innera voeWe care for the growing needs of our comm unietye build systems.",
  },
  {
    img: blog_img02,
    tags: ["Pet", "Grooming"],
    date: "25th Aug, 2024",
    author: "admin",
    title: "Understanding Zoonotic and Safeguarding Your Health",
    desc: "Duis aute irure dolor in reprehenderit innera voeWe care for the growing needs of our comm unietye build systems.",
  },
  {
    img: blog_img03,
    tags: ["Health", "Medical"],
    date: "25th Aug, 2024",
    author: "admin",
    title: "How to Spot, Treat, and Prevent Hot Spots in Pets",
    desc: "Duis aute irure dolor in reprehenderit innera voeWe care for the growing needs of our comm unietye build systems.",
  },
  {
    img: blog_img04,
    tags: ["Dog Love", "Pet"],
    date: "25th Aug, 2024",
    author: "admin",
    title: "Clean indoor air as important in controlling asthma",
    desc: "Duis aute irure dolor in reprehenderit innera voeWe care for the growing needs of our comm unietye build systems.",
  },
  {
    img: blog_img05,
    tags: ["Animals", "Medical"],
    date: "25th Aug, 2024",
    author: "admin",
    title: "How to Spot, Treat, and Prevent Hot Spots in Pets",
    desc: "Duis aute irure dolor in reprehenderit innera voeWe care for the growing needs of our comm unietye build systems.",
  },
  {
    img: blog_img06,
    tags: ["Pet", "Pet Love"],
    date: "25th Aug, 2024",
    author: "admin",
    title: "A Complete Price Guide for the Shar Pei Breed",
    desc: "Duis aute irure dolor in reprehenderit innera voeWe care for the growing needs of our comm unietye build systems.",
  },
];

const recentPosts = [
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

const BlogsArea = () => {
  return (
    <section className="blog__area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8 order-0 order-lg-2">
            <div
              className="blog-cards-scroll"
              style={{
                maxHeight: "100vh",
                overflowY: "auto",
                paddingRight: 16,
              }}
            >
              <BlogCards blogs={blogs} />
            </div>
            <Pagination />
          </div>
          <div className="col-xl-3 col-lg-4">
            <BlogFilters recentPosts={recentPosts} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsArea;
