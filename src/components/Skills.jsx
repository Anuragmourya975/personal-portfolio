import React from "react";
import Navbar from "./Navbar";
import Particles from "react-tsparticles";
// import MainFooter from "./MainFooter";
// import "./Skills.css";

function Skills() {
  const particlesInit = (main) => {
    // console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />

      <Particles
        className="z-10"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              //   value: "#0d47a1",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: false,
                mode: "repulse",
              },
              resize: false,
            },
            modes: {
              bubble: {
                distance: 50,
                duration: 2,
                opacity: 0.8,
                size: 70,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#000000",
            },
            links: {
              //   color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              // outMode: "bounce",
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1500,
              },
              value: 80,
            },
            opacity: {
              value: 0.7,
            },
            shape: {
              type: "images",
              stroke: {
                width: 0,
                color: "#000",
              },
              polygon: {
                nb_sides: 6,
              },
              images: [
                {
                  src: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/1104/1104982.png",
                  width: 100,
                  height: 100,
                },
                {
                  src: "https://cdn-icons-png.flaticon.com/512/1051/1051326.png",
                  width: 100,
                  height: 100,
                },
              ],
            },
            size: {
              random: true,
              value: 20,
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
}

export default Skills;
