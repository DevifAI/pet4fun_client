import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import logo from "../../assets/img/logo/logo.png";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <>
      <header>
        <div id="header-fixed-height" className="" />
        <div className="tg-header__top">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8">
                <ul className="tg-header__top-info left-side list-wrap">
                  <li>
                    <i className="flaticon-placeholder" />
                    Kolkata, India
                  </li>
                  <li>
                    <i className="flaticon-mail" />
                    <a href="mailto:Petspostinfo@gmail.com">
                      petshop@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-6 col-lg-4">
                <ul className="tg-header__top-right list-wrap">
                  <li>
                    <i className="flaticon-phone" />
                    Need help? Call Us:
                    <a href="tel:0123456789">+91 9876543210</a>
                  </li>
                  <li className="tg-header__top-social">
                    <ul className="list-wrap">
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/" target="_blank">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.whatsapp.com/" target="_blank">
                          <i className="fab fa-whatsapp" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/" target="_blank">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          id="sticky-header"
          className="tg-header__area tg-header__area-four"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tgmenu__wrap">
                  <nav className="tgmenu__nav">
                    <div className="logo">
                      <Link to="/">
                        <img src={logo} alt="" />
                      </Link>
                    </div>
                    <Desktop className="desktop-only" />
                    <Mobile className="mobile-only" />
                    <div className="tgmenu__search">
                      <form action="#" className="tgmenu__search-form">
                        <input type="text" placeholder="Search Here " />
                        <button type="submit">
                          <i className="flaticon-loupe" />
                        </button>
                      </form>
                    </div>
                    <div className="tgmenu__action tgmenu__action-three d-md-block">
                      <ul className="list-wrap">
                        <li className="header-login">
                          <a href="">
                            <i className="flaticon-user" />
                          </a>
                        </li>
                        <li className="header-wishlist">
                          <a href="javascript:void(0)">
                            <i className="flaticon-love" />
                          </a>
                        </li>
                        <li className="header-cart header-cart-two">
                          <a href="javascript:void(0)">
                            <i className="flaticon-shopping-bag" />
                            <span>0</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-nav-toggler" style={{ opacity: 0 }}>
                      <i className="flaticon-layout" />
                    </div>
                  </nav>
                </div>
                {/* Mobile Menu  */}
                <div className="tgmobile__menu">
                  <nav className="tgmobile__menu-box">
                    <div className="close-btn">
                      <i className="fas fa-times" />
                    </div>
                    <div className="nav-logo">
                      <a href="">Pet4fun Logo</a>
                    </div>
                    <div className="tgmobile__search">
                      <form action="#">
                        <input type="text" placeholder="Search here..." />
                        <button>
                          <i className="fas fa-search" />
                        </button>
                      </form>
                    </div>
                    <div className="tgmobile__menu-outer">
                      <ul className="navigation">
                        <li>
                          <a href="">Home</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Shop</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="">Our Shop</a>
                            </li>
                            <li>
                              <a href="">Offers</a>
                            </li>
                          </ul>
                          <div className="dropdown-btn">
                            <span className="plus-line" />
                          </div>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Dogs</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="">Dogs1</a>
                            </li>
                            <li>
                              <a href="">Dogs2</a>
                            </li>
                            <li>
                              <a href="">Dogs3</a>
                            </li>
                            <li>
                              <a href="">Dogs4</a>
                            </li>
                            <li>
                              <a href="">Dogs5</a>
                            </li>
                          </ul>
                          <div className="dropdown-btn">
                            <span className="plus-line" />
                          </div>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Cats</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="">Cats1</a>
                            </li>
                            <li>
                              <a href="">Cats2</a>
                            </li>
                            <li>
                              <a href="">Cats3</a>
                            </li>
                            <li>
                              <a href="">Cats4</a>
                            </li>
                            <li>
                              <a href="">Cats5</a>
                            </li>
                          </ul>
                          <div className="dropdown-btn">
                            <span className="plus-line" />
                          </div>
                        </li>
                        <li>
                          <a href="">pet4fun clinic</a>
                        </li>
                        <li>
                          <a href="">contacts</a>
                        </li>
                      </ul>
                    </div>
                    <div className="social-links">
                      <ul className="list-wrap">
                        <li>
                          <a href="https://www.facebook.com/" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/" target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.whatsapp.com/" target="_blank">
                            <i className="fab fa-whatsapp" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/" target="_blank">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.youtube.com/" target="_blank">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="tgmobile__menu-backdrop" />
                {/* End Mobile Menu */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainMenu;
