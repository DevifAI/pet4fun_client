import Breadcrumb from "../../Breadcrumb";

const CartHeader = () => {
  return (
    <Breadcrumb
      title="Cart"
      breadcrumbItems={[{ label: "Home", link: "/" }, { label: "Cart" }]}
    />
  );
};

export default CartHeader;
