"use client";

import React from "react";

export default function SystemRequirements() {
  const specs = {
    minimum: [
      { label: "OS", value: "Windows 7 or Newer (64-Bit)" },
      { label: "Processor", value: "Dual Core Intel/AMD at 2.5 GHz" },
      { label: "Memory", value: "4 GB RAM" },
      { label: "Graphics", value: "NVIDIA GeForce GTX 780 Ti" },
      { label: "DirectX", value: "Version 11" },
      { label: "Network", value: "Broadband Internet Connection" },
      { label: "Storage", value: "10 GB available space" },
      { label: "Sound Card", value: "DirectX Compatible" }
    ],
    recommended: [
      { label: "OS", value: "Windows 10 / 11 (64-Bit)" },
      { label: "Processor", value: "Dual Core Intel/AMD at 3.0 GHz" },
      { label: "Memory", value: "8 GB RAM" },
      { label: "Graphics", value: "NVIDIA GeForce GT 1030 / AMD RX 550" },
      { label: "DirectX", value: "Version 11" },
      { label: "Network", value: "Broadband Internet Connection" },
      { label: "Storage", value: "10 GB available space" },
      { label: "Sound Card", value: "DirectX Compatible" }
    ]
  };

  return (
    <section id="system" className="system-section">
      <div className="section-header-centered">
        <span className="section-tag">HARDWARE ANALYSIS</span>
        <h2 className="section-title">SYSTEM REQUIREMENTS</h2>
        <div className="section-divider"></div>
      </div>

      <div className="system-grid-container">
        {/* Minimum Specs */}
        <div className="specs-card glass-panel hud-box reveal reveal-slide-left">
          <div className="specs-header-row">
            <h3 className="specs-card-title">MINIMUM RUNTIME</h3>
            <span className="performance-badge font-mono">[30 FPS TARGET]</span>
          </div>
          
          <div className="tactical-line-small"></div>
          
          <ul className="specs-list">
            {specs.minimum.map((spec, index) => (
              <li key={index} className="specs-item font-mono">
                <span className="spec-label">{spec.label}:</span>
                <span className="spec-value">{spec.value}</span>
              </li>
            ))}
          </ul>
          
          <div className="hud-corner-br"></div>
        </div>

        {/* Recommended Specs */}
        <div className="specs-card glass-panel hud-box specs-recommended reveal reveal-slide-right">
          <div className="specs-header-row">
            <h3 className="specs-card-title recommended-title">RECOMMENDED RUNTIME</h3>
            <span className="performance-badge recom font-mono">[144+ FPS TARGET]</span>
          </div>
          
          <div className="tactical-line-small"></div>
          
          <ul className="specs-list">
            {specs.recommended.map((spec, index) => (
              <li key={index} className="specs-item font-mono">
                <span className="spec-label">{spec.label}:</span>
                <span className="spec-value">{spec.value}</span>
              </li>
            ))}
          </ul>
          
          <div className="hud-corner-br"></div>
        </div>
      </div>
      
      {/* Decorative footer message */}
      <p className="system-disclaimer font-mono">
        * NOTE: A 64-bit operating system and processor is strictly required. Broadband internet is essential for multiplayer 10v10 matchmaking.
      </p>
    </section>
  );
}
