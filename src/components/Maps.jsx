"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Maps() {
  const mapsData = [
    {
      id: "desert",
      name: "DESERT OASES",
      originalName: "Desert",
      image: "/images/desert.jpg",
      description: "A balanced map featuring a sun-drenched Middle Eastern town with open sightlines and central alleys. Perfect for dual snipers and tactical flank executions.",
      coords: "N 29.3117° / E 47.9774°",
      stats: {
        bombsites: "2 (A & B)",
        size: "MEDIUM",
        engagement: "LONG RANGE",
      }
    },
    {
      id: "chernobyl",
      name: "REACTOR ZONE",
      originalName: "Chernobyl",
      image: "/images/chernobyl.jpg",
      description: "A gloomy radioactive containment zone enclosed by decaying concrete towers. Multi-level elevation and visual-blocking foliage make for claustrophobic combat.",
      coords: "N 51.2741° / E 30.2241°",
      stats: {
        bombsites: "2 (A & B)",
        size: "LARGE",
        engagement: "CLOSE QUARTERS",
      }
    },
    {
      id: "newyork",
      name: "FALLEN EMPIRE",
      originalName: "New York",
      image: "/images/new york.jpg",
      description: "A decayed Manhattan skyline overtaken by dense nature after centuries of desertion following nuclear fallout. Features subterranean subway lanes and skybridge sniping posts.",
      coords: "N 40.7128° / W 74.0060°",
      stats: {
        bombsites: "2 (A & B)",
        size: "EXTRA LARGE",
        engagement: "MIXED DISTANCE",
      }
    }
  ];

  const [activeMap, setActiveMap] = useState(mapsData[0]);

  return (
    <section id="maps" className="maps-section">
      <div className="section-header-centered">
        <span className="section-tag">TACTICAL MAPS</span>
        <h2 className="section-title">THE BATTLEFIELDS</h2>
        <div className="section-divider"></div>
      </div>

      <div className="maps-container reveal reveal-slide-up">
        {/* Left Side: Map Dossier Details */}
        <div className="map-info-panel glass-panel hud-box" key={activeMap.id}>
          <span className="map-coords-badge">{activeMap.coords}</span>
          
          <h2 className="map-headline">{activeMap.name}</h2>
          <span className="original-map-tag">codename: {activeMap.originalName}</span>
          
          <div className="tactical-line-small"></div>
          
          <p className="map-description">{activeMap.description}</p>
          
          {/* Map stats grid */}
          <div className="map-stats-table">
            <div className="map-stat-row">
              <span className="stat-label">OBJECTIVES:</span>
              <span className="stat-value">{activeMap.stats.bombsites}</span>
            </div>
            <div className="map-stat-row">
              <span className="stat-label">SCALE SIZE:</span>
              <span className="stat-value">{activeMap.stats.size}</span>
            </div>
            <div className="map-stat-row">
              <span className="stat-label">TYPICAL ENGAGEMENT:</span>
              <span className="stat-value">{activeMap.stats.engagement}</span>
            </div>
          </div>

          <div className="hud-corner-br"></div>
        </div>

        {/* Right Side: Map Media Display with Selectors Overlay */}
        <div className="map-media-display">
          <div className="map-image-wrapper">
            <Image
              src={activeMap.image}
              alt={`${activeMap.name} Battlefield`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="map-main-img animate-fade-in"
              key={activeMap.id}
            />
            <div className="map-dark-overlay"></div>
          </div>

          {/* Interactive tabs at the bottom of the map image */}
          <div className="map-selector-row">
            {mapsData.map((map) => (
              <button
                key={map.id}
                onClick={() => setActiveMap(map)}
                className={`map-selector-btn ${activeMap.id === map.id ? "active" : ""}`}
              >
                <span className="selector-btn-num">0{mapsData.indexOf(map) + 1}</span>
                <span className="selector-btn-name">{map.originalName.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
