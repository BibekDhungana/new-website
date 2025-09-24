// src/components/DroneScene.tsx
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const DroneScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [activeDrone, setActiveDrone] = useState("drone1"); // default drone
  const sceneRef = useRef<THREE.Scene | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // dark green
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 6);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  // Load the selected drone
  useEffect(() => {
    if (!sceneRef.current) return;

    const scene = sceneRef.current;

    // Remove old drones before adding new one
    scene.children = scene.children.filter(
      (child) => !(child as THREE.Object3D).userData.isDrone
    );

    const loader = new OBJLoader();
    loader.load(`/models/${activeDrone}.obj`, (obj) => {
      obj.scale.set(0.005,0.005,0.005); // adjust as needed
      obj.position.set(0, 0, 0);
      obj.userData.isDrone = true; // mark this object as a drone
      scene.add(obj);
    });
  }, [activeDrone]);

  return (
    <div className="w-full h-full relative">
      {/* Three.js Canvas */}
      <div ref={mountRef} className="w-full h-96 rounded-lg border border-slate-700" />

      {/* Controls */}
      <div className="absolute bottom-3 left-3 flex gap-2 bg-black/50 p-2 rounded">
        <button
          onClick={() => setActiveDrone("drone1")}
          className={`px-3 py-1 rounded ${activeDrone === "drone1" ? "bg-cyan-500 text-black" : "bg-gray-700 text-white"}`}
        >
          Drone 1
        </button>
        <button
          onClick={() => setActiveDrone("drone2")}
          className={`px-3 py-1 rounded ${activeDrone === "drone2" ? "bg-cyan-500 text-black" : "bg-gray-700 text-white"}`}
        >
          Drone 2
        </button>
        <button
          onClick={() => setActiveDrone("drone3")}
          className={`px-3 py-1 rounded ${activeDrone === "drone3" ? "bg-cyan-500 text-black" : "bg-gray-700 text-white"}`}
        >
          Drone 3
        </button>
      </div>
    </div>
  );
};

export default DroneScene;
