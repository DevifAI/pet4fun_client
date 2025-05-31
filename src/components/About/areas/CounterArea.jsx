import { useEffect, useState } from "react";
import h2_counter_shape from "../../../assets/img/images/h2_counter_shape.png";
import counter_bg from "../../../assets/img/bg/counter_bg.jpg";

const counters = [
  { count: 5985, label: "Happy Family" },
  { count: 1322, label: "New Listed States" },
  { count: 3102, label: "Core Breeding" },
  { count: 1125, label: "Annual Awards" },
];

const CounterItem = ({ end, label }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const increment = Math.ceil(end / (duration / 16));
    const step = () => {
      start += increment;
      if (start < end) {
        setValue(start);
        requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };
    step();
    // eslint-disable-next-line
  }, [end]);

  return (
    <div className="counter__item-two">
      <div className="counter__item-shape">
        <img src={h2_counter_shape} alt="" />
      </div>
      <span className="count">{value.toLocaleString()}</span>
      <p>{label}</p>
    </div>
  );
};

const CounterArea = () => {
  return (
    <div
      className="counter__area-two counter__area-bg"
      style={{ backgroundImage: `url(${counter_bg})` }}
    >
      <div className="container">
        <div className="row">
          {counters.map((item, idx) => (
            <div className="col-lg-3 col-sm-6" key={idx}>
              <CounterItem end={item.count} label={item.label} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
