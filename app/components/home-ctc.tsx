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
            <h4>
              We provide trusted{" "}
              <span className="text-yellow-400">
                HSRP Number Plate services
              </span>{" "}
              across India, offering high-quality{" "}
              <span className="text-yellow-400">aluminium plates</span> designed
              for long-lasting durability and a premium look. Each plate comes
              with non-reusable security locks that are{" "}
              <span className="text-yellow-400">tamper-proof</span>, ensuring
              your vehicle’s identity remains safe and unique. Once detached,
              the locks cannot be reused, giving you complete peace of mind.
              These plates are electronically linked to your vehicle, making
              them highly secure and impossible to duplicate.  
              <br />
              <br />
              With our true commitment to quality and reliable service, we make
              the process simple and convenient—whether you need a fresh HSRP,
              a replacement, or custom fitting. Thousands of customers trust us
              for quick delivery, professional support, and secure installation.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCtc;
