import right_arrow from "../../../assets/img/icon/right_arrow.svg";

const ContactArea = () => {
  // Optional: handle form submission in React (prevent default, show message, etc.)
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your own form handling logic here
    alert("Thank you for contacting us!");
    e.target.reset();
  };

  return (
    <section className="contact__area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="contact__content">
              <div className="section__title mb-30">
                <h2 className="title">
                  We Are Always Available For You & Your Pets
                </h2>
                <p>
                  Maecenas quis viverra metus, et efficitur ligula. Nam
                  coueaugue congue sed luctus lectus conIn onondimentum .
                </p>
              </div>
              <div className="contact__info-wrap">
                <h6 className="title">Information:</h6>
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <i className="flaticon-phone"></i>
                    </div>
                    <a href="tel:0123456789">+91 9876543210</a>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-placeholder"></i>
                    </div>
                    Kolkata, West Bengal, India
                  </li>
                  <li>
                    <div className="icon">
                      <i className="flaticon-mail"></i>
                    </div>
                    <a href="mailto:info@gmail.com">info@pet4fun.com</a>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-share-alt"></i>
                    </div>
                    <ul className="list-wrap contact__social">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact__form-wrap">
              <form
                onSubmit={handleSubmit}
                className="contact__form"
                autoComplete="off"
              >
                <h2 className="title">Post a comment</h2>
                <span>
                  Your email address will not be published. Required fields are
                  marked *
                </span>
                <div className="row gutter-20">
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input name="name" type="text" placeholder="Full Name" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-grp">
                      <input
                        name="phone"
                        type="tel"
                        placeholder="Contact Number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-grp">
                      <input
                        name="email"
                        type="email"
                        placeholder="E-mail ID"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-grp">
                      <textarea
                        name="message"
                        placeholder="Write your queries..."
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn">
                  Send Us Message
                  <img
                    src={right_arrow}
                    alt=""
                    className="injectable"
                  />
                </button>
              </form>
              <p className="ajax-response mb-0"></p>
            </div>
          </div>
        </div>
        {/* <!-- contact-map --> */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48409.69813174607!2d-74.05163325136718!3d40.68264649999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bae694479a3%3A0xb9949385da52e69e!2sBarclays%20Center!5e0!3m2!1sen!2sbd!4v1684309529719!5m2!1sen!2sbd"
            style={{ border: 0, width: "100%", height: "350px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
        {/* <!-- contact-map-end --> */}
      </div>
    </section>
  );
};

export default ContactArea;