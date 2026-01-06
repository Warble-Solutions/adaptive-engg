"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { usePathname } from "next/navigation";
import * as THREE from "three";
import { motion } from "framer-motion";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useScene } from "@/context/SceneContext";

// --- VARIANT 1: NETWORK (Connected Lines) ---
const NetworkLines = ({ visible }: { visible: boolean }) => {
    const linesRef = useRef<THREE.LineSegments>(null);
    const { scene } = useScene();
    const geometry = useMemo(() => new THREE.IcosahedronGeometry(30, 2), []);

    useFrame((state) => {
        if (linesRef.current && visible) {
            const time = state.clock.elapsedTime;
            linesRef.current.rotation.z += 0.001 * scene.speed;
            linesRef.current.rotation.x = Math.PI / 2 + Math.sin(time * 0.1) * 0.1;

            // Lerp color
            if (linesRef.current.material) {
                // @ts-ignore
                linesRef.current.material.color.lerp(new THREE.Color(scene.primaryColor), 0.05);
            }
        }
    });

    return (
        <lineSegments ref={linesRef} rotation={[Math.PI / 2, 0, 0]} visible={visible}>
            <wireframeGeometry args={[geometry]} />
            <lineBasicMaterial color={scene.primaryColor} transparent opacity={visible ? 0.05 : 0} />
        </lineSegments>
    );
};

// --- VARIANT 2: WAVES (Flowing Particles) ---
const WaveField = ({ visible }: { visible: boolean }) => {
    const count = 2000; // Dense for waves
    const mesh = useRef<THREE.InstancedMesh>(null);
    const { scene } = useScene();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const x = (Math.random() - 0.5) * 150;
            const z = (Math.random() - 0.5) * 150;
            const speed = Math.random() * 0.2 + 0.1;
            temp.push({ x, z, speed, offset: Math.random() * 100 });
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (!mesh.current || !visible) return;
        const time = state.clock.getElapsedTime();

        // Color update
        // @ts-ignore
        mesh.current.material.color.lerp(new THREE.Color(scene.primaryColor), 0.05);

        for (let i = 0; i < count; i++) {
            const { x, z, offset } = particles[i];
            // Sine wave formula
            const y = Math.sin(x * 0.1 + time * scene.speed + offset) * 5 + Math.sin(z * 0.1 + time * scene.speed) * 5;

            dummy.position.set(x, y - 10, z - 20); // Lower it a bit
            const s = (Math.sin(time * 2 + offset) + 1.5) * 0.15;
            dummy.scale.set(s, s, s);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        }
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]} visible={visible}>
            <sphereGeometry args={[0.5, 8, 8]} />
            <meshBasicMaterial color={scene.primaryColor} transparent opacity={0.4} blending={THREE.AdditiveBlending} />
        </instancedMesh>
    );
};

// --- VARIANT 3: GRID (Structured/Industrial) ---
const GridStructure = ({ visible }: { visible: boolean }) => {
    const count = 500;
    const mesh = useRef<THREE.InstancedMesh>(null);
    const { scene } = useScene();
    const dummy = useMemo(() => new THREE.Object3D(), []);

    const blocks = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            // Grid layout
            const x = Math.floor((Math.random() - 0.5) * 40) * 4;
            const y = Math.floor((Math.random() - 0.5) * 20) * 4;
            const z = Math.floor((Math.random() - 0.5) * 20) * 4;
            temp.push({ x, y, z });
        }
        return temp;
    }, []);

    useFrame((state) => {
        if (!mesh.current || !visible) return;
        const time = state.clock.getElapsedTime();

        // Color update
        // @ts-ignore
        mesh.current.material.color.lerp(new THREE.Color(scene.primaryColor), 0.05);

        // Rotate entire structure
        mesh.current.rotation.y = time * 0.05 * scene.speed;
        mesh.current.rotation.x = Math.sin(time * 0.1) * 0.1;

        for (let i = 0; i < count; i++) {
            const { x, y, z } = blocks[i];
            // Slight breathing effect
            const dist = Math.sqrt(x * x + y * y + z * z);
            const scale = 1 + Math.sin(time + dist * 0.1) * 0.2;

            dummy.position.set(x, y, z);
            dummy.scale.set(scale, scale, scale);
            dummy.updateMatrix();
            mesh.current.setMatrixAt(i, dummy.matrix);
        }
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]} visible={visible}>
            <boxGeometry args={[1, 1, 1]} />
            {/* Wireframe look */}
            <meshBasicMaterial color={scene.primaryColor} wireframe transparent opacity={0.3} />
        </instancedMesh>
    );
}


// --- MAIN CONTROLLER ---
export default function ParticleStream() {
    const pathname = usePathname();
    const { scene } = useScene();

    // Enhanced CSS Fallback
    const FallbackInfo = (
        <div className="w-full h-full bg-dark relative overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(4,154,137,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(4,154,137,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>
    );

    return (
        <div className="fixed inset-0 -z-10 bg-dark pointer-events-none">
            <ErrorBoundary fallback={FallbackInfo}>
                <Canvas camera={{ position: [0, 0, 50], fov: 75 }} gl={{ powerPreference: "default" }}>
                    {/* Render all variants but toggle visibility based on state */}
                    {/* We use visibility prop instead of conditional rendering to keep geometries cached */}
                    <NetworkLines visible={scene.variant === 'network'} />
                    <WaveField visible={scene.variant === 'waves'} />
                    <GridStructure visible={scene.variant === 'grid'} />

                    {/* Default Particles - Always visible but subtle */}
                    <ambientLight intensity={0.5} />
                </Canvas>
            </ErrorBoundary>
        </div>
    );
}
