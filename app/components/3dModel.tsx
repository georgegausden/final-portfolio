'use client'

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Mesh } from "three";

function MeshComponent() {
    const fileUrl = "/GeorgeG_Low_Poly_Diaorama_056.glb";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);

    useFrame(() => {
        mesh.current.rotation.y += 0.01;
     });
  
    return (
      <mesh ref={mesh} position={[0, -2, 0]} scale={0.05}>
        <primitive object={gltf.scene} />
      </mesh>
    );
  }

  export function Model() {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Canvas className='h-2xl w-2xl'>
          <ambientLight intensity={5} />
          <pointLight position={[10, 10, 10]} />
          <MeshComponent />
          <OrbitControls minDistance={3} maxDistance={5} />
        </Canvas>
      </div>
    );
  }

  export default Model();
