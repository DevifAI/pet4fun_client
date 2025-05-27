import { useEffect, useState } from "react";
import logo  from "./assets/img/logo/logo.png";


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    if (window.SVGInject) {
      SVGInject(document.querySelectorAll("img.injectable"));
    }
  }, []);

  useEffect(() => {
    // Toggle body class for mobile menu
    if (mobileMenuOpen) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
    // Clean up on unmount
    return () => document.body.classList.remove("mobile-menu-visible");
  }, [mobileMenuOpen]);

  // Helper to toggle submenu
  const handleSubmenuToggle = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <header>
      <div id="header-fixed-height"></div>
      <div className="tg-header__top">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <ul className="tg-header__top-info left-side list-wrap">
                <li>
                  <i className="flaticon-placeholder"></i>Kolkata, India
                </li>
                <li>
                  <i className="flaticon-mail"></i>
                  <a href="mailto:Petspostinfo@gmail.com">petshop@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-4">
              <ul className="tg-header__top-right list-wrap">
                <li>
                  <i className="flaticon-phone"></i>Need help? Call Us:
                  <a href="tel:0123456789">+91 9876543210</a>
                </li>
                <li className="tg-header__top-social">
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header" className="tg-header__area tg-header__area-four">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">
                  <div className="logo">
                    <a href="">
                      <img src={logo} alt="" />
                    </a>
                  </div>
                  <div className="tgmenu__navbar-wrap tgmenu__navbar-wrap-two tgmenu__main-menu d-none d-xl-flex">
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
                      </li>
                      <li>
                        <a href="">pet4fun clinic</a>
                      </li>
                      <li>
                        <a href="">contacts</a>
                      </li>
                    </ul>
                  </div>
                  <div className="tgmenu__search">
                    <form action="#" className="tgmenu__search-form">
                      <input type="text" placeholder="Search Here . . ." />
                      <div className="select-grp">
                        <select
                          className="form-select"
                          id="course-cat"
                          aria-label="Default select example"
                          style={{ width: "130px" }}
                          defaultValue=""
                        >
                          <option value="" disabled>
                            All Categories
                          </option>
                          <option value="1">Dogs</option>
                          <option value="2">Cats</option>
                          <option value="3">Bull Dog</option>
                          <option value="4">Others</option>
                        </select>
                      </div>
                      <button type="submit">
                        <i className="flaticon-loupe"></i>
                      </button>
                    </form>
                  </div>
                  <div className="tgmenu__action tgmenu__action-three d-md-block">
                    <ul className="list-wrap">
                      <li className="header-login">
                        <a href="">
                          <i className="flaticon-user"></i>
                        </a>
                      </li>
                      <li className="header-wishlist">
                        <a href="javascript:void(0)">
                          <i className="flaticon-love"></i>
                        </a>
                      </li>
                      <li className="header-cart header-cart-two">
                        <a href="javascript:void(0)">
                          <i className="flaticon-shopping-bag"></i>
                          <span>0</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="mobile-nav-toggler"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <i className="flaticon-layout"></i>
                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <div className="tgmobile__menu">
                <nav className="tgmobile__menu-box">
                  <div
                    className="close-btn"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="nav-logo">
                    <a href="">Pet4fun Logo</a>
                  </div>
                  <div className="tgmobile__search">
                    <form action="#">
                      <input type="text" placeholder="Search here..." />
                      <button>
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </div>

                  {/* --- ADD THIS: Mobile Navigation --- */}
                  <ul className="navigation">
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li
                      className={`menu-item-has-children${
                        openSubmenu === "shop" ? " open" : ""
                      }`}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubmenuToggle("shop");
                        }}
                      >
                        Shop
                      </a>
                      <ul
                        className="sub-menu"
                        style={{
                          display: openSubmenu === "shop" ? "block" : "none",
                        }}
                      >
                        <li>
                          <a href="">Our Shop</a>
                        </li>
                        <li>
                          <a href="">Offers</a>
                        </li>
                      </ul>
                    </li>
                    <li
                      className={`menu-item-has-children${
                        openSubmenu === "dogs" ? " open" : ""
                      }`}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubmenuToggle("dogs");
                        }}
                      >
                        Dogs
                      </a>
                      <ul
                        className="sub-menu"
                        style={{
                          display: openSubmenu === "dogs" ? "block" : "none",
                        }}
                      >
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
                    </li>
                    <li
                      className={`menu-item-has-children${
                        openSubmenu === "cats" ? " open" : ""
                      }`}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubmenuToggle("cats");
                        }}
                      >
                        Cats
                      </a>
                      <ul
                        className="sub-menu"
                        style={{
                          display: openSubmenu === "cats" ? "block" : "none",
                        }}
                      >
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
                    </li>
                    <li>
                      <a href="">pet4fun clinic</a>
                    </li>
                    <li>
                      <a href="">contacts</a>
                    </li>
                  </ul>

                  <div className="tgmobile__menu-outer"></div>
                  <div className="social-links">
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
                </nav>
              </div>
              <div
                className="tgmobile__menu-backdrop"
                onClick={() => setMobileMenuOpen(false)}
              ></div>
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
