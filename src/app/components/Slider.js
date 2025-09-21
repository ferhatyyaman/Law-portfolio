"use client";
import { useEffect, useState } from "react";
import "./slider.css";

export default function Slider() {
  const images = [
    "/hukuk1.jpg",
    "/hukuk2.jpg",
    "/hukuk3.jpg"
  ];

  const [current, setCurrent] = useState(0);

  // Otomatik geçiş
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 5 saniyede bir
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="slider">
      {/* Arka plan görselleri */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* İçerik */}
      <div className="slider-content">
        <h1>İstanbul'un Hukuk Bürosu</h1>
        <p>Profesyonel hukuk ve danışmanlık hizmeti</p>
        <a href="#contact" className="slider-btn">İletişim</a>
      </div>
    </section>
  );
}
