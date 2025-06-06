"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import "../css/home-ctc.css";

const HomeCtc = () => {
  const imageRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const titleRef = useRef(null);

  const isImageInView = useInView(imageWrapperRef, {
    once: true,
    margin: "-50px",
  });
  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" });

  return (
    <section className="learning-journey">
      <Image
        src="/assets/Icons/right-mosque-icon.svg"
        alt="Right Arrow"
        className="right-mosque-icon"
        height={1}
        width={1}
      />
      <div className="padding-global">
        <div className="main-container learning-journey-container">
          <div className="learning-journey-content">
            <h4 className="learning-journey-description">
              At our trusted{" "}
              <span className="learning-journey-description-span">
               HSRP Number plate service
              </span>
              , we specialize in High Security Registration Plates (HSRP) and
              IND number plates for all types of vehicles across India. With a
              legacy of excellence{" "}
              <span className="learning-journey-description-span">
                since 1984
              </span>
              , we provide fast, legal, and RTO-approved number plates that
              ensure vehicle safety and compliance. Whether you need a new HSRP
              plate, a replacement IND plate, or personalized options, our
              expert team offers both online and offline services for your
              convenience. Enjoy quick delivery, high-quality aluminum plates
              with laser-etched codes, and tamper-proof features. We also
              support bulk orders, custom fittings, and doorstep installation.
              Trusted by thousands, we offer reliable customer support and
              secure payment methods. Enhance your vehicle&apos;s identity and
              compliance with India’s top-rated number plate provider.
            </h4>

            <Link rel="stylesheet" href="/about-us">
              <div className="section-btn">
                <p>Learn More</p>
                <svg
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.7071 8.20711C18.0976 7.81658 18.0976 7.18342 17.7071 6.79289L11.3431 0.428932C10.9526 0.0384079 10.3195 0.0384079 9.92893 0.428932C9.53841 0.819456 9.53841 1.45262 9.92893 1.84315L15.5858 7.5L9.92893 13.1569C9.53841 13.5474 9.53841 14.1805 9.92893 14.5711C10.3195 14.9616 10.9526 14.9616 11.3431 14.5711L17.7071 8.20711ZM0 8.5L17 8.5V6.5L0 6.5L0 8.5Z"
                    fill="white"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Static Wrapper */}
          <div ref={imageWrapperRef} className="learning-journey-image-div">
            {/* Image Animation */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isImageInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                ref={imageRef}
                src="/images/1.jpg"
                className="learning-journey-image"
                alt="Learning Journey"
                width={477}
                height={700}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCtc;
