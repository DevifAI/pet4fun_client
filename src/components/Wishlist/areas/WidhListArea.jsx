// Wishlist.jsx
import React, { useState } from "react";
import WishListItem from "./WishListItem";

const WidhListArea = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "ALPINO High Protein Super Oats Chocolate",
      img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=200&h=200&fit=crop&crop=center",
      price: "₹489",
      originalPrice: "₹549",
      discount: "10% off",
    },
    {
      id: 2,
      title: "8AM Corn Flakes Family Pouch",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&crop=center",
      price: "₹240",
      originalPrice: "₹320",
      discount: "25% off",
    },
    {
      id: 3,
      title: "Nilkamal SLEEP Striker Metal Single Bed",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=center",
      price: "₹7,099",
      originalPrice: "₹15,999",
      discount: "55% off",
    },
    {
      id: 4,
      title: "Nilkamal SLEEP Striker Metal Single Bed",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=center",
      price: "₹7,099",
      originalPrice: "₹15,999",
      discount: "55% off",
    },
  ]);

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <section>
      <div className="container">
        <div className="wishlist-container">
          {items.map((item) => (
            <WishListItem key={item.id} item={item} onRemove={removeItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WidhListArea;
