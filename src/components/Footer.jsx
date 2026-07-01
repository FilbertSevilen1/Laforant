"use client";

import React from "react";
import Image from "next/image";

export default function Footer() {
  const handleSocialClick = (e, platform) => {
    e.preventDefault();
    alert(`Connecting to LaForant ${platform} feed...`);
  };

  return (
    <footer className="main-footer glass-panel">
      <div className="footer-top-row">
        {/* Footer Left - Brand & Address */}
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            <Image 
              src="/images/logo.png" 
              alt="LaForant Logo" 
              width={64} 
              height={64} 
            />
            <span className="logo-text">LAFORANT</span>
          </div>
          <p className="footer-address font-mono">
            6505 RODEO DRIVE<br />
            FREEMONT, CA 94500<br />
            UNITED STATES
          </p>
        </div>

        {/* Footer Middle - Navigation/Support */}
        <div className="footer-column footer-links">
          <h4 className="footer-title">SUPPORT</h4>
          <ul className="footer-links-list font-mono">
            <li><a href="#" onClick={(e) => { e.preventDefault(); alert("Opening FAQ system..."); }}>FAQ</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); alert("Opening Support ticket window..."); }}>CONTACT US</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); alert("Opening Terms of Use terms..."); }}>TERMS OF USE</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); alert("Opening Privacy Policy..."); }}>PRIVACY POLICY</a></li>
          </ul>
        </div>

        {/* Footer Right - Social */}
        <div className="footer-column footer-social">
          <h4 className="footer-title">FOLLOW US</h4>
          <div className="social-icons-row">
            <a 
              href="https://facebook.com" 
              onClick={(e) => handleSocialClick(e, "Facebook")} 
              className="social-btn" 
              aria-label="Facebook"
            >
              <Image 
                src="/images/Facebook.png" 
                alt="Facebook" 
                width={36} 
                height={36} 
                className="social-img"
              />
            </a>
            
            <a 
              href="https://twitter.com" 
              onClick={(e) => handleSocialClick(e, "Twitter")} 
              className="social-btn" 
              aria-label="Twitter"
            >
              <Image 
                src="/images/Twitter.png" 
                alt="Twitter" 
                width={36} 
                height={36} 
                className="social-img"
              />
            </a>

            <a 
              href="https://instagram.com" 
              onClick={(e) => handleSocialClick(e, "Instagram")} 
              className="social-btn" 
              aria-label="Instagram"
            >
              <Image 
                src="/images/Instagram.png" 
                alt="Instagram" 
                width={36} 
                height={36} 
                className="social-img"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom-row">
        <span className="footer-copyright font-mono">
          © {new Date().getFullYear()} LAFORANT. ALL RIGHTS RESERVED.
        </span>
        <span className="footer-security font-mono">
          SECURE CONNECTION // PROTOCOL_V3
        </span>
      </div>
    </footer>
  );
}
