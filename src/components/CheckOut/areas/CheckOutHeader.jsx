import Breadcrumb from "../../Breadcrumb";

const CheckOutHeader = () => {
  return (
    <Breadcrumb
      title="Checkout"
      breadcrumbItems={[{ label: "Home", link: "/" }, { label: "Checkout" }]}
    />
  );
};

export default CheckOutHeader;
