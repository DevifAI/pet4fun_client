import React from "react";
import BannerArea from "./areas/BannerArea";
import Features from "./areas/Features";
import Divider from "./areas/Divider";
import ProductArea from "./areas/ProductArea";
import Categories from "./areas/Categories";
import AdBanner from "./areas/AdBanner";
import ProductAreaTwo from "./areas/ProductAreaTwo";
import FeaturesTwo from "./areas/FeaturesTwo";
import ProductAreaThree from "./areas/ProductAreaThree";
import TestimonialArea from "./areas/TestimonialArea";
import BrandArea from "./areas/BrandArea";
import BlogPostArea from "./areas/BlogPostArea";

const Home = () => {
  return (
    <div>
      <BannerArea />
      <Features />
      <Divider />
      <ProductArea />
      <Categories />
      <AdBanner />
      <ProductAreaTwo />
      <FeaturesTwo />
      <ProductAreaThree />
      <TestimonialArea />
      <BrandArea />
      <BlogPostArea />
    </div>
  );
};

export default Home;
