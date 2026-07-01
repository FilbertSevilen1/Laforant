"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function AgentSelector() {
  const agentsData = [
    {
      id: "mcarthur",
      name: "TANK MAN",
      fullName: "General McArthur",
      type: "Smoker",
      age: 55,
      nationality: "American",
      birthDate: "5 May 1965",
      avatar: "/images/tachanka.png",
      fullBody: "/images/mcarthur.png",
      description: "A battle-hardened tactician who dominates the battlefield using smoke screen bombardments and heavy defensive structures, ensuring his squad always has the cover they need.",
      stats: {
        control: 5,
        offense: 3,
        defense: 5,
        difficulty: 2,
      },
      abilities: [
        { key: "Q", name: "SMOKE GRENADE", desc: "Launches a heavy canister that explodes into a dense tactical smoke screen blocking all vision." },
        { key: "E", name: "FLAME BARRAGE", desc: "Calls in a mortar strike that blankets an area in fire, burning enemies and denying entry." },
        { key: "C", name: "IRON BARRIER", desc: "Deploys a portable bulletproof shield that absorbs incoming gunfire and provides cover." },
        { key: "X", name: "TACTICAL NUKE", desc: "Ultimate: Unlocks a high-impact orbital strike that decimates all targets in a large radius." },
      ]
    },
    {
      id: "taiga",
      name: "TAIGA",
      fullName: "Song Min Hee",
      type: "Agressor",
      age: 19,
      nationality: "Korean",
      birthDate: "19 February 2002",
      avatar: "/images/taiga.png",
      fullBody: "/images/taigafullbody.png",
      description: "Codenamed Ms. Blizzard, Taiga is a cryo-kinetic agressor who breaches defenses with icy surges, freezing and slowing down anyone daring to stand in her way.",
      stats: {
        control: 3,
        offense: 5,
        defense: 2,
        difficulty: 3,
      },
      abilities: [
        { key: "Q", name: "FROST BITE", desc: "Fires a wave of ice that slows down and damages all enemies in its direct path." },
        { key: "E", name: "BLIZZARD DASH", desc: "Teleports instantly forward, leaving behind a freezing trail of ice that slows enemies." },
        { key: "C", name: "ICE WALL", desc: "Creates a solid wall of structural ice that blocks vision and must be shot to break." },
        { key: "X", name: "GLACIAL FREEZE", desc: "Ultimate: Freezes all enemies in a targeted zone for 3 seconds, rendering them defenseless." },
      ]
    },
    {
      id: "akira",
      name: "AKIRA",
      fullName: "Akira Nakai",
      type: "Controller",
      age: 22,
      nationality: "Japanese",
      birthDate: "7 March 1999",
      avatar: "/images/yoru.png",
      fullBody: "/images/akira.png",
      description: "Known as Mr. Fast, Akira Nakai uses space-warping technology and sonic scanning arrays to scout positions, confuse enemies, and relocate in the blink of an eye.",
      stats: {
        control: 4,
        offense: 4,
        defense: 3,
        difficulty: 5,
      },
      abilities: [
        { key: "Q", name: "SONIC PULSE", desc: "Emits a radar pulse that highlights enemy positions through walls for a short duration." },
        { key: "E", name: "SPEED BURST", desc: "Temporarily increases movement speed by 50%, alongside reload and weapon-draw speeds." },
        { key: "C", name: "DECOY WARP", desc: "Spawns a running holographic clone that mimics footstep sounds to draw enemy fires." },
        { key: "X", name: "QUANTUM DASH", desc: "Ultimate: Warps behind the enemy lines instantly while remaining fully invulnerable." },
      ]
    }
  ];

  const [selectedAgent, setSelectedAgent] = useState(agentsData[0]);
  const [filterClass, setFilterClass] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAbility, setSelectedAbility] = useState(agentsData[0].abilities[0]);
  const [animatePortrait, setAnimatePortrait] = useState(true);

  // Set the default ability when agent changes
  useEffect(() => {
    setSelectedAbility(selectedAgent.abilities[0]);
    setAnimatePortrait(false);
    const timer = setTimeout(() => setAnimatePortrait(true), 50);
    return () => clearTimeout(timer);
  }, [selectedAgent]);

  // Filtering Logic
  const filteredAgents = agentsData.filter(agent => {
    const matchesClass = filterClass === "All" || agent.type.toLowerCase() === filterClass.toLowerCase();
    const matchesSearch = agent.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          agent.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          agent.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesClass && matchesSearch;
  });

  return (
    <section id="agents" className="agents-section">
      <div className="section-header-centered">
        <span className="section-tag">ROSTER ARCHIVES</span>
        <h2 className="section-title">CHOOSE YOUR AGENT</h2>
        <div className="section-divider"></div>
      </div>

      {/* Dota 2 Filter Controls */}
      <div className="dota-filter-bar glass-panel">
        <div className="filter-group">
          <span className="filter-label">ROLE FILTER:</span>
          {["All", "Smoker", "Agressor", "Controller"].map((role) => (
            <button
              key={role}
              onClick={() => setFilterClass(role)}
              className={`filter-btn ${filterClass === role ? "active" : ""}`}
            >
              {role === "All" ? "ALL ROLES" : role.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="search-group">
          <input
            type="text"
            placeholder="SEARCH AGENT..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="agent-search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      {/* Main Agent Selector Dota 2 Layout */}
      <div className="dota-selector-grid">
        {/* Left Side: Selected Agent Stats & Details */}
        <div className="agent-details-pane glass-panel hud-box reveal reveal-slide-left">
          <div className="agent-badge">
            <span className="agent-class">{selectedAgent.type.toUpperCase()}</span>
            <span className="agent-country">{selectedAgent.nationality.toUpperCase()}</span>
          </div>

          <h2 className="agent-title-name">{selectedAgent.name}</h2>
          <p className="agent-fullname-label">Real Name: {selectedAgent.fullName}</p>
          
          <div className="tactical-line-small"></div>
          
          <p className="agent-bio">{selectedAgent.description}</p>

          {/* Stats Radar simulated */}
          <div className="agent-stats-container">
            <h4 className="stats-header">TACTICAL RATINGS</h4>
            {Object.entries(selectedAgent.stats).map(([stat, rating]) => (
              <div key={stat} className="stat-rating-bar">
                <span className="stat-name">{stat.toUpperCase()}</span>
                <div className="stat-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span 
                      key={i} 
                      className={`star ${i < rating ? "filled" : ""}`}
                    >
                      ■
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Abilities Tabs */}
          <div className="agent-abilities-container">
            <h4 className="stats-header">TACTICAL ABILITIES</h4>
            <div className="abilities-tabs-row">
              {selectedAgent.abilities.map((ability) => (
                <button
                  key={ability.key}
                  onClick={() => setSelectedAbility(ability)}
                  className={`ability-tab-btn ${selectedAbility.key === ability.key ? "active" : ""}`}
                >
                  <span className="ability-key">{ability.key}</span>
                </button>
              ))}
            </div>
            
            <div className="selected-ability-details animate-fade-in" key={selectedAbility.key}>
              <h5 className="ability-title">{selectedAbility.name}</h5>
              <p className="ability-desc">{selectedAbility.desc}</p>
            </div>
          </div>
          <div className="hud-corner-br"></div>
        </div>

        {/* Center: Selected Agent Full Body Render */}
        <div className="agent-portrait-pane">
          <div className="portrait-glow-circle"></div>
          <div className="grid-lines-overlay"></div>
          <div className="portrait-scanline"></div>
          {selectedAgent.fullBody && (
            <div className={`portrait-wrapper ${animatePortrait ? "slide-in-active" : ""}`}>
              <Image
                src={selectedAgent.fullBody}
                alt={`${selectedAgent.name} Portrait`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="agent-fullbody-img"
                priority
              />
            </div>
          )}
          
          {/* Tech HUD overlay labels */}
          <div className="portrait-hud-coords">
            <span>D: 10v10_SQUAD</span>
            <span>A: {selectedAgent.age} Y/O</span>
            <span>DOB: {selectedAgent.birthDate}</span>
          </div>
        </div>

        {/* Right Side: Grid Selector */}
        <div className="agent-selection-grid-pane glass-panel reveal reveal-slide-right">
          <h4 className="selector-title">ACTIVE ROSTER ({filteredAgents.length})</h4>
          <div className="tactical-line-small"></div>
          
          <div className="agent-avatars-grid">
            {filteredAgents.map((agent) => (
              <div
                key={agent.id}
                onClick={() => setSelectedAgent(agent)}
                className={`agent-grid-card ${selectedAgent.id === agent.id ? "active" : ""}`}
              >
                <div className="agent-card-image-wrapper">
                  <Image
                    src={agent.avatar}
                    alt={agent.name}
                    fill
                    sizes="100px"
                    className="agent-avatar-img"
                  />
                  <div className="agent-card-overlay-glow"></div>
                </div>
                <div className="agent-card-name-bar">
                  <span className="card-name-text">{agent.name}</span>
                  <span className="card-role-text">{agent.type}</span>
                </div>
              </div>
            ))}
            
            {filteredAgents.length === 0 && (
              <div className="no-agents-found">
                <p>NO AGENTS MATCH SEARCH CRITERIA</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
