import React from "react";
import Cards from "./cards";
import "../css/number-plate-section.css";

const ourCoursesCard = [
  {
    image: "/images/c4.jpg",
    title: "Bike Number Plate (Normal)",
    pricing: "₹300 - ₹450",
    paragraph: "(Not including delivery charges)",
  },
  {
    image: "/images/c1.jpg",
    title: "Bike Number Plate (IND)",
    pricing: "₹400 - ₹700",
    paragraph: "(Not including delivery charges)",
  },
  {
    image: "/images/c3.jpg",
    title: "Bike Number Plate (Normal)",
    pricing: "₹100 - ₹150",
    paragraph: "(Not including delivery charges)",
  },
  {
    image: "/images/c5.jpg",
    title: "Bike Number Plate (Case)",
    pricing: "₹300 - ₹450",
    paragraph: "(Not including delivery charges)",
  },
  {
    image: "/images/home.jpg",
    title: "Car Number Plate (Black)",
    pricing: "₹400 - ₹650",
    paragraph: "(Not including delivery charges)",
  },
  {
    image: "/images/c8.jpg",
    title: "Car Number Plate (IND)",
    pricing: "₹300 - ₹450",
    paragraph: "(Not including delivery charges)",
  },
  {
    image: "/images/c6.jpg",
    title: "Car Yellow Number Plate (Normal)",
    pricing: "₹300 - ₹450",
    paragraph: "(Not including delivery charges)",
  },
  {
    image: "/images/c7.jpg",
    title: "Car Yellow Number Plate (IND)",
    pricing: "₹300 - ₹450",
    paragraph: "(Not including delivery charges)",
  },
  {
    image: "/images/c10.jpg",
    title: "Car Number Plate (Case)",
    pricing: "₹300 - ₹450",
    paragraph: "(Not including delivery charges)",
  },
  {
    image: "/images/c13.png",
    title: "EV Bike Number Plate",
    pricing: "₹300 - ₹450",
    paragraph: "(Not including delivery charges)",
  },
  {
    image: "/images/c12.jpg",
    title: "EV Car Number Plate",
    pricing: "₹300 - ₹450",
    paragraph: "(Not including delivery charges)",
  },
];

const Numberplatesection = () => {
  return (
    //     <div className="padding-global">
    //       <div className="main-container">
    <div className="course-detail-courses" id="numberplate">
      <div className="padding-global">
        <div className="main-container">
          <div className="course-detail-title">
            <h1 className="section-title">HSRP Number plate service</h1>
          </div>
          <div className="course-detail-cards">
            {ourCoursesCard.map((card, index) => (
              <div className="course-detail-card" key={index}>
                <Cards
                  images={card.image}
                  title={card.title}
                  pricing={card.pricing}
                  paragraph={card.paragraph}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Numberplatesection;
