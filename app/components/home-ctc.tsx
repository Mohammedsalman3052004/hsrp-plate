"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HomeCtc = () => {
  const imageWrapperRef = useRef(null);

  const isImageInView = useInView(imageWrapperRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <section className="learning-journey mb-14">
      <div className="padding-global">
        <div className="main-container learning-journey-container">
          <div className="px-6 text-justify full-width">
            <h4 className="">
              At our trusted{" "}
              <span className="text-yellow-400">
                HSRP Number plate service
              </span>
              , we specialize in High Security Registration Plates (HSRP) and
              IND number plates for all types of vehicles across India. With a
              legacy of excellence{" "}
              <span className="text-yellow-400">
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
              compliance with India&apos;s top-rated number plate provider.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCtc;
