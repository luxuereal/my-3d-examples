"use client"
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";
import { Physics } from "@react-three/cannon";
import "./index.css";

const CarRacing = () => {
  return (
    <>
      <Canvas>
        <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
          <Scene />
        </Physics>
      </Canvas>

      <div className="controls">
        <p>press w a s d to move</p>
        <p>press k to swap camera</p>
        <p>press r to reset</p>
        <p>press arrows for flips</p>
      </div>
    </>
  );
};

export default CarRacing;
