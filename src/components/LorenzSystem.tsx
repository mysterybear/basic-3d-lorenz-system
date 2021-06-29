import { useFrame } from "@react-three/fiber"
import React, { useRef } from "react"
import { Mesh } from "three"

const SIGMA = 10
const RHO = 28
const BETA = 8 / 3

const LorenzSystem = () => {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (!meshRef.current) return

    const dt = 0.01
    const { x, y, z } = meshRef.current.position

    meshRef.current.position.x += SIGMA * (y - x) * dt
    meshRef.current.position.y += (x * (RHO - z) - y) * dt
    meshRef.current.position.z += (x * y - BETA * z) * dt
  })

  return (
    <mesh ref={meshRef} position={[0.01, 0, 0]}>
      <sphereBufferGeometry args={[5, 32, 32]} />
      <meshBasicMaterial />
    </mesh>
  )
}

export default LorenzSystem
