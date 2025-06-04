import Breadcrumb from "../../Breadcrumb";

const ProductTop = () => {
  return (
    <Breadcrumb
      title="Products Details"
      breadcrumbItems={[
        { label: "Home", link: "/" },
        { label: "All Products" },
      ]}
    />
  );
};

export default ProductTop;
