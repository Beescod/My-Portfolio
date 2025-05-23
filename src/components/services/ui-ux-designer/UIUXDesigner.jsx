import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar";
import FigmaEmbed from "./FigmaEmbed";

const figmaProjects = [
  {
    name: "Project 1",
    embedCode: `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="550" src="https://embed.figma.com/design/audQ58bTNqq81k0KY8FFpP/CLass?node-id=0-1&embed-host=share" allowfullscreen></iframe>`
  },
  {
    name: "Project 2",
    embedCode: `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="550" src="https://embed.figma.com/design/nWAAT5m494SIvY7jvftdG8/Ghost?node-id=0-1&embed-host=share" allowfullscreen></iframe>`
  },
  {
    name: "Project 3",
    embedCode: `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="550" src="https://embed.figma.com/design/EjB5907ftlpCHMZrgGNHOz/Event-Booking-App--EventHub--Community-?node-id=96-734&embed-host=share" allowfullscreen></iframe>`
  },
  {
    name: "Project 4",
    embedCode: `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="550" src="https://embed.figma.com/design/EqKXtp17FpKfL8LWIZmuWL/Lorem-brocker?node-id=0-1&embed-host=share" allowfullscreen></iframe>`
  },
  {
    name: "Project 5",
    embedCode: `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="550" src="https://embed.figma.com/design/JwpYd2CDdfCy1OYYcUawLf/Coffee-Shop?node-id=2-2&embed-host=share" allowfullscreen></iframe>`
  }, 
  {
    name: "Project 6",
    embedCode: `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/design/oV5J0qZlHlsX2GQmgAgjrj/Gtbank-App--Community-?node-id=0-1&embed-host=share" allowfullscreen></iframe>`
  },
  {
    name: "Project 7",
    embedCode: `<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/design/eWhoxEstkbAB9PLcy9UtPJ/Ecobank-UI-KIT-BY-VIBEGEE--Community-?node-id=0-1&embed-host=share" allowfullscreen></iframe>`
  }
];

const sidebarFeatures = [
  {
    label: "Details",
    icon: "👤",
    content: (
      <div>
        <strong>My Ui SPace</strong>
        <ul>
          <li>Projects count: 7</li>
          <li>Likes: 2</li>
        </ul>
      </div>
    )
  },
  {
    label: "Tools",
    icon: "🛠️",
    content: (
      <div>
        <strong>Tools</strong>
        <ul>
          <li>Figma</li>
        </ul>
      </div>
    )
  },
  {
    label: "Book",
    icon: "📅",
    content: (
      <div>
        <strong>Book a UI like this</strong>
        <p>Email: <a href="mailto:your@email.com">abiodunprosper07@gmail.com</a></p>
      </div>
    )
  },
  {
    label: "Appreciate",
    icon: "👍",
    content: (
      <div>
        <strong>Appreciate</strong>
        <p>Click to like this project!</p>
      </div>
    )
  }
];

const UIUXDesigner = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [likes, setLikes] = useState(2);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  const isMobile = windowWidth <= 850;
  const isTablet = windowWidth > 600 && windowWidth <= 900;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSidebarClick = (idx) => {
    if (activePopup === idx) {
      setActivePopup(null);
    } else {
      setActivePopup(idx);
      if (sidebarFeatures[idx].label === "Appreciate") setLikes(likes + 1);
    }
  };

  return (
    <div style={{ background: "#0a0c18", minHeight: "100vh", position: "relative" }}>
      <Navbar />
      {!isMobile && (
        <div
          style={{
            position: "fixed",
            top: "30%",
            left: 24,
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            gap: 16
          }}
        >
          {sidebarFeatures.map((feature, idx) => (
            <div key={idx} style={{ position: "relative" }}>
              <button
                onClick={() => handleSidebarClick(idx)}
                onMouseEnter={() => setActivePopup(idx)}
                onMouseLeave={() => setActivePopup(null)}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "none",
                  background: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  fontSize: 22,
                  cursor: "pointer",
                  marginBottom: 4
                }}
              >
                {feature.icon}
              </button>
              {activePopup === idx && (
                <div
                  style={{
                    position: "absolute",
                    left: 60,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "#fff",
                    color: "#222",
                    borderRadius: 8,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    padding: 16,
                    minWidth: 180,
                    zIndex: 1001,
                    fontSize: 15,
                    maxWidth: 300
                  }}
                  onMouseEnter={() => setActivePopup(idx)}
                  onMouseLeave={() => setActivePopup(null)}
                >
                  {feature.label === "Appreciate"
                    ? <div><strong>Appreciations:</strong> {likes}</div>
                    : feature.content}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div
        style={{
          // maxWidth: isMobile ? "100%" : isTablet ? 700 : 1100,
          margin: isMobile ? "0" : "0px auto",
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
          padding: isMobile ? "70px 1px 20px 1px" : isTablet ? "70px 1px 20px 1px" :"70px 1px 0px 1px",
        }}
      >
        <h1 style={{
          fontWeight: 500,
          fontSize: isMobile ? 10 : isTablet ? 18 : 20,
          marginBottom: 0,
          textAlign: "center"
        }}>
          My UI/UX Design Projects
        </h1>
        <p style={{
          color: "#555",
          marginBottom: 32,
          fontSize: isMobile ? 10 : isTablet ? 13 : 15,
          textAlign: "center"
        }}>
          Details about UI/UX design services...
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? 8 : isTablet ? 20 : 32,
            paddingBottom: 16,
            alignItems: "center"
          }}
        >
          {figmaProjects.map((project, idx) => (
            <div
              key={idx}
              style={{
                background: "#eaeaea",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                padding: 0,
                minWidth: isMobile ? "100vw" : isTablet ? 500 : 800,
                maxWidth: isMobile ? "100vw" : isTablet ? 700 : 800,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <FigmaEmbed embedCode={project.embedCode} />
              <div style={{
                padding: "8px 0",
                fontWeight: 600,
                fontSize: isMobile ? 12 : isTablet ? 15 : 18,
                textAlign: "center"
              }}>{project.name}</div>
            </div>
          ))}
        </div>
      </div>

{isMobile && (
  <div
    style={{
      position: "fixed",
      bottom: 16,
      left: 0,
      width: "100vw",
      display: "flex",
      justifyContent: "flex-end", // Move to right
      zIndex: 2000,
      paddingRight: 16 // Add some space from the right edge
    }}
  >
    <button
      onClick={() => setLikes(likes + 1)}
      style={{
        background: "#0a0c18",
        color: "#fff",
        border: "none",
        borderRadius: 24,
        padding: "12px 20px",
        fontSize: 18,
        fontWeight: 700,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
        cursor: "pointer"
      }}
    >
      👍
    </button>
  </div>
)}
    </div>
  );
};

export default UIUXDesigner;