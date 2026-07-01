"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Header({ currentUser, onLogout, onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = () => {
      setDropdownOpen(false);
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleDropdownTrigger = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent document click handler from closing it immediately
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="main-header glass-panel">
      <div className="header-container">
        {/* Left Section - Logo */}
        <div className="header-logo" onClick={(e) => handleNavClick(e, "home")}>
          <Image 
            src="/images/logo.png" 
            alt="LaForant Logo" 
            width={48} 
            height={48} 
            priority
          />
          <span className="logo-text">LAFORANT</span>
        </div>

        {/* Center Section - Navigation Links */}
        <nav className="desktop-nav">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="nav-link">
            HOME
          </a>
          
          <div className="nav-dropdown-wrapper">
            <button 
              onClick={handleDropdownTrigger}
              className={`nav-link dropdown-trigger ${dropdownOpen ? "active" : ""}`}
            >
              GAME <span className="dropdown-caret">▼</span>
            </button>
            {dropdownOpen && (
              <div className="nav-dropdown glass-panel" onClick={(e) => e.stopPropagation()}>
                <a href="#agents" onClick={(e) => handleNavClick(e, "agents")} className="dropdown-link">
                  AGENTS
                </a>
                <a href="#maps" onClick={(e) => handleNavClick(e, "maps")} className="dropdown-link">
                  MAPS
                </a>
                <a href="#system" onClick={(e) => handleNavClick(e, "system")} className="dropdown-link">
                  SYSTEM REQUIREMENTS
                </a>
              </div>
            )}
          </div>

          <a href="#news" onClick={(e) => handleNavClick(e, "news")} className="nav-link">
            NEWS
          </a>
          
          <a 
            href="#community" 
            onClick={(e) => { e.preventDefault(); alert("LaForant Community forums coming soon!"); }} 
            className="nav-link"
          >
            COMMUNITY
          </a>
        </nav>

        {/* Right Section - Auth Buttons / Profile */}
        <div className="header-auth">
          {currentUser ? (
            <div className="user-profile-menu">
              <span className="user-email-display">
                <span className="online-indicator"></span>
                {currentUser.email.split("@")[0].toUpperCase()}
              </span>
              <button 
                onClick={onLogout} 
                className="tactical-btn tactical-btn-accent logout-btn"
                style={{ padding: "6px 14px", fontSize: "0.75rem" }}
              >
                LOGOUT
              </button>
            </div>
          ) : (
            <>
              <button 
                onClick={() => onOpenAuth("login")} 
                className="tactical-btn login-btn"
                style={{ border: "none", color: "var(--text-mid)" }}
              >
                LOG IN
              </button>
              <button 
                onClick={() => onOpenAuth("register")} 
                className="tactical-btn tactical-btn-filled register-nav-btn"
                style={{ padding: "8px 20px", fontSize: "0.75rem" }}
              >
                REGISTER NOW
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-burger-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer glass-panel animate-fade-in">
          <a href="#home" onClick={(e) => handleNavClick(e, "home")} className="mobile-nav-link">
            HOME
          </a>
          <a href="#agents" onClick={(e) => handleNavClick(e, "agents")} className="mobile-nav-link">
            AGENTS
          </a>
          <a href="#maps" onClick={(e) => handleNavClick(e, "maps")} className="mobile-nav-link">
            MAPS
          </a>
          <a href="#system" onClick={(e) => handleNavClick(e, "system")} className="mobile-nav-link">
            SYSTEM
          </a>
          <a href="#news" onClick={(e) => handleNavClick(e, "news")} className="mobile-nav-link">
            NEWS
          </a>
          <div className="mobile-drawer-divider"></div>
          {currentUser ? (
            <div className="mobile-drawer-user">
              <p className="user-email-display">
                <span className="online-indicator"></span>
                {currentUser.email}
              </p>
              <button onClick={onLogout} className="tactical-btn tactical-btn-accent mobile-auth-btn">
                LOGOUT
              </button>
            </div>
          ) : (
            <div className="mobile-drawer-actions">
              <button onClick={() => { setMobileMenuOpen(false); onOpenAuth("login"); }} className="tactical-btn mobile-auth-btn">
                LOG IN
              </button>
              <button onClick={() => { setMobileMenuOpen(false); onOpenAuth("register"); }} className="tactical-btn tactical-btn-filled mobile-auth-btn">
                REGISTER NOW
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
