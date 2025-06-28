import { useState } from "react";
import "./Mobile.css";

const megaMenuData = {
  shop: {
    title: "Shop",
    sections: [
      {
        title: "Pet Categories",
        items: [
          { name: "All Products", href: "/shop" },
          { name: "Dog Supplies", href: "/shop/dogs" },
          { name: "Cat Supplies", href: "/shop/cats" },
          { name: "Bird Supplies", href: "/shop/birds" },
          { name: "Fish & Aquatic", href: "/shop/fish" },
          { name: "Small Animals", href: "/shop/small-animals" },
        ],
      },
      {
        title: "Food & Treats",
        items: [
          { name: "Dry Food", href: "/shop/dry-food" },
          { name: "Wet Food", href: "/shop/wet-food" },
          { name: "Treats & Snacks", href: "/shop/treats" },
          { name: "Organic Food", href: "/shop/organic", badge: "Popular" },
          { name: "Prescription Diet", href: "/shop/prescription" },
          { name: "Puppy Food", href: "/shop/puppy-food" },
        ],
      },
      {
        title: "Accessories",
        items: [
          { name: "Toys", href: "/shop/toys" },
          { name: "Collars & Leashes", href: "/shop/collars" },
          { name: "Beds & Furniture", href: "/shop/beds" },
          { name: "Grooming Tools", href: "/shop/grooming" },
          { name: "Carriers & Travel", href: "/shop/carriers" },
          { name: "Feeding Accessories", href: "/shop/feeding" },
        ],
      },
      {
        title: "Special Offers",
        items: [
          { name: "Sale Items", href: "/shop/sale", badge: "Up to 50% Off" },
          { name: "New Arrivals", href: "/shop/new", isNew: true },
          { name: "Bundle Deals", href: "/shop/bundles" },
          {
            name: "Clearance",
            href: "/shop/clearance",
            badge: "Limited Time",
          },
          { name: "Bulk Orders", href: "/shop/bulk" },
          { name: "Gift Cards", href: "/shop/gift-cards" },
        ],
      },
    ],
  },
  services: {
    title: "Services",
    sections: [
      {
        title: "Grooming Services",
        items: [
          { name: "Full Service Grooming", href: "/services/grooming" },
          { name: "Bath & Brush", href: "/services/bath" },
          { name: "Nail Trimming", href: "/services/nails" },
          { name: "Teeth Cleaning", href: "/services/dental" },
          { name: "Flea Treatment", href: "/services/flea" },
          { name: "De-shedding", href: "/services/deshedding" },
        ],
      },
      {
        title: "Veterinary Care",
        items: [
          { name: "Health Checkups", href: "/services/checkups" },
          { name: "Vaccinations", href: "/services/vaccinations" },
          {
            name: "Emergency Care",
            href: "/services/emergency",
            badge: "24/7",
          },
          { name: "Surgery", href: "/services/surgery" },
          { name: "Dental Care", href: "/services/dental-care" },
          { name: "Spay & Neuter", href: "/services/spay-neuter" },
        ],
      },
      {
        title: "Training & Boarding",
        items: [
          { name: "Obedience Training", href: "/services/training" },
          { name: "Puppy Classes", href: "/services/puppy-classes" },
          { name: "Pet Boarding", href: "/services/boarding" },
          { name: "Daycare", href: "/services/daycare" },
          { name: "Walking Services", href: "/services/walking" },
          { name: "Behavioral Consulting", href: "/services/behavioral" },
        ],
      },
      {
        title: "Additional Services",
        items: [
          {
            name: "Pet Photography",
            href: "/services/photography",
            isNew: true,
          },
          { name: "Microchipping", href: "/services/microchip" },
          { name: "Pet Taxi", href: "/services/taxi" },
          { name: "Home Visits", href: "/services/home-visits" },
          { name: "Pet Insurance", href: "/services/insurance" },
          { name: "Adoption Services", href: "/services/adoption" },
        ],
      },
    ],
  },
  breeds: {
    title: "Pet Breeds",
    sections: [
      {
        title: "Popular Dog Breeds",
        items: [
          { name: "Golden Retriever", href: "/breeds/golden-retriever" },
          { name: "Labrador Retriever", href: "/breeds/labrador" },
          { name: "German Shepherd", href: "/breeds/german-shepherd" },
          { name: "French Bulldog", href: "/breeds/french-bulldog" },
          { name: "Bulldog", href: "/breeds/bulldog" },
          { name: "Poodle", href: "/breeds/poodle" },
        ],
      },
      {
        title: "Small Dog Breeds",
        items: [
          { name: "Chihuahua", href: "/breeds/chihuahua" },
          { name: "Yorkshire Terrier", href: "/breeds/yorkshire-terrier" },
          { name: "Pomeranian", href: "/breeds/pomeranian" },
          { name: "Maltese", href: "/breeds/maltese" },
          { name: "Shih Tzu", href: "/breeds/shih-tzu" },
          { name: "Pug", href: "/breeds/pug" },
        ],
      },
      {
        title: "Cat Breeds",
        items: [
          { name: "Persian", href: "/breeds/persian" },
          { name: "Maine Coon", href: "/breeds/maine-coon" },
          { name: "Siamese", href: "/breeds/siamese" },
          { name: "British Shorthair", href: "/breeds/british-shorthair" },
          { name: "Ragdoll", href: "/breeds/ragdoll" },
          { name: "Bengal", href: "/breeds/bengal" },
        ],
      },
      {
        title: "Exotic Pets",
        items: [
          { name: "Parrots", href: "/breeds/parrots" },
          { name: "Rabbits", href: "/breeds/rabbits" },
          { name: "Guinea Pigs", href: "/breeds/guinea-pigs" },
          { name: "Hamsters", href: "/breeds/hamsters" },
          { name: "Reptiles", href: "/breeds/reptiles" },
          { name: "Tropical Fish", href: "/breeds/tropical-fish" },
        ],
      },
    ],
  },
};

const mainMenuOptions = Object.keys(megaMenuData);

export default function Mobile({ className = "" }) {
  const [open, setOpen] = useState(false);
  const [menuStack, setMenuStack] = useState([]);

  const handleOpenMenu = () => setOpen(true);
  const handleCloseMenu = () => {
    setOpen(false);
    setMenuStack([]);
  };

  const handleMenuClick = (key) => {
    setMenuStack((prev) => [...prev, key]);
  };

  const handleBack = () => {
    setMenuStack((prev) => prev.slice(0, -1));
  };

  let content;
  if (menuStack.length === 0) {
    content = (
      <ul className="megamenu-mobile-main-list">
        <li>
          <a href="/" className="megamenu-mobile-main-btn">
            Home
          </a>
        </li>
        {mainMenuOptions.map((key) => (
          <li key={key}>
            <button
              className="megamenu-mobile-main-btn"
              onClick={() => handleMenuClick(key)}
            >
              {megaMenuData[key].title}
            </button>
          </li>
        ))}
        <li>
          <a href="/about" className="megamenu-mobile-main-btn">
            About
          </a>
        </li>
      </ul>
    );
  } else {
    const currentKey = menuStack[menuStack.length - 1];
    const menu = megaMenuData[currentKey];
    content = (
      <div className="megamenu-mobile-section">
        <button className="megamenu-mobile-back" onClick={handleBack}>
          ← Back
        </button>
        <h2 className="megamenu-mobile-title">{menu.title}</h2>
        {menu.sections.map((section) => (
          <div key={section.title} className="megamenu-mobile-group">
            <h3 className="megamenu-mobile-group-title">{section.title}</h3>
            <ul className="megamenu-mobile-items">
              {section.items.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="megamenu-mobile-link">
                    {item.name}
                    {item.badge && (
                      <span className="megamenu-mobile-badge">
                        {item.badge}
                      </span>
                    )}
                    {item.isNew && (
                      <span className="megamenu-mobile-new">New</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <button
        className={`megamenu-mobile-toggle${open ? " open" : ""} ${className}`}
        onClick={handleOpenMenu}
        aria-label="Open menu"
        style={{ display: open ? "none" : undefined }}
      >
        <div className="mobile-nav-toggler">
          <i className="flaticon-layout" />
        </div>
      </button>
      {open && (
        <div className="megamenu-mobile-overlay">
          <div className="megamenu-mobile-fullscreen">
            <button
              className="megamenu-mobile-close"
              onClick={handleCloseMenu}
              aria-label="Close menu"
            >
              ×
            </button>
            {content}
          </div>
        </div>
      )}
    </>
  );
}
