import { useEffect, useState } from "react";
import logo from "./assets/img/logo/logo.png";
import { Link } from "react-router-dom";

// Menu data as array of objects
const menuItems = [
  { label: "Home", link: "/" },
  {
    label: "Shop",
    submenu: [
      { label: "Our Shop", link: "/shop" },
      { label: "Offers", link: "" },
      { label: "About us", link: "/about" },
      { label: "Blogs", link: "/blogs" },
    ],
  },
  {
    label: "Dogs",
    submenu: [
      { label: "Dogs1", link: "" },
      { label: "Dogs2", link: "" },
      { label: "Dogs3", link: "" },
      { label: "Dogs4", link: "" },
      { label: "Dogs5", link: "" },
    ],
  },
  {
    label: "Cats",
    submenu: [
      { label: "Cats1", link: "" },
      { label: "Cats2", link: "" },
      { label: "Cats3", link: "" },
      { label: "Cats4", link: "" },
      { label: "Cats5", link: "" },
    ],
  },
  { label: "Clinic", link: "" },
  { label: "contacts", link: "/contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  useEffect(() => {
    if (window.SVGInject) {
      SVGInject(document.querySelectorAll("img.injectable"));
    }
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
    return () => document.body.classList.remove("mobile-menu-visible");
  }, [mobileMenuOpen]);

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
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.whatsapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
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
                  {/* Desktop Menu */}
                  <div className="tgmenu__navbar-wrap tgmenu__navbar-wrap-two tgmenu__main-menu d-none d-xl-flex">
                    <ul className="navigation">
                      {menuItems.map((item, idx) =>
                        item.submenu ? (
                          <li className="menu-item-has-children" key={idx}>
                            <Link to={item.link}>{item.label}</Link>
                            <ul className="sub-menu">
                              {item.submenu.map((sub, subIdx) => (
                                <li key={subIdx}>
                                  <Link to={sub.link}>{sub.label}</Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ) : (
                          <li key={idx}>
                            <Link to={item.link}>{item.label}</Link>
                          </li>
                        )
                      )}
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
                        <Link to="/account">
                          <i className="flaticon-user"></i>
                        </Link>
                      </li>
                      <li className="header-wishlist">
                        <Link to="/wishlist">
                          <i className="flaticon-love"></i>
                        </Link>
                      </li>
                      <li className="header-cart header-cart-two">
                        <Link to="/cart">
                          <i className="flaticon-shopping-bag"></i>
                          <span>0</span>
                        </Link>
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
                  {/* Mobile Navigation from array */}
                  <ul className="navigation">
                    {menuItems.map((item, idx) =>
                      item.submenu ? (
                        <li
                          className={`menu-item-has-children${
                            openSubmenu === item.label ? " open" : ""
                          }`}
                          key={idx}
                        >
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleSubmenuToggle(item.label);
                            }}
                          >
                            {item.label}
                          </a>
                          <ul
                            className="sub-menu"
                            style={{
                              display:
                                openSubmenu === item.label ? "block" : "none",
                            }}
                          >
                            {item.submenu.map((sub, subIdx) => (
                              <li key={subIdx}>
                                <Link
                                  to={sub.link}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={idx}>
                          <Link
                            to={item.link}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                  <div className="tgmobile__menu-outer"></div>
                  <div className="social-links">
                    <ul className="list-wrap">
                      <li>
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.whatsapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
