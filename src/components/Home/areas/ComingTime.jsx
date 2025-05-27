import { useEffect, useState } from "react";

const ComingTime = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    if (difference > 0) {
      return {
        d: Math.floor(difference / (1000 * 60 * 60 * 24)),
        h: Math.floor((difference / (1000 * 60 * 60)) % 24),
        m: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60),
      };
    }
    return { d: 0, h: 0, m: 0, s: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "6px",
      }}
    >
      <div style={boxStyle}>
        {String(timeLeft.d).padStart(2, "0")}
        <div style={labelStyle}>Days</div>
      </div>
      <div style={boxStyle}>
        {String(timeLeft.h).padStart(2, "0")}
        <div style={labelStyle}>Hours</div>
      </div>
      <div style={boxStyle}>
        {String(timeLeft.m).padStart(2, "0")}
        <div style={labelStyle}>Min</div>
      </div>
      <div style={boxStyle}>
        {String(timeLeft.s).padStart(2, "0")}
        <div style={labelStyle}>Sec</div>
      </div>
    </div>
  );
};

export default ComingTime;

const boxStyle = {
  background: "#FF3489",
  color: "#fff",
  borderRadius: "12px",
  padding: "12px 16px",
  minWidth: "50px",
  textAlign: "center",
  fontSize: "1.4em",
  fontWeight: "bold",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  margin: "0 6px",
  transition: "all 0.3s ease-in-out",
};

const labelStyle = {
  fontSize: "0.6em",
  fontWeight: "500",
  marginTop: "4px",
  opacity: 0.9,
};
