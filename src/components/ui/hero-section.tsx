"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Shape, ExtrudeGeometry } from 'three';
import * as THREE from 'three';

const Box = ({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) => {
    const geometry = useMemo(() => {
        const shape = new Shape();
        const angleStep = Math.PI * 0.5;
        const radius = 1;

        shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1);
        shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2);
        shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3);
        shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4);

        const extrudeSettings = {
            depth: 0.3,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.05,
            bevelSegments: 20,
            curveSegments: 20
        };

        const geo = new ExtrudeGeometry(shape, extrudeSettings);
        geo.center();
        return geo;
    }, []);

    return (
        <mesh
            geometry={geometry}
            position={position}
            rotation={rotation}
        >
            <meshPhysicalMaterial
                color="#232323"
                metalness={0.8}
                roughness={0.2}
                reflectivity={0.5}
                ior={1.5}
                emissive="#000000"
                emissiveIntensity={0}
                transparent={true}
                opacity={0.9}
                transmission={0.0}
                thickness={0.5}
                clearcoat={0.5}
                clearcoatRoughness={0.1}
                sheen={0.5}
                sheenRoughness={0.5}
                sheenColor="#ffffff"
                specularIntensity={1.0}
                specularColor="#ffffff"
                iridescence={0.3}
                iridescenceIOR={1.3}
                iridescenceThicknessRange={[100, 400]}
                flatShading={false}
                side={0}
                alphaTest={0}
                depthWrite={true}
                depthTest={true}
            />
        </mesh>
    );
};

const AnimatedBoxes = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.x += delta * 0.05;
            groupRef.current.rotation.y += delta * 0.02;
        }
    });

    const boxes = useMemo(() => Array.from({ length: 50 }, (_, index) => ({
        position: [(index - 25) * 0.75, 0, 0] as [number, number, number],
        rotation: [
            (index - 10) * 0.1,
            Math.PI / 2,
            0
        ] as [number, number, number],
        id: index
    })), []);

    return (
        <group ref={groupRef}>
            {boxes.map((box) => (
                <Box
                    key={box.id}
                    position={box.position}
                    rotation={box.rotation}
                />
            ))}
        </group>
    );
};

export const Scene = () => {
    return (
        <div className="w-full h-full z-0 absolute inset-0 pointer-events-none">
            <Canvas camera={{ position: [5, 5, 20], fov: 40 }}>
                <ambientLight intensity={2} />
                <directionalLight position={[10, 10, 5]} intensity={5} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={5} color="#ccff00" />
                <AnimatedBoxes />
            </Canvas>
        </div>
    );
};
