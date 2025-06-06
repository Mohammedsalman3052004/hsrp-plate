import Image from "next/image";
import React from "react";
import "../css/cards.css";

const Cards = ({
  images,
  title,
  pricing,
  paragraph,
}: {
  images: string;
  title: string;
  pricing: string;
  paragraph: string;
}) => {
  return (
    <div className="our-courses-card-ctc">
      <div className="courses-image-ctc">
        <Image
          src={images}
          alt="our-courses-live-card"
          width={500}
          height={336}
          className="our-courses-card-image-ctc"
        />
      </div>
      <div className="our-courses-live-content-ctc">
        <h2 className="our-courses-title-ctc">{title}</h2>
        <h1 className="our-courses-description-text-ctc">{pricing}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Cards;
