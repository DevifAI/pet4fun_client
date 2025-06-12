const FormSection = () => {
  return (
    <div className="col-lg-8 order-lg-1 form-section">
      <div className="glass-card p-4">
        <form className="needs-validation" novalidate>
          {/* <!-- Delivery Address Section --> */}
          <div className="section-header">
            <i className="fas fa-map-marker-alt"></i>
            <h4>Delivery Address</h4>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="fname"
                  placeholder="First Name"
                  required
                />
                <label for="firstName">First Name</label>
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lname"
                  placeholder="Last Name"
                  required
                />
                <label for="lastName">Last Name</label>
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
                <label for="phoneNumber">Phone Number</label>
                <div className="invalid-feedback">
                  Valid phone number is required.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="tel"
                  className="form-control"
                  id="alternatePhone"
                  name="phone2"
                  placeholder="Alternate Phone"
                />
                <label for="alternatePhone">Alternate Phone (Optional)</label>
              </div>
            </div>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="Full Address"
              required
            />
            <label for="address">Full Address</label>
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="address2"
              name="address2"
              placeholder="Address Line 2"
            />
            <label for="address2">Address Line 2 (Optional)</label>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  placeholder="City"
                  required
                />
                <label for="city">City</label>
                <div className="invalid-feedback">
                  Valid city name is required.
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="state"
                  name="state"
                  required
                >
                  <option value="">Select State</option>
                  <option value="AN">Andaman and Nicobar Islands</option>
                  <option value="AP">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BR">Bihar</option>
                  <option value="CH">Chandigarh</option>
                  <option value="CT">Chhattisgarh</option>
                  <option value="DN">Dadra and Nagar Haveli</option>
                  <option value="DD">Daman and Diu</option>
                  <option value="DL">Delhi</option>
                  <option value="GA">Goa</option>
                  <option value="GJ">Gujarat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JK">Jammu and Kashmir</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KA">Karnataka</option>
                  <option value="KL">Kerala</option>
                  <option value="LA">Ladakh</option>
                  <option value="LD">Lakshadweep</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="ML">Meghalaya</option>
                  <option value="MZ">Mizoram</option>
                  <option value="NL">Nagaland</option>
                  <option value="OR">Odisha</option>
                  <option value="PY">Puducherry</option>
                  <option value="PB">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TG">Telangana</option>
                  <option value="TR">Tripura</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="UT">Uttarakhand</option>
                  <option value="WB">West Bengal</option>
                </select>
                <label for="state">Select State</label>
                <div className="invalid-feedback">
                  Please select a valid state.
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="zipcode"
                  name="zipcode"
                  placeholder="Zip Code"
                  required
                />
                <label for="zipcode">Zip Code</label>
                <div className="invalid-feedback">
                  Valid zip code is required.
                </div>
              </div>
            </div>
          </div>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="landmarks"
              name="landmarks"
              placeholder="Landmarks"
            />
            <label for="landmarks">Landmarks (Optional)</label>
          </div>

          <div className="save-info-checkbox">
            <input type="checkbox" id="saveInfo" name="saveInfo" />
            <label for="saveInfo">
              <i className="fas fa-bookmark me-2"></i>Save this information for
              next time
            </label>
          </div>

          {/* <!-- Billing Address Section --> */}
          <div className="section-header">
            <i className="fas fa-credit-card"></i>
            <h4>Billing Address</h4>
          </div>

          <div className="custom-radio-group">
            <div
              className="custom-radio-item active"
              onclick="selectBillingOption('same')"
            >
              <input
                type="radio"
                id="billingSame"
                name="billingAddress"
                value="same"
                checked
                required
              />
              <div className="radio-checkmark"></div>
              <strong>
                <i className="fas fa-check-circle me-2 text-success"></i>Same as
                delivery address
              </strong>
              <p className="text-muted mb-0 mt-1">
                Use the same address for billing
              </p>
            </div>
            <div
              className="custom-radio-item"
              onclick="selectBillingOption('different')"
            >
              <input
                type="radio"
                id="billingDifferent"
                name="billingAddress"
                value="different"
                required
              />
              <div className="radio-checkmark"></div>
              <strong>
                <i className="fas fa-map-marked-alt me-2 text-primary"></i>Use
                different billing address
              </strong>
              <p className="text-muted mb-0 mt-1">
                Provide a separate billing address
              </p>
            </div>
          </div>

          {/* <!-- Different Billing Address Form --> */}
          <div
            id="billingAddressForm"
            className="billing-address-form glass-card p-4"
          >
            <h5 className="mb-4 text-primary">
              <i className="fas fa-home me-2"></i>Billing Address Details
            </h5>

            <div className="row">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="billingFirstName"
                    name="billingFname"
                    placeholder="First Name"
                  />
                  <label for="billingFirstName">First Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="billingLastName"
                    name="billingLname"
                    placeholder="Last Name"
                  />
                  <label for="billingLastName">Last Name</label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="tel"
                    className="form-control"
                    id="billingPhone"
                    name="billingPhone"
                    placeholder="Phone Number"
                  />
                  <label for="billingPhone">Phone Number</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input
                    type="tel"
                    className="form-control"
                    id="billingAlternatePhone"
                    name="billingPhone2"
                    placeholder="Alternate Phone"
                  />
                  <label for="billingAlternatePhone">
                    Alternate Phone (Optional)
                  </label>
                </div>
              </div>
            </div>

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="billingAddress"
                name="billingAddress"
                placeholder="Full Address"
              />
              <label for="billingAddress">Full Address</label>
            </div>

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="billingAddress2"
                name="billingAddress2"
                placeholder="Address Line 2"
              />
              <label for="billingAddress2">Address Line 2 (Optional)</label>
            </div>

            <div className="row">
              <div className="col-md-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="billingCity"
                    name="billingCity"
                    placeholder="City"
                  />
                  <label for="billingCity">City</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating">
                  <select
                    className="form-select"
                    id="billingState"
                    name="billingState"
                  >
                    <option value="">Select State</option>
                    <option value="AN">Andaman and Nicobar Islands</option>
                    <option value="AP">Andhra Pradesh</option>
                    <option value="AR">Arunachal Pradesh</option>
                    <option value="AS">Assam</option>
                    <option value="BR">Bihar</option>
                    <option value="CH">Chandigarh</option>
                    <option value="CT">Chhattisgarh</option>
                    <option value="DN">Dadra and Nagar Haveli</option>
                    <option value="DD">Daman and Diu</option>
                    <option value="DL">Delhi</option>
                    <option value="GA">Goa</option>
                    <option value="GJ">Gujarat</option>
                    <option value="HR">Haryana</option>
                    <option value="HP">Himachal Pradesh</option>
                    <option value="JK">Jammu and Kashmir</option>
                    <option value="JH">Jharkhand</option>
                    <option value="KA">Karnataka</option>
                    <option value="KL">Kerala</option>
                    <option value="LA">Ladakh</option>
                    <option value="LD">Lakshadweep</option>
                    <option value="MP">Madhya Pradesh</option>
                    <option value="MH">Maharashtra</option>
                    <option value="MN">Manipur</option>
                    <option value="ML">Meghalaya</option>
                    <option value="MZ">Mizoram</option>
                    <option value="NL">Nagaland</option>
                    <option value="OR">Odisha</option>
                    <option value="PY">Puducherry</option>
                    <option value="PB">Punjab</option>
                    <option value="RJ">Rajasthan</option>
                    <option value="SK">Sikkim</option>
                    <option value="TN">Tamil Nadu</option>
                    <option value="TG">Telangana</option>
                    <option value="TR">Tripura</option>
                    <option value="UP">Uttar Pradesh</option>
                    <option value="UT">Uttarakhand</option>
                    <option value="WB">West Bengal</option>
                  </select>
                  <label for="billingState">Select State</label>
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="billingZipcode"
                    name="billingZipcode"
                    placeholder="Zip Code"
                  />
                  <label for="billingZipcode">Zip Code</label>
                </div>
              </div>
            </div>

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="billingLandmarks"
                name="billingLandmarks"
                placeholder="Landmarks"
              />
              <label for="billingLandmarks">Landmarks (Optional)</label>
            </div>
          </div>

          {/* <!-- Payment Method Section --> */}
          <div className="section-header">
            <i className="fas fa-wallet"></i>
            <h4>Choose Payment Method</h4>
          </div>

          <div className="custom-radio-group">
            <div
              className="custom-radio-item active"
              onclick="selectPaymentOption('cod')"
            >
              <input
                type="radio"
                id="paymentCod"
                name="paymentMethod"
                value="cod"
                checked
                required
              />
              <div className="radio-checkmark"></div>
              <strong>
                <i className="fas fa-money-bill-wave me-2 text-success"></i>Cash
                on Delivery
              </strong>
              <p className="text-muted mb-0 mt-1">
                Pay when your order arrives
              </p>
            </div>
            <div
              className="custom-radio-item"
              onclick="selectPaymentOption('online')"
            >
              <input
                type="radio"
                id="paymentOnline"
                name="paymentMethod"
                value="online"
                required
              />
              <div className="radio-checkmark"></div>
              <strong>
                <i className="fas fa-credit-card me-2 text-primary"></i>Online
                Payment
              </strong>
              <p className="text-muted mb-0 mt-1">
                Pay securely with card or UPI
              </p>
            </div>
          </div>

          <button className="checkout-btn" type="submit">
            <i className="fas fa-lock me-2"></i>Complete Secure Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormSection;
