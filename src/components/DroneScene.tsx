import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const DroneScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a); // slate-900

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current!.clientWidth / mountRef.current!.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      mountRef.current!.clientWidth,
      mountRef.current!.clientHeight
    );
    mountRef.current!.appendChild(renderer.domElement);

    // Drone placeholder (a cube with arms)
    const bodyGeometry = new THREE.BoxGeometry(1, 0.2, 1);
    const bodyMaterial = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    scene.add(body);

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1.2);
    light.position.set(5, 5, 5);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambient);

    // Animate
    const animate = () => {
      requestAnimationFrame(animate);
      body.rotation.x += 0.01;
      body.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="w-full h-96 rounded-xl overflow-hidden" />;
};

export default DroneScene;
