import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useSwipeable } from "react-swipeable";
import slideCamera from "./slideCamera";
import sections from "../assets/sections";


var text : THREE.MeshStandardMaterial[] = []
var lights : THREE.DirectionalLight[] = []
var lightPositions : THREE.Vector3[] = []
var lightTargets : THREE.Object3D[] = []
var models : Map<String, THREE.Group> = new Map;

const startX = 1.5;
const startY = 0.5;
const startZ = Math.max(4 * window.innerHeight / window.innerWidth, 3.0);

const spacingScale = 15;
const detailHeight = 5;

var timeOfLastRender : number | null = null;


const PortfolioScene = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);

  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  const [sectionTransition, setSectionTransition] = useState(false);
  const [detailTransition, setDetailTransition] = useState(false);

  const [showDetails, setShowDetails] = useState<boolean>(true);
  const [detailTitle, setDetailTitle] = useState(sections[0].subsections[0].title);
  const [detailBody, setDetailBody] = useState(sections[0].subsections[0].detailBody);

  const handlers = useSwipeable({
    onSwipedLeft: () => {if (!showDetails && !sectionTransition && !detailTransition && !loading) sectionCameraTransition(currentSection+1)},
    onSwipedRight: () => {if (!showDetails && !sectionTransition && !detailTransition && !loading) sectionCameraTransition(currentSection-1)},
  });


  // assign positions to subsections, tricky to count as stored as nested arrays and maps
  var counter = 0;
  sections.forEach((section) => {
    section.subsections.forEach((subsection : {[key: string]: any}) => {
      subsection.pos = counter;
      counter++;
    })
  })


  // initialise 3D environment on initial page load
  useEffect(() => {
    if (!mountRef.current) return;

    // Create Scene
    const scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0x404040, 1));
    scene.background = new THREE.Color(darkMode ? 0x1a1a1a : 0xeeeeee);
    scene.fog = new THREE.Fog(darkMode ? 0x101010 : 0xffffff, spacingScale / 2, 2 * spacingScale);
    sceneRef.current = scene;

    // Create Camera
    const camera = new THREE.PerspectiveCamera(
      75, // FOV
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1, // Near plane
      1000 // Far plane
    );
    camera.position.set(startX, startY + detailHeight, startZ)
    cameraRef.current = camera;

    // Create Renderer
    const renderer = new THREE.WebGLRenderer({ antialias : true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Create Floor
    const floorGeometry = new THREE.PlaneGeometry(1000, 1000);
    const floorMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Add Models
    const GLTFloader = new GLTFLoader();
    const loader = new FontLoader();
    var modelsLeft = counter * 3 // each section has two text models and an object model
    
    sections.forEach((section) => {
      section.subsections.forEach((subsection) => {
        GLTFloader.load(
          subsection.model,
          (gltf) => {
            gltf.scene.traverse(function (child) {
              if (child instanceof THREE.Mesh && child.isMesh) {
                  child.castShadow = true;
              }
            })
            
            const model = gltf.scene;
            model.position.set(subsection.pos * spacingScale + subsection.offset[0] + subsection.shift, 0 + subsection.offset[1], -subsection.pos * spacingScale + subsection.offset[2]); // Set model position
            model.scale.set(subsection.scale, subsection.scale, subsection.scale);
            model.rotation.y += subsection.rotation;
            scene.add(model);
            
            models.set(subsection.title, model);
            modelsLeft--;
            if (modelsLeft <= 0) setLoading(false);
          }
        )

        loader.load(
          "/fonts/Roboto_Bold.json",
          (font) => {
            const textGeometry = new TextGeometry(subsection.title, {
              font: font,
              size: 0.3,
              depth: 0.025,
              curveSegments: 12,
              bevelEnabled: true,
              bevelThickness: 0.01,
              bevelSize: 0.01,
              bevelSegments: 5,
            });
            const textMaterial = new THREE.MeshStandardMaterial({ color: darkMode ? 0xeeeeee : 0x7373ff });
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
            textMesh.position.set(1 + subsection.shift + subsection.pos * spacingScale, 0.6, -subsection.pos * spacingScale);
            scene.add(textMesh);
            text.push(textMaterial);

            // Create Lighting Positions
            const target = new THREE.Object3D();
            target.position.set(1 + subsection.shift + subsection.pos * spacingScale, 0.6, -subsection.pos * spacingScale)
            scene.add(target);
            lightPositions.push(new THREE.Vector3(8 + subsection.shift + subsection.pos * spacingScale, 5, 5 + -subsection.pos * spacingScale))
            lightTargets.push(target)
            
            modelsLeft--;
            if (modelsLeft <= 0) setLoading(false);
          }
        );
        
        loader.load(
          "/fonts/Roboto_Regular.json",
          (font) => {
            const textGeometry = new TextGeometry(subsection.body, {
              font: font,
              size: 0.14,
              depth: 0.0,
              curveSegments: 12,
              bevelEnabled: true,
              bevelThickness: 0.01,
              bevelSize: 0.003,
              bevelSegments: 5,
            });
            const textMaterial = new THREE.MeshStandardMaterial({ color: darkMode ? 0xeeeeee : 0x7373ff });
            const textMesh = new THREE.Mesh(textGeometry, textMaterial);
            textMesh.position.set(1 + subsection.shift + subsection.pos * spacingScale, 0.35, -subsection.pos * spacingScale);
            scene.add(textMesh);
            
            text.push(textMaterial);
            modelsLeft--;
            if (modelsLeft <= 0) setLoading(false);
          }
        );
      })
    });

    for (let i = 0 ; i < 3 ; i++) {
      const directionalLight = new THREE.DirectionalLight(0xffffff, 2/3);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 2048;
      directionalLight.shadow.mapSize.height = 2048;
      directionalLight.shadow.camera.near = 1;
      directionalLight.shadow.camera.far = 20;
      directionalLight.shadow.camera.left = -5;
      directionalLight.shadow.camera.right = 5;
      directionalLight.shadow.camera.top = 5;
      directionalLight.shadow.camera.bottom = -5;
      scene.add(directionalLight);
      lights.push(directionalLight);
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Once all lights have been created move lights to exist on previous, current, and future sections - faking having a light per section
      if (lightPositions.length == counter) {
        var minDistance = camera.position.distanceTo(lightPositions[1]);
        var minIndex = 1;
        
        lightPositions.forEach((lightPosition, index) => {
          if (index > 0 && index < counter - 1) {
            let distance = camera.position.distanceTo(lightPosition);
            if (distance < minDistance) {
              minIndex = index;
              minDistance = distance;
            }
          }
        })

        var settingLight = minIndex - 1;
        lights.forEach((light) => {
          light.position.set(lightPositions[settingLight].x, lightPositions[settingLight].y, lightPositions[settingLight].z);
          light.target = lightTargets[settingLight];
          settingLight++;
        })
      }

      const currentTime = performance.now();
      if (!timeOfLastRender) timeOfLastRender = currentTime;
      var timeDelta = currentTime - timeOfLastRender;
      timeOfLastRender = currentTime
      const globalCyclePosition = (currentTime / 1000) % (Math.PI * 2)

      // animate globe
      const globe = models.get("About Me");
      if (globe) {
        globe.rotation.y += 0.0005 * timeDelta;
        globe.position.y = 0.5 + Math.sin(globalCyclePosition)/10;
      }

      // animate pin
      const pin = models.get("Portfolio Website");
      if (pin) {
        pin.position.y = 0.7 + Math.sin(globalCyclePosition)/10;
      }

      // animate eye
      const eye = models.get("DSA Visual");
      if (eye) {
        eye.rotation.y = Math.PI/4 + Math.sin(3*globalCyclePosition)/10;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle Window Resize
    const handleResize = () => {
      if (rendererRef.current && cameraRef.current) {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // Update renderer size
        rendererRef.current.setSize(width, height);

        // Update camera aspect ratio and projection matrix
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on Unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);


  // Handle Dark Mode Changes
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    scene.background = new THREE.Color(darkMode ? 0x1a1a1a : 0xeeeeee);
    if (scene.fog) scene.fog.color = new THREE.Color(darkMode ? 0x101010 : 0xffffff);
    text.forEach((t) => {t.color = new THREE.Color(darkMode ? 0xeeeeee : 0x7373ff)});
  }, [darkMode]);


  // Handle Section Transitions
  const sectionCameraTransition = (index:number) => {
    if (cameraRef.current && index >= 0 && index < counter && !detailTransition) {
      setSectionTransition(true);
      setCurrentSection(index);
      
      var currentSection = 0;
      var sectionIndex = index;
      while (sectionIndex >= sections[currentSection].subsections.length) {
        sectionIndex -= sections[currentSection].subsections.length;
        currentSection += 1;
      }

      setDetailTitle(sections[currentSection].subsections[sectionIndex].title);
      setDetailBody(sections[currentSection].subsections[sectionIndex].detailBody);

      slideCamera(cameraRef.current, startX+1*index*spacingScale, startY, startZ+-1*index*spacingScale, 3, () => {
        setSectionTransition(false);
        if (detailRef.current) detailRef.current.scrollTop = 0;
      });
    }
  };


  // Handle Transition for Show Details
  const detailCameraTransition = (showDetails:boolean) => {
    if (cameraRef.current && !detailTransition) {
      setDetailTransition(true);
      const heightIncrease = showDetails ? detailHeight : 0
      setShowDetails(showDetails)

      slideCamera(cameraRef.current, startX+1*currentSection*spacingScale, startY+heightIncrease, startZ+-1*currentSection*spacingScale, 3, () => {
        setDetailTransition(false);
        if (detailRef.current && !showDetails) detailRef.current.scrollTop = 0;
      })
    };
  }

  
  return (
    <div {...handlers}>
      <div
        style={{
          position: "absolute",
          bottom: "5px",
          width: "100%",
          height: "100%",
          backgroundColor: darkMode ? "#1a1a1a" : "#eeeeee",
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
          if (e.propertyName === "opacity" && !loading) (e.target as HTMLDivElement).style.display = "none";
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
      </div>
      <button onClick={() => setDarkMode(!darkMode)} style={{
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
        color: darkMode ? "white" : "black",
        zIndex: 5,
      }}>
        <p style={{fontSize: darkMode ? "16px" : "24px"}}>{darkMode ? "☾" : "☼"}</p>
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
          zIndex:1,
          opacity: showDetails ? 0.2 : 1,
            transition: "opacity 2s ease"
        }}
      >
        {/* Left Button */}
        <button
          onClick={() => {sectionCameraTransition(currentSection-1)}}
          style={{
            marginRight: "20px",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: currentSection != 0 ? "pointer" : "default",
            fontSize: "20px",
            background: "none",
            color: darkMode ? "white" : "black",
            opacity: currentSection == 0 ? 0.3 : 1,
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
                color: darkMode ? "white" : "black"
              }}
            >
              {subsectionss.title}
            </div>
            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
              {subsectionss.subsections.map((subsections) => (
                <div
                  onClick={() => {sectionCameraTransition(subsections.pos)}}
                  key={subsections.pos}
                  style={{
                    cursor: "pointer",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: subsections.pos === currentSection ? "#7373ff" : darkMode ? "white" : "black",
                  }}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Right Button */}
        <button
          onClick={() => {sectionCameraTransition(currentSection+1)}}
          style={{
            marginLeft: "20px",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: currentSection != counter-1 ? "pointer" : "default",
            fontSize: "20px",
            background: "none",
            color: darkMode ? "white" : "black",
            opacity: currentSection == counter-1 ? 0.3 : 1,
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
        onClick={() => {if (!sectionTransition) detailCameraTransition(true)}}
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
          display: "flex",
          opacity: showDetails ? 1 : 0,
          transition: "opacity 3s ease",
          pointerEvents: showDetails ? "auto" : "none"
        }}
      >
        <div
          style={{
            padding: "8px 24px",
            width: window.innerWidth < 600 ? "90%" : "50%",
            position: "relative",
            color: darkMode ? "#eeeeee" : "black",
            display: "flex",
            borderColor: darkMode ? "#eeeeee" : "black",
            flexDirection: "column",
            gap:"16px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{
              padding: "8px 0px 0px 0px"
            }}
          >
            {detailTitle}
          </h1>
          <div
            style={{
              overflowY: "auto",
              maxHeight: "55vh",
              wordBreak: "break-word",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap:"16px",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
            ref={detailRef}
          >
            {detailBody}
          </div>
          <button
            style={{
              width: "24px",
              height: "24px",
              cursor: "pointer",
              background: "none",
              border: "none",
              fontWeight: "bolder",
              fontSize: "20px",
              color: darkMode ? "#eeeeee" : "black"
            }}
            onClick={() => {detailCameraTransition(false)}}
          >
            ↓
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioScene;
