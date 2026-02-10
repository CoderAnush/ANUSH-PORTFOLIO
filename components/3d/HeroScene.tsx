'use client'
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

function AnimatedSphere() {
    const sphereRef = useRef<any>()
    const materialRef = useRef<any>()

    useFrame(({ clock }) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = clock.getElapsedTime() * 0.15
            sphereRef.current.rotation.y = clock.getElapsedTime() * 0.25
        }
    })

    // Sky blue gradient colors
    const color1 = useMemo(() => new THREE.Color('#38BDF8'), [])
    const color2 = useMemo(() => new THREE.Color('#60A5FA'), [])

    return (
        <Sphere visible args={[1, 100, 200]} scale={3} ref={sphereRef}>
            <MeshDistortMaterial
                ref={materialRef}
                color={color1}
                attach="material"
                distort={0.5}
                speed={1.5}
                roughness={0.1}
                metalness={0.8}
                emissive={color2}
                emissiveIntensity={0.3}
            />
        </Sphere>
    )
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 h-full w-full opacity-40">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.3} />
                <directionalLight position={[10, 10, 5]} intensity={1.2} color="#38BDF8" />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#60A5FA" />
                <AnimatedSphere />
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false} 
                    autoRotate 
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
            </Canvas>
        </div>
    )
}
