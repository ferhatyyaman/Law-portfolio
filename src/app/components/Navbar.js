"use client";
import { useState } from "react";
import Link from "next/link"; // <-- Link import edildi
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo */}
        <h2 className="logo">
          <Link href="/">Hukuk Danışmanlık</Link> {/* <a> yerine <Link> */}
        </h2>

        {/* Menü ikonu (mobil için) */}
        <div
          className={`menu-toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Linkler */}
        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>Hakkımızda</a>
          </li>
          <li>
            <a href="#services" onClick={() => setIsOpen(false)}>Hizmetlerimiz</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>İletişim</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
