"use client";

import React from "react";

export default function Hero({ currentUser, onOpenAuth }) {
  const handleAction = () => {
    if (currentUser) {
      alert("Launching LaForant Game Client... (Simulated)");
    } else {
      onOpenAuth("register");
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background-overlay"></div>
      
      {/* HUD Info Labels */}
      <div className="hud-corner-info top-left-hud hud-flicker">
        <span className="hud-label">SYSTEM STATUS:</span>
        <span className="hud-value status-active">ONLINE</span>
        <span className="hud-label">PING:</span>
        <span className="hud-value">22ms</span>
      </div>

      <div className="hud-corner-info top-right-hud hud-flicker">
        <span className="hud-label">LOCATION:</span>
        <span className="hud-value">NODE-5A_CA</span>
        <span className="hud-label">VERSION:</span>
        <span className="hud-value">v1.2.0</span>
      </div>
      
      <div className="hero-content animate-slide-up">
        {/* Decorative Grid Line */}
        <div className="tactical-line"></div>
        
        <span className="hero-subtitle-top">THE NEXT GEN TACTICAL SHOOTER</span>
        <h1 className="hero-title">LAFORANT</h1>
        
        <p className="hero-slogan">
          A 10 versus 10 character-based first person shooter. Assemble your squad, select your agent, and control the battlefield.
        </p>

        {/* Play Stats */}
        <div className="hero-stats-row">
          <div className="hero-stat-box glass-panel">
            <span className="stat-number">42,912</span>
            <span className="stat-label">PLAYERS ACTIVE</span>
          </div>
          <div className="hero-stat-box glass-panel">
            <span className="stat-number">10v10</span>
            <span className="stat-label">CHAOTIC MATCHES</span>
          </div>
        </div>

        <div className="hero-cta-container">
          <button 
            onClick={handleAction} 
            className="tactical-btn tactical-btn-filled hero-play-btn"
          >
            {currentUser ? "LAUNCH GAME" : "REGISTER TO PLAY"}
          </button>
          
          <button 
            onClick={() => {
              const el = document.getElementById("agents");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="tactical-btn hero-learn-btn"
          >
            VIEW AGENTS
          </button>
        </div>
      </div>

      {/* Decorative vertical line and coordinate widgets */}
      <div className="hero-side-coord left-coord hud-flicker">
        <span>LAT: 37.7749° N</span>
        <span>/</span>
        <span>LNG: 122.4194° W</span>
      </div>
      <div className="hero-side-coord right-coord hud-flicker">
        <span>FPS: 144</span>
        <span>/</span>
        <span>TICKRATE: 128HZ</span>
      </div>

      <div className="hero-bottom-fade"></div>
    </section>
  );
}
