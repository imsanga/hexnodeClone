import { useState } from "react";
import "./SecFive.css";
import justinModrak from "./assets/justin-modrak.webp";
import daliborKruljac from "./assets/dalibor-kruljac.webp";
import chrisRobinson from "./assets/chris-robinson.webp";

const feedbacks = [
  {
    img: justinModrak,
    message: "Hexnode is of great value. Works great with Android and iOS!",
    name: "Justin Modrak",
    companyName: "Technolgy Coordinator, East Tray Community School District",
  },
  {
    img: daliborKruljac,
    message:
      "Most complete MDM solution I found, and I tested many of them, including major names.",
    name: "Dalibor Kruljac",
    companyName: "KAMELEYA LTD",
  },
  {
    img: chrisRobinson,
    message: "It seemed to be in-line with everything we were looking at.",
    name: "Chris Robinson",
    companyName: "Executive Account Manager, NCS",
  },
];

const SecFive = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-header">Why should you choose Hexnode?</h2>
      <div className="slider-container">
        <button className="arrow-btn" onClick={handlePrev}>
          &#60;
        </button>
        <div className="feedback-card">
          <img
            src={feedbacks[activeIndex].img}
            alt="User"
            className="profile-img"
          />
          <div className="text-content">
            <h3 className="feedback-msg">"{feedbacks[activeIndex].message}"</h3>
            <div>
              <h4 className="feedback-name">{feedbacks[activeIndex].name}</h4>
              <p className="feedback-companyName">
                {feedbacks[activeIndex].companyName}
              </p>
            </div>
          </div>
        </div>
        <button className="arrow-btn" onClick={handleNext}>
          &#62;
        </button>
      </div>
      <div className="arrow-container">
        <button className="arrow-btns" onClick={handlePrev}>
          &#60;
        </button>
        <button className="arrow-btns" onClick={handleNext}>
          &#62;
        </button>
      </div>
    </div>
  );
};

export default SecFive;
