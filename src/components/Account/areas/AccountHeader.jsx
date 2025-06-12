import React from "react";
import Breadcrumb from "../../Breadcrumb";

const AccountHeader = () => {
  return (
    <Breadcrumb
      title="My Account"
      breadcrumbItems={[{ label: "Home", link: "/" }, { label: "My Account" }]}
    />
  );
};

export default AccountHeader;
