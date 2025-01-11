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
  gsap.to(camera.position, {
    x: X,
    y: Y,
    z: Z,
    duration: duration,
    ease: "power2.inOut",
    onUpdate: () => {
      camera.updateProjectionMatrix();
    },
    onComplete: () => {
      if (onComplete) onComplete();
    },
  });
};

export default slideCamera;
