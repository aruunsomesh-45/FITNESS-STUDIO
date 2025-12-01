"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export const HorizonHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);
    const scrollProgressRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const smoothCameraPos = useRef({ x: 0, y: 30, z: 100 });
    const [scrollProgress, setScrollProgress] = useState(0);
    const [currentSection, setCurrentSection] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const totalSections = 3; // Horizon, Cosmos, Infinity

    const threeRefs = useRef<any>({
        scene: null,
        camera: null,
        renderer: null,
        composer: null,
        stars: [],
        nebula: null,
        mountains: [],
        animationId: null,
        locations: [],
        targetCameraX: 0,
        targetCameraY: 30,
        targetCameraZ: 100
    });

    // Initialize Three.js
    useEffect(() => {
        if (!canvasRef.current) return;

        const initThree = () => {
            const { current: refs } = threeRefs;

            // Scene setup
            refs.scene = new THREE.Scene();
            refs.scene.fog = new THREE.FogExp2(0x000000, 0.00025);

            // Camera
            refs.camera = new THREE.PerspectiveCamera(
                75,
                window.innerWidth / window.innerHeight,
                0.1,
                20000
            );
            refs.camera.position.set(0, 20, 100);

            // Renderer
            refs.renderer = new THREE.WebGLRenderer({
                canvas: canvasRef.current as HTMLCanvasElement,
                antialias: true,
                alpha: true
            });
            refs.renderer.setSize(window.innerWidth, window.innerHeight);
            refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            refs.renderer.toneMapping = THREE.ACESFilmicToneMapping;
            refs.renderer.toneMappingExposure = 0.5;

            // Post-processing
            refs.composer = new EffectComposer(refs.renderer);
            const renderPass = new RenderPass(refs.scene, refs.camera);
            refs.composer.addPass(renderPass);

            const bloomPass = new UnrealBloomPass(
                new THREE.Vector2(window.innerWidth, window.innerHeight),
                0.8,
                0.4,
                0.85
            );
            refs.composer.addPass(bloomPass);

            // Create scene elements
            createStarField();
            createNebula();
            createMountains();
            createAtmosphere();
            getLocation();

            // Start animation
            animate();

            setIsReady(true);
        };

        const createStarField = () => {
            const { current: refs } = threeRefs;
            const starCount = 5000;

            for (let i = 0; i < 3; i++) {
                const geometry = new THREE.BufferGeometry();
                const positions = new Float32Array(starCount * 3);
                const colors = new Float32Array(starCount * 3);
                const sizes = new Float32Array(starCount);

                for (let j = 0; j < starCount; j++) {
                    const radius = 200 + Math.random() * 800;
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos(Math.random() * 2 - 1);

                    positions[j * 3] = radius * Math.sin(phi) * Math.cos(theta);
                    positions[j * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
                    positions[j * 3 + 2] = radius * Math.cos(phi);

                    // Color variation
                    const color = new THREE.Color();
                    const colorChoice = Math.random();
                    if (colorChoice < 0.7) {
                        color.setHSL(0, 0, 0.8 + Math.random() * 0.2);
                    } else if (colorChoice < 0.9) {
                        color.setHSL(0.08, 0.5, 0.8);
                    } else {
                        color.setHSL(0.6, 0.5, 0.8);
                    }

                    colors[j * 3] = color.r;
                    colors[j * 3 + 1] = color.g;
                    colors[j * 3 + 2] = color.b;

                    sizes[j] = Math.random() * 2 + 0.5;
                }

                geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
                geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
                geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

                const material = new THREE.ShaderMaterial({
                    uniforms: {
                        time: { value: 0 },
                        depth: { value: i }
                    },
                    vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            uniform float time;
            uniform float depth;
            
            void main() {
              vColor = color;
              vec3 pos = position;
              
              // Slow rotation based on depth
              float angle = time * 0.05 * (1.0 - depth * 0.3);
              mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
              pos.xy = rot * pos.xy;
              
              vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
              gl_PointSize = size * (300.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `,
                    fragmentShader: `
            varying vec3 vColor;
            
            void main() {
              float dist = length(gl_PointCoord - vec2(0.5));
              if (dist > 0.5) discard;
              
              float opacity = 1.0 - smoothstep(0.0, 0.5, dist);
              gl_FragColor = vec4(vColor, opacity);
            }
          `,
                    transparent: true,
                    blending: THREE.AdditiveBlending,
                    depthWrite: false
                });

                const stars = new THREE.Points(geometry, material);
                refs.scene.add(stars);
                refs.stars.push(stars);
            }
        };

        const createNebula = () => {
            const { current: refs } = threeRefs;

            const geometry = new THREE.PlaneGeometry(8000, 4000, 100, 100);
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 0 },
                    color1: { value: new THREE.Color(0x0033ff) },
                    color2: { value: new THREE.Color(0xff0066) },
                    opacity: { value: 0.3 }
                },
                vertexShader: `
          varying vec2 vUv;
          varying float vElevation;
          uniform float time;
          
          void main() {
            vUv = uv;
            vec3 pos = position;
            
            float elevation = sin(pos.x * 0.01 + time) * cos(pos.y * 0.01 + time) * 20.0;
            pos.z += elevation;
            vElevation = elevation;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
                fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          uniform float opacity;
          uniform float time;
          varying vec2 vUv;
          varying float vElevation;
          
          void main() {
            float mixFactor = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time);
            vec3 color = mix(color1, color2, mixFactor * 0.5 + 0.5);
            
            float alpha = opacity * (1.0 - length(vUv - 0.5) * 2.0);
            alpha *= 1.0 + vElevation * 0.01;
            
            gl_FragColor = vec4(color, alpha);
          }
        `,
                transparent: true,
                blending: THREE.AdditiveBlending,
                side: THREE.DoubleSide,
                depthWrite: false
            });

            const nebula = new THREE.Mesh(geometry, material);
            nebula.position.z = -1050;
            refs.scene.add(nebula);
            refs.nebula = nebula;
        };

        const createMountains = () => {
            const { current: refs } = threeRefs;

            const layers = [
                { distance: -50, height: 60, color: 0x1a1a2e, opacity: 1 },
                { distance: -100, height: 80, color: 0x16213e, opacity: 0.8 },
                { distance: -150, height: 100, color: 0x0f3460, opacity: 0.6 },
                { distance: -200, height: 120, color: 0x0a4668, opacity: 0.4 }
            ];

            layers.forEach((layer: any, index: number) => {
                const points = [];
                const segments = 50;

                for (let i = 0; i <= segments; i++) {
                    const x = (i / segments - 0.5) * 1000;
                    const y = Math.sin(i * 0.1) * layer.height +
                        Math.sin(i * 0.05) * layer.height * 0.5 +
                        Math.random() * layer.height * 0.2 - 100;
                    points.push(new THREE.Vector2(x, y));
                }

                points.push(new THREE.Vector2(5000, -300));
                points.push(new THREE.Vector2(-5000, -300));

                const shape = new THREE.Shape(points);
                const geometry = new THREE.ShapeGeometry(shape);
                const material = new THREE.MeshBasicMaterial({
                    color: layer.color,
                    transparent: true,
                    opacity: layer.opacity,
                    side: THREE.DoubleSide
                });

                const mountain = new THREE.Mesh(geometry, material);
                mountain.position.z = layer.distance;
                mountain.position.y = -50; // Adjusted base height
                mountain.userData = { baseZ: layer.distance, index };
                refs.scene.add(mountain);
                refs.mountains.push(mountain);
            });
        };

        const createAtmosphere = () => {
            const { current: refs } = threeRefs;

            const geometry = new THREE.SphereGeometry(600, 32, 32);
            const material = new THREE.ShaderMaterial({
                uniforms: {
                    time: { value: 0 }
                },
                vertexShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
                fragmentShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          uniform float time;
          
          void main() {
            float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            vec3 atmosphere = vec3(0.3, 0.6, 1.0) * intensity;
            
            float pulse = sin(time * 2.0) * 0.1 + 0.9;
            atmosphere *= pulse;
            
            gl_FragColor = vec4(atmosphere, intensity * 0.25);
          }
        `,
                side: THREE.BackSide,
                blending: THREE.AdditiveBlending,
                transparent: true
            });

            const atmosphere = new THREE.Mesh(geometry, material);
            refs.scene.add(atmosphere);
        };

        const getLocation = () => {
            const { current: refs } = threeRefs;
            const locations: number[] = [];
            refs.mountains.forEach((mountain: THREE.Mesh, i: number) => {
                locations[i] = mountain.position.z
            })
            refs.locations = locations
        }

        const animate = () => {
            const { current: refs } = threeRefs;
            refs.animationId = requestAnimationFrame(animate);

            const time = Date.now() * 0.001;

            // Update stars
            refs.stars.forEach((starField: THREE.Points) => {
                if (starField.material instanceof THREE.ShaderMaterial) {
                    starField.material.uniforms.time.value = time;
                }
            });

            // Update nebula
            if (refs.nebula && refs.nebula.material instanceof THREE.ShaderMaterial) {
                refs.nebula.material.uniforms.time.value = time * 0.5;
            }

            // Smooth camera movement
            if (refs.camera) {
                const smoothingFactor = 0.05;

                smoothCameraPos.current.x += (refs.targetCameraX - smoothCameraPos.current.x) * smoothingFactor;
                smoothCameraPos.current.y += (refs.targetCameraY - smoothCameraPos.current.y) * smoothingFactor;
                smoothCameraPos.current.z += (refs.targetCameraZ - smoothCameraPos.current.z) * smoothingFactor;

                const floatX = Math.sin(time * 0.1) * 2;
                const floatY = Math.cos(time * 0.15) * 1;

                refs.camera.position.x = smoothCameraPos.current.x + floatX;
                refs.camera.position.y = smoothCameraPos.current.y + floatY;
                refs.camera.position.z = smoothCameraPos.current.z;
                refs.camera.lookAt(0, 10, -600);
            }

            // Parallax mountains
            refs.mountains.forEach((mountain: THREE.Mesh, i: number) => {
                const parallaxFactor = 1 + i * 0.5;
                mountain.position.x = Math.sin(time * 0.1) * 2 * parallaxFactor;
            });

            if (refs.composer) {
                refs.composer.render();
            }
        };

        initThree();

        const handleResize = () => {
            const { current: refs } = threeRefs;
            if (refs.camera && refs.renderer && refs.composer) {
                refs.camera.aspect = window.innerWidth / window.innerHeight;
                refs.camera.updateProjectionMatrix();
                refs.renderer.setSize(window.innerWidth, window.innerHeight);
                refs.composer.setSize(window.innerWidth, window.innerHeight);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            const { current: refs } = threeRefs;
            if (refs.animationId) cancelAnimationFrame(refs.animationId);
            window.removeEventListener('resize', handleResize);

            refs.stars.forEach((s: any) => { s.geometry.dispose(); s.material.dispose(); });
            refs.mountains.forEach((m: any) => { m.geometry.dispose(); m.material.dispose(); });
            if (refs.nebula) { refs.nebula.geometry.dispose(); refs.nebula.material.dispose(); }
            if (refs.renderer) refs.renderer.dispose();
        };
    }, []);

    // Scroll handling
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            // We calculate progress based on the container's height and position
            const container = containerRef.current;
            const rect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate how far we've scrolled into the container
            // Start: rect.top = 0 (top of viewport)
            // End: rect.bottom = viewportHeight (bottom of viewport)
            // Total scrollable distance = containerHeight - viewportHeight

            const scrollDist = -rect.top;
            const maxScroll = container.offsetHeight - viewportHeight;

            // Clamp progress between 0 and 1
            let progress = Math.max(0, Math.min(scrollDist / maxScroll, 1));

            setScrollProgress(progress);
            const newSection = Math.floor(progress * totalSections);
            setCurrentSection(Math.min(newSection, totalSections - 1));

            const { current: refs } = threeRefs;

            // Camera positions for each section
            const cameraPositions = [
                { x: 0, y: 30, z: 100 },     // Horizon
                { x: 0, y: 40, z: -50 },     // Cosmos
                { x: 0, y: 50, z: -700 }     // Infinity
            ];

            // Interpolate camera position
            // Map progress 0..1 to camera path
            // We can just use the raw progress to interpolate between keyframes if we want continuous movement

            // Simple interpolation between 3 points
            let targetPos;
            if (progress < 0.5) {
                // Interpolate between 0 and 1
                const p = progress * 2; // 0..1
                targetPos = {
                    x: cameraPositions[0].x + (cameraPositions[1].x - cameraPositions[0].x) * p,
                    y: cameraPositions[0].y + (cameraPositions[1].y - cameraPositions[0].y) * p,
                    z: cameraPositions[0].z + (cameraPositions[1].z - cameraPositions[0].z) * p
                };
            } else {
                // Interpolate between 1 and 2
                const p = (progress - 0.5) * 2; // 0..1
                targetPos = {
                    x: cameraPositions[1].x + (cameraPositions[2].x - cameraPositions[1].x) * p,
                    y: cameraPositions[1].y + (cameraPositions[2].y - cameraPositions[1].y) * p,
                    z: cameraPositions[1].z + (cameraPositions[2].z - cameraPositions[1].z) * p
                };
            }

            refs.targetCameraX = targetPos.x;
            refs.targetCameraY = targetPos.y;
            refs.targetCameraZ = targetPos.z;

            // Mountain parallax
            refs.mountains.forEach((mountain: THREE.Mesh, i: number) => {
                const speed = 1 + i * 0.9;
                // Move mountains away as we fly forward
                // But keep them somewhat visible for effect

                // If we want the "fly through" effect, mountains should move past camera (z > camera.z)
                // or camera moves past them.

                // Let's just rely on camera movement for the main effect, and add subtle shift to mountains
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [totalSections]);

    const sections = [
        {
            title: 'Zoku Fitness',
            subtitle: ['Where vision meets reality,', 'we shape the future of tomorrow']
        },
        {
            title: 'COSMOS',
            subtitle: ['Beyond the boundaries of imagination,', 'lies the universe of possibilities']
        },
        {
            title: 'INFINITY',
            subtitle: ['In the space between thought and creation,', 'we find the essence of true innovation']
        }
    ];

    return (
        <div ref={containerRef} className="relative w-full h-[300vh] bg-black">
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

                {/* Overlay Content */}
                <div className="absolute inset-0 pointer-events-none z-10 flex flex-col items-center justify-center mix-blend-difference text-white">
                    {sections.map((section, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000",
                                currentSection === idx ? "opacity-100" : "opacity-0"
                            )}
                        >
                            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-6 text-center">
                                {section.title}
                            </h1>
                            <div className="text-xl md:text-2xl font-light tracking-widest text-center space-y-2">
                                {section.subtitle.map((line, i) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* UI Elements */}
                <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 mix-blend-difference text-white hidden md:block">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-px h-20 bg-white/50"></div>
                        <span className="writing-vertical-rl text-xs tracking-[0.3em] uppercase">Space</span>
                        <div className="w-px h-20 bg-white/50"></div>
                    </div>
                </div>

                <div className="absolute right-8 bottom-12 z-20 mix-blend-difference text-white flex flex-col items-end gap-2">
                    <span className="text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-white transition-all duration-300 ease-out"
                            style={{ width: `${scrollProgress * 100}%` }}
                        />
                    </div>
                    <span className="text-xs font-mono">
                        {String(currentSection + 1).padStart(2, '0')} / {String(totalSections).padStart(2, '0')}
                    </span>
                </div>
            </div>
        </div>
    );
};
