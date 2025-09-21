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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      <div className="slider-content">
        <h1>İstanbul&apos;un Hukuk Bürosu</h1>
        <p>Profesyonel hukuk ve danışmanlık hizmeti</p>
        <a href="#contact" className="slider-btn">İletişim</a>
      </div>
    </section>
  );
}
