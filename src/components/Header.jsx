import { useEffect, useState } from "react";

import "./Header.css";

import profileImage from "../assets/profile.png";
import logoImage from "../assets/logo.png";

function Header({
  name,
  role,
  introduction,
  github,
  linkedin,
  cv,
}) {
  const [navTheme, setNavTheme] = useState("dark");

  useEffect(() => {
    const sections = document.querySelectorAll(
      "[data-nav-theme]"
    );

    const updateTheme = () => {
      const navPosition = 90;

      let currentTheme = "dark";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (
          rect.top <= navPosition &&
          rect.bottom > navPosition
        ) {
          currentTheme =
            section.dataset.navTheme || "dark";
        }
      });

      setNavTheme(currentTheme);
    };

    updateTheme();

    window.addEventListener("scroll", updateTheme, {
      passive: true,
    });

    window.addEventListener("resize", updateTheme);

    return () => {
      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("resize", updateTheme);
    };
  }, []);

  return (
    <header
      className="site-header"
      id="top"
      data-nav-theme="dark"
    >
      <div className="header-shell">

        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav
          className={`top-nav nav-${navTheme}`}
          aria-label="Main navigation"
        >
          <a
            href="#top"
            className="brand"
            aria-label={`${name} home`}
          >
            <span className="brand-badge">
              <img
                src={logoImage}
                alt={`${name} logo`}
                className="brand-logo"
              />
            </span>

            <span className="brand-name">
              {name}
            </span>
          </a>

          <div className="header-nav-links">

            <a href="#about">
              About
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#credentials">
              Credentials
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>
        </nav>

        {/* =================================================
            HERO
        ================================================= */}

        <div className="hero-layout">

          {/* LEFT SIDE */}

          <div className="hero-copy">

            <p className="hero-eyebrow">
              Portfolio · 2026
            </p>

            <h1 className="hero-heading">
              Hi, I&apos;m
              <span> {name}.</span>
            </h1>

            <p className="hero-position">
              {role}
            </p>

            <p className="hero-intro">
              {introduction}
            </p>

            {/* HERO ACTIONS */}

            <div className="hero-actions">

              <a
                className="hero-button hero-button-primary"
                href="#projects"
              >
                View my work
                <span>↓</span>
              </a>

              <a
                className="hero-button hero-button-secondary"
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
                <span>↗</span>
              </a>

              <a
                className="hero-button hero-button-secondary"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <span>↗</span>
              </a>

              <a
                className="hero-button hero-button-secondary"
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <span>↗</span>
              </a>

            </div>

            {/* =================================================
                HERO META
            ================================================= */}

            <div className="hero-meta">

              <div className="hero-meta-item">
                <span className="hero-meta-label">
                  Focus
                </span>

                <span className="hero-meta-value">
                  Web · Data · IT
                </span>
              </div>

              <div className="hero-meta-item">
                <span className="hero-meta-label">
                  Status
                </span>

                <span className="available-text">
                  <i />
                  Open to internships
                </span>
              </div>

            </div>

          </div>

          {/* =================================================
              PROFILE IMAGE
          ================================================= */}

          <div className="hero-visual">

            <div className="hero-photo-background" />

            <div className="hero-image-frame">

              <img
                src={profileImage}
                alt={`${name}`}
                className="hero-profile-image"
              />

              <div className="hero-image-number">
                01
              </div>

            </div>

            <div className="hero-photo-caption">

              <span>
                Computer Science
              </span>

              <span>
                Philippines
              </span>

            </div>

          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;