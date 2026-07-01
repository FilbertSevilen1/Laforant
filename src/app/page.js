"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import News from "@/components/News";
import AgentSelector from "@/components/AgentSelector";
import Maps from "@/components/Maps";
import SystemRequirements from "@/components/SystemRequirements";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  const [authModal, setAuthModal] = useState(null); // 'login' | 'register' | null

  // Check local storage for dummy session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("laforant_user");
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Failed to parse user session", e);
      }
    }
  }, []);

  // Viewport Scroll Reveal system
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -80px 0px", // Trigger when elements scroll in
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      const revealElements = document.querySelectorAll(".reveal");
      revealElements.forEach((el) => observer.observe(el));
    }, 200);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem("laforant_user", JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("laforant_user");
    alert("Logged out successfully.");
  };

  return (
    <div className="app-layout">
      {/* Navigation Header */}
      <Header 
        currentUser={currentUser} 
        onLogout={handleLogout} 
        onOpenAuth={(mode) => setAuthModal(mode)}
      />

      {/* Main Sections */}
      <main className="main-content">
        <Hero 
          currentUser={currentUser} 
          onOpenAuth={(mode) => setAuthModal(mode)}
        />
        
        <News />
        
        <AgentSelector />
        
        <Maps />
        
        <SystemRequirements />
      </main>

      {/* Footer */}
      <Footer />

      {/* Auth Modal (Login / Register) */}
      {authModal && (
        <AuthModal 
          initialMode={authModal} 
          onClose={() => setAuthModal(null)} 
          onLoginSuccess={handleLogin}
        />
      )}
    </div>
  );
}
