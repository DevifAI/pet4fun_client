import Breadcrumb from "../../Breadcrumb";

const WishlistHeader = () => {
  return (
    <Breadcrumb
      title="WishList"
      breadcrumbItems={[
        { label: "Home", link: "/" },
        { label: "WishList" },
      ]}
    />
  );
};

export default WishlistHeader;
