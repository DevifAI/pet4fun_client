import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategoryTree } from "../../redux/slice/categorySlice";
import "./Desktop.css";
import { Link } from "react-router-dom";

export default function Desktop({ className = "" }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const dispatch = useDispatch();
  const { tree, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategoryTree());
  }, [dispatch]);

  const handleMouseEnter = (menuKey) => {
    setActiveMenu(menuKey);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  if (loading) return <div>Loading menu...</div>;
  if (error) return <div>Error loading menu: {error}</div>;

  return (
    <div className={`mega-menu-container ${className}`}>
      <nav className="mega-menu-nav">
        <ul className="mega-menu-list">
          {/* Render main categories directly in navbar */}
          {tree.map((category) => (
            <li
              key={category._id}
              className={`mega-menu-item has-dropdown ${
                activeMenu === category._id ? "active" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(category._id)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={`/shop?categorySlug=${category.slug}`}
                className="mega-menu-link"
              >
                {category.name}
                {category.subCategories?.length > 0 && (
                  <i className="fas fa-chevron-down"></i>
                )}
              </Link>

              {/* Only show dropdown if category has subcategories */}
              {category.subCategories?.length > 0 && (
                <div
                  className={`mega-dropdown ${
                    activeMenu === category._id ? "show" : ""
                  }`}
                >
                  <div className="container">
                    <div className="row">
                      {/* Group subcategories into columns */}
                      {category.subCategories.map((subCategory) => (
                        <div
                          key={subCategory._id}
                          className="col-lg-4 col-md-6 mb-4"
                        >
                          <div className="mega-menu-section">
                            <h5 className="mega-menu-section-title">
                              <Link
                                to={`/shop?categorySlug=${category.slug}&subCategorySlug=${subCategory.slug}`}
                                className="mega-menu-section-link"
                              >
                                {subCategory.name}
                              </Link>
                            </h5>
                            {subCategory.childSubCategories?.length > 0 && (
                              <ul className="mega-menu-section-list">
                                {subCategory.childSubCategories.map(
                                  (childSubCategory) => (
                                    <li
                                      key={childSubCategory._id}
                                      className="mega-menu-section-item"
                                    >
                                      <Link
                                        to={`/shop?categorySlug=${category.slug}&subCategorySlug=${subCategory.slug}&childSubCategorySlug=${childSubCategory.slug}`}
                                        className="mega-menu-section-link"
                                      >
                                        {childSubCategory.name}
                                      </Link>
                                    </li>
                                  )
                                )}
                              </ul>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}

          <li className="mega-menu-item">
            <Link to="/about" className="mega-menu-link">
              About
            </Link>
          </li>
          <li className="mega-menu-item">
            <Link to="/contact" className="mega-menu-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
