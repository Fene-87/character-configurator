import { OrbitControls } from '@react-three/drei';
import Male from '../../Male';

const Experience = () => {
  return (
    <>
      <OrbitControls />
        {/* <boxGeometry attach='geometry' args={[2,2,2]} /> */}
        <ambientLight />
        <directionalLight position={[-6, 9, 6]} castShadow shadow-mapSize={1024} />
        <group position={[0, -1, 0]}>
          <Male />
        </group>
        <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -6, 0]} receiveShadow>
          <planeGeometry args={[10, 10, 1, 1]} />
          <shadowMaterial transparent opacity={0.2} />
        </mesh>
    </>
  )
}

export default Experience