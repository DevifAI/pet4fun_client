import Breadcrumb from "../Breadcrumb";
import introducing_img from "../../assets/img/images/introducing_img.png";
import introducing_img_shape from "../../assets/img/images/introducing_img_shape.svg";
import pet_icon02 from "../../assets/img/icon/pet_icon02.svg";
import right_arrow from "../../assets/img/icon/right_arrow.svg";
import introducing_shape from "../../assets/img/images/introducing_shape.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <header>
        <Breadcrumb
          title="Login"
          breadcrumbItems={[{ label: "Home", link: "/" }, { label: "Login" }]}
        />
      </header>
      <section className="introducing__area">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="introducing__img">
                <img src={introducing_img} alt="img" />
                <div className="shape">
                  <img
                    src={introducing_img_shape}
                    alt=""
                    className="injectable"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="introducing__content">
                <div className="section__title mb-15">
                  <span className="sub-title">
                    Account Login
                    <strong className="shake">
                      <img src={pet_icon02} alt="" className="injectable" />
                    </strong>
                  </span>
                  <h2 className="title">
                    Your journey to smarter, easier, and happier pet care starts
                    here
                  </h2>
                </div>

                <div className="introducing__list-box mb-35">
                  <form action="" method="POST" className="contact__form">
                    <span>
                      — log in to Fun4Pet for everything your pet needs, all in
                      one trusted place.
                    </span>
                    <div className="row gutter-20">
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
                    <div className="row gutter-20 align-items-center mt-2">
                      <div className="col-md-6 text-start">
                        <Link to="/forgot-password">Forgot Password ?</Link>
                      </div>
                      <div className="col-md-6 text-end">
                        <button type="submit" className="btn">
                          Login
                          <img
                            src={right_arrow}
                            alt=""
                            className="injectable"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <div className="text-start">
                        <p className="mb-0">
                          Don't have an account yet?{" "}
                          <Link to="/register">Sign up here</Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
                <br />
                <div className="shape">
                  <img
                    src={introducing_shape}
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

export default Login;
