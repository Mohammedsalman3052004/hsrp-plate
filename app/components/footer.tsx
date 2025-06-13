import React from "react";
import "../css/footer.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer">
        <div className="footer-image-section">
          <Image
            src="/images/logo.jpg"
            alt="logo"
            height={127}
            width={124}
            className="footer-logo"
          />
          <p className="footer-description">
            
          </p>
        </div>
        <div className="footer-content-section">
          <div className="footer-content">
            <p className="footer-content-heading">Quick Links</p>
            <Link className="nav-links" href="/">
              Home
            </Link>
            <Link className="nav-links" href="#our-therapy">
              Services
            </Link>
            <Link className="nav-links" href="#our-pricing">
              Pricing & Packages
            </Link>
            <Link className="nav-links" href="#membership">
              Membership
            </Link>
          </div>
          <div className="footer-content">
            <p className="footer-content-heading">Contact</p>
            <Link className="footer-content-links" href="tel:9003884178">
              Cell : 9003884178
            </Link>
            <Link
              className="footer-content-links"
              href="mailto:hsrpnumberplate1@gmail.com"
            >
              Email : hsrpnumberplate1@gmail.com
            </Link>
          </div>
          <div className="footer-content">
            <p className="footer-content-heading">Address</p>
            <Link className="footer-content-links-address" href="https://maps.app.goo.gl/ef7839QR8tvkeU6q6">
              No:531r, Regional Transport Office Rd, Phase 2, Sathuvachari, Vellore - 632009.
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-icons">
        <div className="footer-icon-container">
          <div className="footer-icon-heading">Get in Touch</div>
          <div className="icon-container">
            <Link href="tel:9003884178">
              <Image
                src="../assets/icons/call.svg"
                alt="call"
                height={30}
                width={30}
              />
            </Link>
            <Link href="mailto:hsrpnumberplate1@gmail.com">
              <Image
                src="../assets/icons/email.svg"
                alt="email"
                height={30}
                width={30}
              />
            </Link>
            <Link href="facebook.com">
              <Image
                src="../assets/icons/facebook.svg"
                alt="call"
                height={30}
                width={30}
              />
            </Link>
            <Link href="instagram.com">
              <Image
                src="../assets/icons/instagram.svg"
                alt="email"
                height={30}
                width={30}
              />
            </Link>
            <Link href="https://maps.app.goo.gl/ef7839QR8tvkeU6q6">
              <Image
                src="../assets/icons/location.svg"
                alt="call"
                height={30}
                width={30}
              />
            </Link>
            <Link href=" https://wa.me/9003884178">
              <Image
                src="../assets/icons/whatsapp.svg"
                alt="email"
                height={30}
                width={30}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
