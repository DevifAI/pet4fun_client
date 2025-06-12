import React from "react";
import CartSection from "./CartSection";
import FormSection from "./FormSection";

const CheckOutContainer = () => {
  return (
    <div className="container">
      <div className="checkout-header">
        <h1>
          <i className="fas fa-shopping-cart"></i> Checkout Your Items
        </h1>
        <p>
          Complete your purchase with our secure and streamlined checkout
          process. Each step is designed to make your shopping experience smooth
          and delightful.
        </p>
      </div>

      <div className="row">
        <CartSection />
        <FormSection />
      </div>
    </div>
  );
};

export default CheckOutContainer;
