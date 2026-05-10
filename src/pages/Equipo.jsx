import { useState, useLayoutEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

const teamMembers = [
  { name: "Julio Coco", img: "/equipo/julio-coco.JPG" },
  { name: "Mariano Ator", img: "/equipo/mariano-ator.jpeg" },
  { name: "Nico Pereira", img: "/equipo/nico-pereira.jpeg" },
  { name: "Pablo Castillo", img: "/equipo/pablo-castillo.jpeg" },
  { name: "Romina, Roger e Iván", img: "/equipo/romina-roger-ivan.jpeg" },
  { name: "Roxana Arizzi", img: "/equipo/roxana-arizzi.jpeg" },
  { name: "Seba, Fede y Gise", img: "/equipo/seba-fede-gise.jpg" },
  { name: "Juan y Ale", img: "/equipo/juan-y-ale.jpeg" },
];

const Equipo = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", update);
    update();
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="w-full min-h-screen">

      <div
        style={{
          background: "linear-gradient(135deg, #C4D8F0 0%, #a8c8ec 100%)",
          padding: isMobile ? "48px 24px" : "80px 74px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(0, 84, 190, 0.08)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-40px",
          right: "200px",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "rgba(0, 84, 190, 0.05)",
          pointerEvents: "none",
        }} />

        <h2 style={{
          fontSize: "clamp(32px, 5vw, 48px)",
          fontWeight: "800",
          color: "#0054BE",
          marginBottom: "24px",
          letterSpacing: "-0.5px",
        }}>
          {t("team_title")}
        </h2>
        <p style={{
          fontSize: "clamp(15px, 2vw, 20px)",
          color: "#3d5a80",
          maxWidth: "720px",
          lineHeight: "1.8",
          fontStyle: "italic",
        }}>
          {t("team_intro")}
        </p>
      </div>

      <div
        style={{
          background: "#EEF5FF",
          padding: isMobile ? "40px 20px" : "72px 74px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "28px" : "40px",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="team-card"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0, 84, 190, 0.12)",
                position: "relative",
                cursor: "default",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0, 84, 190, 0.2)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 84, 190, 0.12)";
              }}
            >
              <img
                src={member.img}
                alt={member.name}
                style={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "linear-gradient(to top, rgba(0,30,80,0.82) 0%, rgba(0,30,80,0.0) 100%)",
                padding: "40px 20px 20px",
              }}>
                <p style={{
                  color: "#ffffff",
                  fontSize: "clamp(15px, 2vw, 19px)",
                  fontWeight: "700",
                  textAlign: "center",
                  letterSpacing: "0.3px",
                  textShadow: "0 1px 4px rgba(0,0,0,0.4)",
                }}>
                  {member.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: "72px",
          textAlign: "center",
        }}>
          <p style={{
            fontSize: "clamp(18px, 2.5vw, 26px)",
            fontWeight: "700",
            color: "#0054BE",
            fontStyle: "italic",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}>
            {t("team_outro")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Equipo;
