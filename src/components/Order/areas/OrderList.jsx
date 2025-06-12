const orders = [
  {
    title: "POCO M6 Plus 5G (Graphite Black, 128 GB)",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop&crop=center",
    color: "Graphite Black",
    price: "₹11,058",
    statusDate: "Delivered on Oct 14, 2024",
    deliveryNote: "Your item has been delivered",
    rating: 0,
    buttonText: "Rate & Review Product",
  },
  {
    title: "intern INT-38C-BL Acoustic Guitar Linden...",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop&crop=center",
    color: "Blue",
    price: "₹2,193 + ★ 6",
    statusDate: "Delivered on May 26, 2024",
    deliveryNote: "Your item has been delivered",
    rating: 0,
    buttonText: "Rate & Review Product",
  },
  {
    title: "METOO Flip Cover for VIVO Y90 / 1908 Fli...",
    image:
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=200&h=200&fit=crop&crop=center",
    color: "Brown",
    price: "₹252",
    statusDate: "Delivered on Jan 28, 2024",
    deliveryNote: "Your item has been delivered",
    rating: 4,
    buttonText: "Write a Review",
  },
  {
    title: "Fire-Boltt Ninja Calling Pro Plus 1.83 i...",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop&crop=center",
    color: "Black | Size: 1.83",
    price: "₹1,309",
    statusDate: "Delivered on Sep 21, 2023",
    deliveryNote: "Your item has been delivered",
    rating: 0,
    buttonText: "Rate & Review Product",
  },
];

const OrderList = () => {
  return (
    <div className="col-lg-9">
      <div className="orders-container">
        {orders.map((order, index) => (
          <div key={index} className="order-card">
            <div className="order-item">
              <div className="product-image-container">
                <img
                  src={order.image}
                  alt={order.title}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h6 className="product-title">{order.title}</h6>
                <div className="product-details">Color: {order.color}</div>
                <div className="product-price">{order.price}</div>
              </div>
              <div className="order-status">
                <div className="status-badge status-delivered">
                  {order.statusDate}
                </div>
                <div className="delivery-date">{order.deliveryNote}</div>
                <div className="rating-section">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={
                          i < order.rating ? "fas fa-star" : "far fa-star"
                        }
                      ></i>
                    ))}
                  </div>
                  <button className="rate-btn">{order.buttonText}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
