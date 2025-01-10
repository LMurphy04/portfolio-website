import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import slideCamera from "./slideCamera";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const sections = [
  {
    title: "Details",
    subsections: [
      {
        colour:0xff0000,
        title: "Liam Murphy",
        body: "Software Engineer",
        model: "/models/computer_v2.glb",
        offset: [0.0, 0.0, 0.0],
        shift: 0.0,
        scale: 2,
        rotation: 2.3,
        popupTitle: "Liam Murphy",
        popupBody: <>
        <p
          style={{
            textAlign: "left"
          }}
        >
          Hello, I am Liam Murphy and welcome to my website! Here you will find out a bit about me, what I have been up to, and what I am getting up to. Please explore!
        </p>
        </>
      },
      {
        colour:0xff0000,
        title: "About Me",
        body: "The man behind the machine.",
        model: "/models/earth.glb",
        offset: [0.0, 0.5, 0.0],
        shift: 0.0,
        scale: 0.18,
        rotation: 0.4,
        popupTitle: "Liam Murphy",
        popupBody: <>
        <p
          style={{
            textAlign: "left"
          }}
        >
          Hello, I am Liam Murphy and welcome to my website! Here you will find out a bit about me, what I have been up to, and what I am getting up to. Please explore!
        </p>
        </>
      },
      {
        colour:0xff0000,
        title: "Contact Me",
        body: "If you need to get in touch.",
        model: "/models/phone.glb",
        offset: [0.3, 0.7, 0.1],
        shift: 0.0,
        scale: 0.6,
        rotation: 0.6,
        popupTitle: "Contact Me",
        popupBody: <>
        <p
          style={{
            textAlign: "left"
          }}
        >
          Hello, I am Liam Murphy and welcome to my website! Here you will find out a bit about me, what I have been up to, and what I am getting up to. Please explore!
        </p>
        </>
      },
    ]
  },
  {
    title: "Experience",
    subsections: [
      {
        colour:0x00ff00,
        title: "JP Morgan",
        body: "Incoming Software Engineering Intern",
        model: "/models/letter_box.glb",
        offset: [-0.25, 0.0, -0.1],
        shift: 0.0,
        scale: 5,
        rotation: Math.PI / 4,
        popupTitle: "Liam Murphy",
        popupBody: <>
        <p
          style={{
            textAlign: "left"
          }}
        >
          Hello, I am Liam Murphy and welcome to my website! Here you will find out a bit about me, what I have been up to, and what I am getting up to. Please explore!
        </p>
        </>
      },
      {
        colour:0x00ff00,
        title: "Voiceover Interpreting",
        body: "Software Engineer",
        model: "/models/headphones.glb",
        offset: [0.0, 0.7, 0.0],
        shift: -0.7,
        scale: 0.3,
        rotation: Math.PI / 4,
        popupTitle: "Liam Murphy",
        popupBody: <>
        <p
          style={{
            textAlign: "left"
          }}
        >
          Hello, I am Liam Murphy and welcome to my website! Here you will find out a bit about me, what I have been up to, and what I am getting up to. Please explore!
        </p>
        </>
      },
      {
        colour:0x00ff00,
        title: "GreenFox Energy",
        body: "Business Analyst",
        model: "/models/house.glb",
        offset: [0.0, 0.0, 0.0],
        shift: 0.0,
        scale: 0.3,
        rotation: -Math.PI/4,
        popupTitle: "Liam Murphy",
        popupBody: <>
        <p
          style={{
            textAlign: "left"
          }}
        >
          Hello, I am Liam Murphy and welcome to my website! Here you will find out a bit about me, what I have been up to, and what I am getting up to. Please explore!
        </p>
        </>
      },
      {
        colour:0x0000ff,
        title: "The Entertainer",
        body: "Software Engineering Intern",
        model: "/models/toy.glb",
        offset: [0.0, 0.3, -0.3],
        shift: 0.0,
        scale: 0.003,
        rotation: Math.PI/4,
        popupTitle: "Liam Murphy",
        popupBody: <>
        <p
          style={{
            textAlign: "left"
          }}
        >
          Hello, I am Liam Murphy and welcome to my website! Here you will find out a bit about me, what I have been up to, and what I am getting up to. Please explore!
        </p>
        </>
      },
      {
        colour:0xff0000,
        title: "GU Tech Society",
        body: "Board Member and Welfare Officer",
        model: "/models/cube.glb",
        offset: [0.0, 0.15, 0.0],
        shift: -0.3,
        scale: 0.15,
        rotation: Math.PI/4,
        popupTitle: "Liam Murphy",
        popupBody: <>
        <p
          style={{
            textAlign: "left"
          }}
        >
          Hello, I am Liam Murphy and welcome to my website! Here you will find out a bit about me, what I have been up to, and what I am getting up to. Please explore!
        </p>
        </>
      },
    ]
  },
  {
    title: "Projects",
    subsections: [
      {
        colour:0x00ff00,
        title: "Portfolio Website",
        body: "The Website you're Currently On!",
        model: "/models/pin.glb",
        offset: [0.35, 0.7, 0.2],
        shift: -0.4,
        scale: 0.3,
        rotation: -Math.PI/4,
        popupTitle: "Liam Murphy",
        popupBody: <>
        <p
          style={{
            textAlign: "left"
          }}
        >
          Hello, I am Liam Murphy and welcome to my website! Here you will find out a bit about me, what I have been up to, and what I am getting up to. Please explore!
        </p>
        </>
      },
      {
        colour:0x00ff00,
        title: "F1iS Website",
        body: "Freelance Web Developer",
        model: "/models/car.glb",
        offset: [-0.15, 0.0, 0.0],
        shift: 0.2,
        scale: 0.4,
        rotation: Math.PI/4,
        popupTitle: "Liam Murphy",
        popupBody: <>
        <p
          style={{
            textAlign: "left"
          }}
        >
          Hello, I am Liam Murphy and welcome to my website! Here you will find out a bit about me, what I have been up to, and what I am getting up to. Please explore!
        </p>
        </>
      },
      {
        colour:0x0000ff,
        title: "DSA Visual",
        body: "Passion Project",
        model: "/models/eye.glb",
        offset: [0.0, 0.7, -0.25],
        shift: 0.2,
        scale: 0.006,
        rotation: Math.PI/4,
        popupTitle: "Liam Murphy",
        popupBody: <>
        <p
          style={{
            textAlign: "left"
          }}
        >
          Hello, I am Liam Murphy and welcome to my website! Here you will find out a bit about me, what I have been up to, and what I am getting up to. Please explore!
        </p>
        </>
      },
    ]
  },
]

var text = []

var models = new Map;

const startX = 1.5;
const startY = 0.5;
const startZ = Math.max(4 * window.innerHeight / window.innerWidth, 3.0);

const spacingScale = 15;
let frameCount = 0;

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false); // State to track dark mode
  const sceneRef = useRef<THREE.Scene | null>(null); // Reference for the scene
  const [currentCube, setCurrentCube] = useState(0); // State to track dark mode
  const [visiblePopup, setVisiblePopup] = useState<boolean>(true);
  const [freeze, setFreeze] = useState(false);
  const loader = new FontLoader();
  const [popupTitle, setPopupTitle] = useState(sections[0].subsections[0].popupTitle)
  const [popupBody, setPopupBody] = useState(sections[0].subsections[0].popupBody)
  const [loading, setLoading] = useState(true);

  let counter = 0;
  sections.forEach((section) => {
    section.subsections.forEach((subsection) => {
      subsection.pos = counter;
      counter++;
    })
  })

  useEffect(() => {
    if (!mountRef.current) return;

    // Create the scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create the camera
    const camera = new THREE.PerspectiveCamera(
      75, // Field of view
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1, // Near plane
      1000 // Far plane
    );
    cameraRef.current = camera;

    // Create the renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true; // Enable shadows
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Set the shadow type (soft shadows)
    rendererRef.current = renderer;
    renderer.setPixelRatio(window.devicePixelRatio);

    // Set background color of the scene (Initial light mode background)
    scene.background = new THREE.Color(0xeeeeee); // Light gray background
    scene.fog = new THREE.Fog(0xaaaaaa, spacingScale/2, 2*spacingScale);

    // Attach the renderer to the DOM
    mountRef.current.appendChild(renderer.domElement);

    // Add Ambient Light (Global light)
    const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft white light
    scene.add(ambientLight);

    // Add a Floor
    const floorGeometry = new THREE.PlaneGeometry(1000, 1000); // 100x100 units
    const floorMaterial = new THREE.ShadowMaterial({ opacity: 0.5 }); // Transparent material to show shadows
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2; // Rotate the floor to be horizontal
    floor.position.y = 0; // Position it below the cube
    floor.receiveShadow = true; // The floor will receive shadows
    scene.add(floor);

    // Add a Cube
    let modelsLeft = counter * 3
    sections.forEach((section, index) => {
      section.subsections.forEach((colorObj, index2) => {
        if (colorObj.model) {
          const GLTFloader = new GLTFLoader();
          GLTFloader.load(
            colorObj.model, // Path to your model
            (gltf) => {
              gltf.scene.traverse(function (child) {
                if (child.isMesh) {
                    child.castShadow = true;
                }
              })
              const model = gltf.scene;
              model.position.set(colorObj.pos * spacingScale + colorObj.offset[0] + colorObj.shift, 0 + colorObj.offset[1], -colorObj.pos * spacingScale + colorObj.offset[2]); // Set model position
              model.scale.set(colorObj.scale, colorObj.scale, colorObj.scale); // Scale the model
              model.rotation.y += colorObj.rotation;
              scene.add(model);
              models.set(colorObj.title, model);
              modelsLeft--;
              if (modelsLeft <= 0) setLoading(false);
            }
          );
        }

        loader.load(
          "Roboto_Bold.json", // Font file URL
          (font) => {
            // Create text geometry
            const textGeometry = new TextGeometry(colorObj.title, {
              font: font,
              size: 0.3, // Size of the text
              depth: 0.025, // Depth of the text
              curveSegments: 12, // Smoothness of text curves
              bevelEnabled: true, // Enable/disable bevel
              bevelThickness: 0.01,
              bevelSize: 0.01,
              bevelSegments: 5,
            });
    
            // Apply a material to the text
            const textMaterial = new THREE.MeshStandardMaterial({ color: 0x7373ff });
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    
            // Position the text
            textMesh.position.set(1 + colorObj.shift + colorObj.pos * spacingScale, 0.6, -colorObj.pos * spacingScale);
            scene.add(textMesh);
            text.push(textMaterial);

            const directionalLight = new THREE.DirectionalLight(0xffffff, 2/counter); // White light
            directionalLight.position.set(8 + colorObj.shift + colorObj.pos * spacingScale, 5, 5 + -colorObj.pos * spacingScale); // Position the light in the scene
            directionalLight.castShadow = true; // Enable shadow casting for this light
            directionalLight.target = textMesh;
            directionalLight.shadow.mapSize.width = 2048; // Higher resolution for sharper shadows
            directionalLight.shadow.mapSize.height = 2048;
            scene.add(directionalLight);
            modelsLeft--;
            if (modelsLeft <= 0) setLoading(false);
          }
        );
        loader.load(
          "Roboto_Regular.json", // Font file URL
          (font) => {
            // Create text geometry
            const textGeometry = new TextGeometry(colorObj.body, {
              font: font,
              size: 0.14, // Size of the text
              depth: 0.0, // Depth of the text
              curveSegments: 12, // Smoothness of text curves
              bevelEnabled: true, // Enable/disable bevel
              bevelThickness: 0.01,
              bevelSize: 0.003,
              bevelSegments: 5,
            });
    
            // Apply a material to the text
            const textMaterial = new THREE.MeshStandardMaterial({ color: 0x7373ff });
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    
            // Position the text
            textMesh.position.set(1 + colorObj.shift + colorObj.pos * spacingScale, 0.35, -colorObj.pos * spacingScale);
            scene.add(textMesh);
            text.push(textMaterial);
            modelsLeft--;
            if (modelsLeft <= 0) setLoading(false);
          }
        );
      })});

    // Position the camera
    camera.position.set(startX, startY, startZ)

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      //animate globe
      const globe = models.get("About Me");
      if (globe) {
        globe.rotation.y += 0.01;
        globe.position.y = 0.5 +Math.sin(frameCount)/10;
      }

      const pin = models.get("Portfolio Website");
      if (pin) {
        pin.position.y = 0.7 + Math.sin(frameCount)/10;
      }

      //animate eye
      const eye = models.get("DSA Visual");
      if (eye) {
        eye.rotation.y = Math.PI/4 + Math.sin(3*frameCount)/10;
      }

      frameCount += Math.PI/180
      frameCount = frameCount % (2 * Math.PI);

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      if (rendererRef.current && cameraRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Update renderer size
        rendererRef.current.setSize(width, height);

        // Update camera aspect ratio and projection matrix
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        cameraRef.current.position.z = Math.max(4 * window.innerHeight / window.innerWidth, 3.0);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Change background and object colors based on dark mode
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return; // Ensure the scene exists before proceeding

    // Update the background and materials of the objects
    if (isDarkMode) {
      scene.background = new THREE.Color(0x1a1a1a);
      if (scene.fog) scene.fog.color = new THREE.Color(0x101010);
      text.forEach((t) => {
        t.color = new THREE.Color(0xeeeeee);
      });
    } else {
      scene.background = new THREE.Color(0xeeeeee);
      if (scene.fog) scene.fog.color = new THREE.Color(0xffffff);
      text.forEach((t) => {
        t.color = new THREE.Color(0x7373ff);
      });
    }
  }, [isDarkMode]);

  const handleSlide = (index:number) => {
    if (cameraRef.current && index >= 0 && index < counter) {
      setFreeze(true);
      setCurrentCube(index);
      var currentSection = 0;
      var sectionIndex = index;
      while (sectionIndex >= sections[currentSection].subsections.length) {
        sectionIndex -= sections[currentSection].subsections.length;
        currentSection += 1;
      }
      setPopupTitle(sections[currentSection].subsections[sectionIndex].popupTitle);
      setPopupBody(sections[currentSection].subsections[sectionIndex].popupBody);
      slideCamera(cameraRef.current, startX+1*index*spacingScale, startZ+-1*index*spacingScale, 3, () => {
        console.log("Camera slide complete!");
        setFreeze(false);
      });
    }
  };

  return (
    <>
      <h1
        style={{
          position: "absolute",
          bottom: "5px",
          width: "100%",
          height: "100%",
          backgroundColor: isDarkMode ? "#1a1a1a" : "#eeeeee",
          display: "flex",
          flexDirection: "column",
          gap:"8px",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Courier New",
          zIndex:100,
          opacity: loading ? 1 : 0,
          transition: "opacity 2s ease",
        }}
        onTransitionEnd={(e) => {
          if (e.propertyName === "opacity" && !loading) {
            e.target.style.display = "none";
          }
        }}
      >
        <div style={{
          width: "25px",
          height: "25px",
          border: "2px solid rgba(0, 0, 0, 0.1)",
          borderTop: "2px solid #7373ff",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}>
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      </h1>
      <button onClick={toggleDarkMode} style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        width: '40px',
        height: '40px',
        fontSize: '15px',
        background: "none",
        fontFamily: "Courier New",
        border: "none",
        cursor: "pointer",
        color: isDarkMode ? "white" : "black",
        zIndex: 5,
      }}>
        <p style={{fontSize: isDarkMode ? "16px" : "24px"}}>{isDarkMode ? "☾" : "☼"}</p>
      </button>
      <div ref={mountRef}>
        {/* Navigation Controls */}
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Courier New",
          zIndex:1
        }}
      >
        {/* Left Button */}
        <button
          onClick={() => {handleSlide(currentCube-1)}}
          style={{
            marginRight: "20px",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: currentCube != 0 ? "pointer" : "default",
            fontSize: "20px",
            background: "none",
            color: isDarkMode ? "white" : "black",
            opacity: currentCube == 0 ? 0.3 : 1,
            transition: "opacity 2s ease"
          }}
        >
          ←
        </button>

        {sections.map((subsectionss, index) => (
          <div key={index} style={{ textAlign: "center", marginBottom: "20px", padding: "0px 5px 0px 5px" }}>
            {/* Title */}
            <div
              style={{
                marginBottom: "10px",
                fontSize: "14px",
                fontWeight: "bold",
                color: isDarkMode ? "white" : "black"
              }}
            >
              {subsectionss.title}
            </div>
            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
              {subsectionss.subsections.map((subsections, index2) => (
                <div
                  onClick={() => {handleSlide(subsections.pos)}}
                  key={subsections.pos}
                  style={{
                    cursor: "pointer",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: subsections.pos === currentCube ? "#7373ff" : isDarkMode ? "white" : "black",
                  }}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Right Button */}
        <button
          onClick={() => {handleSlide(currentCube+1)}}
          style={{
            marginLeft: "20px",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: currentCube != counter-1 ? "pointer" : "default",
            fontSize: "20px",
            background: "none",
            color: isDarkMode ? "white" : "black",
            opacity: currentCube == counter-1 ? 0.3 : 1,
            transition: "opacity 2s ease"
          }}
        >
          →
        </button>
      </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Courier New",
          opacity: 1,
          zIndex: 0
        }}
        onClick={() => {if (!freeze) setVisiblePopup(true)}}
      />
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Courier New",
          backgroundColor: isDarkMode ? "black" : "white",
          zIndex: 2,
          display: visiblePopup ? "flex" : "none",
          opacity: 0.75
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Courier New",
          zIndex: 3,
          display: visiblePopup ? "flex" : "none",
        }}
      >
        <div
          style={{
            backgroundColor: isDarkMode ? "#404040" : "#eeeeee",
            padding: "8px 24px",
            border: "1px solid #101010",
            borderRadius: "4px",
            width: window.innerWidth < 600 ? "90%" : "50%",
            position: "relative",
            color: isDarkMode ? "#eeeeee" : "black"
          }}
        >
          <button
            style={{
              position: "absolute",
              top: "5px",
              right: "8px",
              width: "24px",
              height: "24px",
              cursor: "pointer",
              background: "none",
              border: "none",
              fontWeight: "bolder",
              fontSize: "20px"
            }}
            onClick={() => {setVisiblePopup(false)}}
          >
            →
          </button>
          <h1 style={{
              padding: "8px 0px 0px 0px"
            }}
          >
            {popupTitle}
          </h1>
          <div
            style={{
              display: "flex",
              padding: "16px 0px"
            }}
          >
            {popupBody}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeScene;
