"use client";

import React, { useState } from "react";

export default function AuthModal({ initialMode, onClose, onLoginSuccess }) {
  const [mode, setMode] = useState(initialMode || "login"); // 'login' | 'register'
  
  // Registration States
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regDob, setRegDob] = useState("");
  const [regNationality, setRegNationality] = useState("none");
  const [regAgree, setRegAgree] = useState(false);
  
  // Login States
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Error States
  const [errors, setErrors] = useState({});

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate Email
    if (regEmail === "") {
      newErrors.email = "Email can't be empty!";
    } else if (
      !regEmail.endsWith(".com") ||
      !regEmail.includes("@") ||
      regEmail.indexOf("@") !== regEmail.lastIndexOf("@") ||
      regEmail.indexOf("@") + 1 === regEmail.lastIndexOf(".com")
    ) {
      newErrors.email = "Wrong Email Format!";
    }

    // Validate Password
    if (regPassword === "") {
      newErrors.password = "Password can't be empty!";
    } else if (regPassword.length < 4 || regPassword.length > 12) {
      newErrors.password = "Password must be between 4-12 Characters!";
    }

    // Validate DOB
    if (regDob === "") {
      newErrors.dob = "Date of Birth can't be empty!";
    }

    // Validate Nationality
    if (regNationality === "none") {
      newErrors.nationality = "Please Select Your Nationality";
    }

    // Validate Agree Checkbox
    if (!regAgree) {
      newErrors.agree = "You must agree to the Terms and Conditions";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success
    setErrors({});
    alert("Registration Success!");
    onLoginSuccess({ email: regEmail });
    onClose();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (loginEmail === "") {
      newErrors.email = "Email can't be empty!";
    } else if (!loginEmail.includes("@") || !loginEmail.endsWith(".com")) {
      newErrors.email = "Invalid email format!";
    }

    if (loginPassword === "") {
      newErrors.password = "Password can't be empty!";
    } else if (loginPassword.length < 4) {
      newErrors.password = "Password must be at least 4 characters!";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success
    setErrors({});
    alert("Login Success!");
    onLoginSuccess({ email: loginEmail });
    onClose();
  };

  return (
    <div className="auth-overlay animate-fade-in" onClick={onClose}>
      <div 
        className="auth-modal glass-panel hud-box animate-slide-up" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="auth-close-btn" onClick={onClose}>
          ✕
        </button>

        {/* HUD coordinates decorative */}
        <div className="auth-hud-tag font-mono">SECURE_AUTH_NODE // PWD_VERIFIED</div>

        {/* Tabs Row */}
        <div className="auth-tabs">
          <button 
            className={`auth-tab ${mode === "login" ? "active" : ""}`}
            onClick={() => { setMode("login"); setErrors({}); }}
          >
            LOG IN
          </button>
          <button 
            className={`auth-tab ${mode === "register" ? "active" : ""}`}
            onClick={() => { setMode("register"); setErrors({}); }}
          >
            REGISTER
          </button>
        </div>

        {mode === "login" ? (
          /* LOGIN FORM */
          <form onSubmit={handleLoginSubmit} className="auth-form">
            <h3 className="auth-title">ACCESS ACCOUNT</h3>
            <p className="auth-subtitle">Enter your credentials to connect to the tactical grid.</p>
            
            <div className="input-group">
              <input 
                type="text" 
                placeholder="EMAIL ADDRESS" 
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className={`auth-input ${errors.email ? "error" : ""}`}
              />
              {errors.email && <span className="error-text font-mono">{errors.email}</span>}
            </div>

            <div className="input-group">
              <input 
                type="password" 
                placeholder="PASSWORD" 
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className={`auth-input ${errors.password ? "error" : ""}`}
              />
              {errors.password && <span className="error-text font-mono">{errors.password}</span>}
            </div>

            <button type="submit" className="tactical-btn tactical-btn-filled auth-submit-btn">
              LOG IN
            </button>
          </form>
        ) : (
          /* REGISTER FORM */
          <form onSubmit={handleRegisterSubmit} className="auth-form">
            <h3 className="auth-title">CREATE DOSSIER</h3>
            <p className="auth-subtitle">Register your combat statistics and sign the deployment forms.</p>
            
            <div className="input-group">
              <input 
                type="text" 
                placeholder="EMAIL ADDRESS" 
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
                className={`auth-input ${errors.email ? "error" : ""}`}
              />
              {errors.email && <span className="error-text font-mono">{errors.email}</span>}
            </div>

            <div className="input-group">
              <input 
                type="password" 
                placeholder="PASSWORD (4-12 CHARACTERS)" 
                value={regPassword}
                onChange={(e) => setRegPassword(e.target.value)}
                className={`auth-input ${errors.password ? "error" : ""}`}
              />
              {errors.password && <span className="error-text font-mono">{errors.password}</span>}
            </div>

            <div className="input-group">
              <label className="input-label font-mono">DATE OF BIRTH</label>
              <input 
                type="date" 
                value={regDob}
                onChange={(e) => setRegDob(e.target.value)}
                className={`auth-input ${errors.dob ? "error" : ""}`}
              />
              {errors.dob && <span className="error-text font-mono">{errors.dob}</span>}
            </div>

            <div className="input-group">
              <select 
                value={regNationality}
                onChange={(e) => setRegNationality(e.target.value)}
                className={`auth-input ${errors.nationality ? "error" : ""}`}
              >
                <option value="none">SELECT NATIONALITY</option>
                <option value="USA">United States</option>
                <option value="China">China</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="UK">United Kingdom</option>
                <option value="Japan">Japan</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other</option>
              </select>
              {errors.nationality && <span className="error-text font-mono">{errors.nationality}</span>}
            </div>

            <div className="input-checkbox-group">
              <label className="checkbox-label">
                <input 
                  type="checkbox" 
                  checked={regAgree}
                  onChange={(e) => setRegAgree(e.target.checked)}
                  className="auth-checkbox"
                />
                <span className="checkbox-text font-mono">
                  I agree to the Terms and Conditions and local combat rules.
                </span>
              </label>
              {errors.agree && <span className="error-text font-mono">{errors.agree}</span>}
            </div>

            <button type="submit" className="tactical-btn tactical-btn-filled auth-submit-btn">
              CREATE DOSSIER
            </button>
          </form>
        )}
        <div className="hud-corner-br"></div>
      </div>
    </div>
  );
}
