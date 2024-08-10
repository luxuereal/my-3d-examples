"use client"
import { Canvas } from '@react-three/fiber'
import { useGLTF, AccumulativeShadows, RandomizedLight, Environment, CameraControls } from '@react-three/drei'
import './style.css'

export default function ShoesPage() {
  return (
    <Canvas shadows camera={{ position: [5, 0, 5], fov: 35 }}>
      <ambientLight intensity={Math.PI} />
      <BlackShoe position={[0, 0, 0.85]} />
      <BlackShoe position={[0, 0, -0.85]} rotation={[0, 0.5, Math.PI]} scale={-1} />
      <AccumulativeShadows position={[0, -0.5, 0]} temporal frames={100} alphaTest={0.75} opacity={0.9}>
        <RandomizedLight radius={6} position={[5, 5, -10]} bias={0.001} />
      </AccumulativeShadows>
      <CameraControls />
      <Environment preset="city" />
    </Canvas>
  )
}

function WhiteShoe(props) {
  const { nodes, materials } = useGLTF('/models/shoes/whiteShoe.gltf');

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}

function BlackShoe(props) {
  const { nodes, materials } = useGLTF('/models/shoes/blackShoe.gltf');

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}
