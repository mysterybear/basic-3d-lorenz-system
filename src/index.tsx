import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React from "react"
import ReactDOM from "react-dom"
import LorenzSystem from "./components/LorenzSystem"
import "./index.css"
import * as THREE from "three"

const red = new THREE.Color("red")
const green = new THREE.Color("green")
const blue = new THREE.Color("blue")

ReactDOM.render(
  <React.StrictMode>
    <div className="full-screen">
      <Canvas camera={{ position: [100, 100, 100] }}>
        <LorenzSystem />
        <OrbitControls />
        <gridHelper args={[100, 100, red, red]} />
        <gridHelper rotation-z={Math.PI / 2} args={[100, 100, green, green]} />
        <gridHelper
          rotation-y={Math.PI / 2}
          rotation-z={Math.PI / 2}
          args={[100, 100, blue, blue]}
        />
      </Canvas>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
)
