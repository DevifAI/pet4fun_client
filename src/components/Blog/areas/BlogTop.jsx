import Breadcrumb from "../../Breadcrumb";

const BlogTop = () => {
  return (
    <Breadcrumb
      title="Our Latest Blogs"
      breadcrumbItems={[
        { label: "Home", link: "/" },
        { label: "All Blogs" },
      ]}
    />
  );
};

export default BlogTop;
