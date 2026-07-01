"use client";

import React from "react";
import Image from "next/image";

export default function News() {
  const newsItems = [
    {
      id: 1,
      tag: "MAP EXPANSION",
      title: "NUCLEAR FALLOUT IN CHERNOBYL",
      description: "Explore the new radioactive wasteland combat zone. Tight corners, toxic zones, and multi-level vertical gameplay await in our latest layout.",
      image: "/images/chernobyl.jpg",
      date: "JUNE 25, 2026",
    },
    {
      id: 2,
      tag: "ESPORTS",
      title: "WORLD CHAMPIONSHIP ANNOUNCEMENT",
      description: "The global elite gather to compete for a $1,000,000 prize pool. Catch the livestream coverage, exclusive drops, and tactical breakdowns.",
      image: "/images/championship.jpg",
      date: "MAY 14, 2026",
    },
    {
      id: 3,
      tag: "GAMEPLAY",
      title: "OVERWATCH COMBAT SIMULATOR",
      description: "An intensive preview of team coordination mechanics, special abilities synergy, and split-second tactical shootouts.",
      image: "/images/overwatch.jpg",
      date: "APRIL 02, 2026",
    },
  ];

  return (
    <section id="news" className="news-section">
      <div className="section-header-centered">
        <span className="section-tag">INTEL BRIEFING</span>
        <h2 className="section-title">LATEST NEWS</h2>
        <div className="section-divider"></div>
      </div>

      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div 
            key={item.id} 
            className="news-card glass-panel hud-box reveal reveal-slide-up"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="news-image-container">
              <Image 
                src={item.image} 
                alt={item.title} 
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="news-image"
              />
              <div className="news-tag-badge">{item.tag}</div>
            </div>
            
            <div className="news-info">
              <span className="news-date">{item.date}</span>
              <h3 className="news-card-title">{item.title}</h3>
              <p className="news-card-desc">{item.description}</p>
              
              <div className="news-readmore">
                <span>INTEL BRIEFING</span>
                <span className="arrow-right">→</span>
              </div>
            </div>
            <div className="hud-corner-br"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
