import footer_shape01 from "./assets/img/images/footer_shape01.png";
import footer_shape02 from "./assets/img/images/footer_shape02.png";
import right_arrow04 from "./assets/img/icon/right_arrow04.svg";
import logo from "./assets/img/logo/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer__area">
        <div className="footer__newsletter-three">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="footer__newsletter-content">
                  <h2 className="title">Sign Up For Newsletter!</h2>
                </div>
              </div>
              <div className="col-lg-7">
                <form action="#" className="footer__newsletter-form-two">
                  <input type="email" placeholder="Type Your E-mail" />
                  <button type="submit">
                    Subscribe
                    <img
                      src={right_arrow04}
                      alt=""
                      className="injectable"
                    />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__top footer__top-three fix">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer__widget">
                  <div className="footer__logo">
                    <a href="">
                      <img src={logo} alt="" />
                    </a>
                  </div>
                  <div className="footer__content footer__content-two">
                    <p>Pet4fun Short Descriptions</p>
                  </div>
                  <div className="footer__social">
                    <h6 className="title">Follow Us On:</h6>
                    <ul className="list-wrap">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.whatsapp.com/" target="_blank">
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/" target="_blank">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Quick Links</h4>
                  <div className="footer__link">
                    <ul className="list-wrap">
                      <li>
                        <a href="">Animal Rescue</a>
                      </li>
                      <li>
                        <a href="">Humane Education</a>
                      </li>
                      <li>
                        <a href="">Caregivers</a>
                      </li>
                      <li>
                        <a href="">New & Blog</a>
                      </li>
                      <li>
                        <a href="">Gallery</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Support</h4>
                  <div className="footer__link">
                    <ul className="list-wrap">
                      <li>
                        <a href="">About us</a>
                      </li>
                      <li>
                        <a href="">Contact us</a>
                      </li>
                      <li>
                        <a href="">Book Appointment</a>
                      </li>
                      <li>
                        <a href="">FAQ</a>
                      </li>
                      <li>
                        <a href="">Locations</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h4 className="footer__widget-title">Contact</h4>
                  <div className="footer__contact">
                    <ul className="list-wrap">
                      <li>Kolkata, West Bengal, India</li>
                      <li>
                        <a href="tel:0123456789">+91 9876543210</a>
                      </li>
                      <li>
                        <a href="mailto:petshop@gmail.com">petshop@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__shape-wrap">
            <img
              src={footer_shape01}
              alt="img"
              data-aos="fade-up-right"
              data-aos-delay="400"
            />
            <img
              src={footer_shape02}
              alt="img"
              data-aos="fade-up-left"
              data-aos-delay="400"
            />
          </div>
        </div>
        <div className="footer__bottom footer__bottom-two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="copyright-text copyright-text-three">
                  <p>Copyright © 2025. All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="footer__bottom-menu footer__bottom-menu-two">
                  <ul className="list-wrap">
                    <li>
                      <a href="">Support</a>
                    </li>
                    <li>
                      <a href="">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="">Career</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
