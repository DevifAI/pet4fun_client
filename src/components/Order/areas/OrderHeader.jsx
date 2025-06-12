import React from "react";
import Breadcrumb from "../../Breadcrumb";

const OrderHeader = () => {
  return (
    <Breadcrumb
      title="My Orders"
      breadcrumbItems={[{ label: "Home", link: "/" }, { label: "My Orders" }]}
    />
  );
};

export default OrderHeader;
