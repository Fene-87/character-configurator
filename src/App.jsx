import { Canvas } from "@react-three/fiber"
import Experience from "./components/Experience"
import { useState, useRef } from "react"
import { OrbitControls, useGLTF } from "@react-three/drei"

function App() {
  return (
    <Canvas shadows camera={{ position: [1, 1, 5.5], fov: 110 }}>
      <Experience />
    </Canvas>
  )
}

export default App
