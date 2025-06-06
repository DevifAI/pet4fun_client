import Breadcrumb from "../Breadcrumb";
import choose_img from "../../assets/img/images/choose_img.png"
import pet_icon02 from "../../assets/img/icon/pet_icon02.svg";
import choose_shape02 from "../../assets/img/images/choose_shape02.png";
import right_arrow from "../../assets/img/icon/right_arrow.svg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <header>
        <Breadcrumb
          title="Register"
          breadcrumbItems={[
            { label: "Home", link: "/" },
            { label: "Register" },
          ]}
        />
      </header>

      <section className="introducing__area">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="introducing__img">
                <img src={choose_img} alt="img" />
                <div className="shape"></div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="introducing__content">
                <div className="section__title mb-15">
                  <span className="sub-title">
                    Create Accounts
                    <strong className="shake">
                      <img
                        src={pet_icon02}
                        alt=""
                        className="injectable"
                      />
                    </strong>
                  </span>
                  <h2 className="title">
                    Join our growing community of pet lovers by creating your
                    Fun4Pet account today
                  </h2>
                </div>

                <div className="introducing__list-box mb-35">
                  <form action="" method="POST" className="contact__form">
                    <span>
                      stay updated on the latest pet trends, receive customized
                      recommendations, and manage all your pet essentials in one
                      convenient place.
                    </span>
                    <div className="row gutter-20">
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            name="name"
                            type="text"
                            placeholder="Enter Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-grp">
                          <input
                            name="phone"
                            type="number"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-grp">
                          <input
                            name="email"
                            type="email"
                            placeholder="Enter E-mail ID"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-grp">
                          <input
                            name="password"
                            type="password"
                            placeholder="****************"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <button type="submit" className="btn">
                        Register
                        <img
                          src={right_arrow}
                          alt=""
                          className="injectable"
                        />
                      </button>
                    </div>
                    <div className="col-12">
                      <div className="text-start">
                        <p className="mb-0">
                          Already have an account ?<Link to="/login">Login Now</Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
                <br />
                <div className="shape">
                  <img
                    src={choose_shape02}
                    alt="shape"
                    data-aos="fade-up-left"
                    data-aos-delay="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
