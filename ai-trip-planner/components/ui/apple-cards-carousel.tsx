"use client";

import React from "react";

const data = [
  {
    category: "New York, USA",
    title: "Experience NYC – Times Square, Central Park & Broadway",
    src: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Tokyo, Japan",
    title: "Discover Tokyo – Shibuya, Temples & Cherry Blossoms",
    src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Rome, Italy",
    title: "Walk Through History – Colosseum, Vatican & Roman Forum",
    src: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Dubai, UAE",
    title: "Luxury & Adventure – Burj Khalifa, Desert Safari & More",
    src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Kerala, India",
    title: "God's Own Country – Backwaters, Beaches & Green Hills",
    src: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop",
  },
  {
    category: "Paris, France",
    title: "Explore the City of Lights – Eiffel Tower & Louvre",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
  },
];

type City = (typeof data)[number];

function CityCard({ city }: { city: City }) {
  return (
    <div className="city-card">
      {/* Image */}
      <img
        src={city.src}
        alt={city.category}
        className="city-image"
      />

      {/* Dark gradient */}
      <div className="city-overlay" />

      {/* Content */}
      <div className="city-content">
        <div className="city-category">
          {city.category}
        </div>

        <h3 className="city-title">
          {city.title}
        </h3>
      </div>
    </div>
  );
}

export function PopularCityList() {
  return (
    <section className="popular-section">

      {/* =========================
          HEADER
      ========================= */}

      <div className="popular-header">

        <div className="popular-label">
          Popular Destinations
        </div>

        <h2>
          Explore popular cities
        </h2>

        <p>
          Get inspired by amazing destinations around the world and discover
          your next adventure with AI Trip Planner.
        </p>

      </div>


      {/* =========================
          CENTERED CAROUSEL
      ========================= */}

      <div className="carousel-wrapper">

        <div className="carousel-window">

          {/* Left fade */}
          <div className="fade-left" />

          {/* Right fade */}
          <div className="fade-right" />

          <div className="carousel-track">

            {/* FIRST SET */}

            <div className="carousel-group">
              {data.map((city, index) => (
                <CityCard
                  key={`first-${index}`}
                  city={city}
                />
              ))}
            </div>


            {/* DUPLICATE SET */}

            <div className="carousel-group">
              {data.map((city, index) => (
                <CityCard
                  key={`second-${index}`}
                  city={city}
                />
              ))}
            </div>

          </div>

        </div>

      </div>


      {/* =========================
          CSS
      ========================= */}

      <style jsx>{`

        /* =====================================
           MAIN SECTION
        ===================================== */

        .popular-section {
          width: 100%;
          padding: 70px 0 80px;
          background: #ffffff;
          overflow: hidden;
        }


        /* =====================================
           HEADER
        ===================================== */

        .popular-header {
          width: min(900px, calc(100% - 40px));
          margin: 0 auto 42px;
        }

        .popular-label {
          color: #2563eb;
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .popular-header h2 {
          margin: 0;
          color: #111111;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -1.5px;
        }

        .popular-header p {
          margin: 14px 0 0;
          max-width: 760px;
          color: #666666;
          font-size: 17px;
          line-height: 1.6;
        }


        /* =====================================
           CENTER CAROUSEL
        ===================================== */

        .carousel-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .carousel-window {
          position: relative;

          /*
            IMPORTANT:
            This controls how wide the carousel is.
          */

          width: min(1180px, calc(100% - 40px));

          overflow: hidden;

          border-radius: 24px;
        }


        /* =====================================
           MOVING TRACK
        ===================================== */

        .carousel-track {
          display: flex;
          width: max-content;

          /*
            Small gap between the two groups.
          */

          gap: 14px;

          animation: infinite-scroll 20s linear infinite;

          will-change: transform;
        }


        /*
          Each group contains one complete
          set of cards.
        */

        .carousel-group {
          display: flex;
          gap: 14px;
          flex-shrink: 0;
        }


        /* =====================================
           CARD
        ===================================== */

        .city-card {
          position: relative;

          /*
            THIS is the card size.
          */

          width: 220px;
          height: 310px;

          flex: 0 0 220px;

          border-radius: 18px;

          overflow: hidden;

          background: #eeeeee;

          box-shadow:
            0 8px 25px rgba(0, 0, 0, 0.10);

          cursor: pointer;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }


        .city-card:hover {
          transform: translateY(-6px);

          box-shadow:
            0 16px 35px rgba(0, 0, 0, 0.18);
        }


        /* =====================================
           IMAGE
        ===================================== */

        .city-image {
          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 100%;

          /*
            VERY IMPORTANT
            Prevents giant images.
          */

          object-fit: cover;

          display: block;

          transition:
            transform 0.5s ease;
        }


        .city-card:hover .city-image {
          transform: scale(1.06);
        }


        /* =====================================
           DARK GRADIENT
        ===================================== */

        .city-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.88) 0%,
              rgba(0, 0, 0, 0.35) 48%,
              rgba(0, 0, 0, 0.05) 75%,
              rgba(0, 0, 0, 0) 100%
            );

          pointer-events: none;
        }


        /* =====================================
           TEXT
        ===================================== */

        .city-content {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          padding: 18px;

          color: white;

          z-index: 2;
        }


        .city-category {
          font-size: 13px;

          font-weight: 700;

          margin-bottom: 7px;

          color: rgba(255, 255, 255, 0.95);
        }


        .city-title {
          margin: 0;

          font-size: 18px;

          line-height: 1.25;

          font-weight: 800;

          color: white;
        }


        /* =====================================
           LEFT / RIGHT SOFT FADE
        ===================================== */

        .fade-left {
          position: absolute;

          left: 0;
          top: 0;
          bottom: 0;

          width: 55px;

          z-index: 10;

          pointer-events: none;

          background:
            linear-gradient(
              to right,
              white,
              rgba(255,255,255,0)
            );
        }


        .fade-right {
          position: absolute;

          right: 0;
          top: 0;
          bottom: 0;

          width: 55px;

          z-index: 10;

          pointer-events: none;

          background:
            linear-gradient(
              to left,
              white,
              rgba(255,255,255,0)
            );
        }


        /* =====================================
           INFINITE AUTO SCROLL
        ===================================== */

        @keyframes infinite-scroll {

          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(
              calc(-50% - 7px)
            );
          }

        }


        /* =====================================
           STOP WHEN HOVERED
        ===================================== */

        .carousel-window:hover .carousel-track {
          animation-play-state: paused;
        }


        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 900px) {

          .popular-section {
            padding-top: 55px;
          }

          .carousel-window {
            width: calc(100% - 30px);
          }

          .city-card {
            width: 200px;
            height: 285px;

            flex-basis: 200px;
          }

          .city-title {
            font-size: 16px;
          }

          .carousel-track {
            animation-duration: 18s;
          }

        }


        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 600px) {

          .popular-section {
            padding: 45px 0 60px;
          }

          .popular-header {
            width: calc(100% - 30px);
            margin-bottom: 30px;
          }

          .popular-header h2 {
            font-size: 34px;
          }

          .popular-header p {
            font-size: 15px;
          }

          .carousel-window {
            width: calc(100% - 24px);
          }

          .city-card {
            width: 180px;
            height: 260px;

            flex-basis: 180px;

            border-radius: 16px;
          }

          .city-content {
            padding: 15px;
          }

          .city-category {
            font-size: 12px;
          }

          .city-title {
            font-size: 15px;
          }

          .carousel-group {
            gap: 12px;
          }

          .carousel-track {
            gap: 12px;
            animation-duration: 16s;
          }

        }


        /* =====================================
           REDUCED MOTION
        ===================================== */

        @media (prefers-reduced-motion: reduce) {

          .carousel-track {
            animation: none;
          }

        }

      `}</style>

    </section>
  );
}

export default PopularCityList;