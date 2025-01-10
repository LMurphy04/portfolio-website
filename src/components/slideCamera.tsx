import * as THREE from "three";
import gsap from "gsap";

const slideCamera = (
  camera: THREE.PerspectiveCamera,
  X: number = 1,
  Y: number = 1,
  Z: number = -1,
  duration: number = 1.5,
  onComplete?: () => void
) => {

  // Animate camera position using GSAP
  gsap.to(camera.position, {
    x: X,
    y: Y,
    z: Z,
    duration: duration,
    ease: "power2.inOut", // Easing for smooth animation
    onUpdate: () => {
      camera.updateProjectionMatrix(); // Ensure the camera updates properly
    },
    onComplete: () => {
      if (onComplete) onComplete();
    },
  });
};

export default slideCamera;
