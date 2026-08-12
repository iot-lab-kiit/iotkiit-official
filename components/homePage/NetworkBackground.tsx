"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  AdaptiveDpr,
  Float,
  Instance,
  Instances,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

/* ───────────────────────── helpers ───────────────────────── */

const _v = new THREE.Vector3();
const _s = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _m = new THREE.Matrix4();
const pointer = { x: 0, y: 0 };

type Link = { a: number; b: number };
type Packet = { i: number; j: number; t: number; speed: number };

interface NetworkData {
  positions: THREE.Vector3[];
  links: Link[];
  linePositions: Float32Array;
  lineColors: Float32Array;
  nodeScales: number[];
}

function buildNetworkData(isMobile: boolean): NetworkData {
  const count = isMobile ? 50 : 110;
  const R = 4.4;
  const maxDist = isMobile ? 1.9 : 2.3;
  const positions: THREE.Vector3[] = [];

  for (let i = 0; i < count; i++) {
    const r = 1.1 + Math.cbrt(Math.random()) * (R - 1.1);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions.push(
      new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi) * 0.45
      )
    );
  }

  const links: Link[] = [];
  const seen = new Set<string>();
  for (let i = 0; i < count; i++) {
    const ds: Array<[number, number]> = [];
    for (let j = 0; j < count; j++) {
      if (i === j) continue;
      ds.push([positions[i].distanceToSquared(positions[j]), j]);
    }
    ds.sort((a, b) => a[0] - b[0]);
    let added = 0;
    for (const [d2, j] of ds) {
      if (d2 > maxDist * maxDist) break;
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (seen.has(key)) continue;
      seen.add(key);
      links.push({ a: i, b: j });
      if (++added >= (isMobile ? 1 : 2)) break;
    }
  }

  const linePositions = new Float32Array(links.length * 6);
  const lineColors = new Float32Array(links.length * 6);
  const dim = new THREE.Color("#8b9fde");
  const vivid = new THREE.Color("#2460da");
  const tmp = new THREE.Color();
  links.forEach(({ a, b }, k) => {
    const pa = positions[a];
    const pb = positions[b];
    linePositions.set([pa.x, pa.y, pa.z, pb.x, pb.y, pb.z], k * 6);
    const d = Math.min(1, pa.distanceTo(pb) / maxDist);
    tmp.copy(dim).lerp(vivid, 1 - d);
    lineColors.set([tmp.r, tmp.g, tmp.b, tmp.r, tmp.g, tmp.b], k * 6);
  });

  const nodeScales = positions.map(
    () => 0.05 + Math.pow(Math.random(), 2) * 0.07
  );

  return { positions, links, linePositions, lineColors, nodeScales };
}

function newPacket(data: NetworkData, prev?: Packet): Packet {
  let link = data.links[(Math.random() * data.links.length) | 0];
  if (prev && data.links.length > 1) {
    while (link.a === prev.i && link.b === prev.j) {
      link = data.links[(Math.random() * data.links.length) | 0];
    }
  }
  return { i: link.a, j: link.b, t: 0, speed: 0.1 + Math.random() * 0.2 };
}

/* ───────────────────────── scene ───────────────────────── */

function NetworkScene({
  isMobile,
  reducedMotion,
}: {
  isMobile: boolean;
  reducedMotion: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const packetRef = useRef<THREE.InstancedMesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const baseRotation = useRef(0);
  const targetRotation = useRef({ x: 0, y: 0 });

  const data = useMemo(() => buildNetworkData(isMobile), [isMobile]);
  const packetStates = useMemo<Packet[]>(() => {
    const count = isMobile ? 5 : 10;
    return Array.from({ length: count }, () => newPacket(data));
  }, [data, isMobile]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((state, delta) => {
    if (reducedMotion || !groupRef.current) return;

    const t = state.clock.elapsedTime;
    const g = groupRef.current;

    baseRotation.current += delta * 0.05;
    targetRotation.current.x = THREE.MathUtils.damp(
      targetRotation.current.x,
      pointer.x,
      3,
      delta
    );
    targetRotation.current.y = THREE.MathUtils.damp(
      targetRotation.current.y,
      pointer.y,
      3,
      delta
    );

    g.rotation.y = baseRotation.current + targetRotation.current.x * 0.45;
    g.rotation.x = Math.sin(t * 0.22) * 0.06 + targetRotation.current.y * 0.28;

    const mesh = packetRef.current;
    if (mesh) {
      packetStates.forEach((pk, k) => {
        pk.t += delta * pk.speed;
        if (pk.t >= 1) Object.assign(pk, newPacket(data, pk));
        const a = data.positions[pk.i];
        const b = data.positions[pk.j];
        _v.lerpVectors(a, b, pk.t);
        _s.setScalar(0.8 + Math.sin(pk.t * Math.PI) * 0.55);
        _m.compose(_v, _q, _s);
        mesh.setMatrixAt(k, _m);
      });
      mesh.instanceMatrix.needsUpdate = true;
    }

    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.35;
    if (ring2Ref.current) ring2Ref.current.rotation.z -= delta * 0.26;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} />

      {/* connection lines */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[data.linePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[data.lineColors, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.32}
          depthWrite={false}
        />
      </lineSegments>

      {/* device nodes */}
      <Instances limit={data.positions.length} range={data.positions.length}>
        <sphereGeometry args={[1, 10, 10]} />
        <meshBasicMaterial toneMapped={false} />
        {data.positions.map((p, i) => (
          <Instance
            key={i}
            position={[p.x, p.y, p.z]}
            scale={data.nodeScales[i]}
            color={i % 7 === 0 ? "#24bff3" : "#2460da"}
          />
        ))}
      </Instances>

      {/* orbit rings */}
      <mesh ref={ring1Ref} rotation={[1.25, 0.35, 0]}>
        <torusGeometry args={[1.95, 0.015, 8, 72]} />
        <meshBasicMaterial
          color="#24bff3"
          transparent
          opacity={0.4}
          toneMapped={false}
        />
      </mesh>
      <mesh ref={ring2Ref} rotation={[0.85, -0.55, 0]}>
        <torusGeometry args={[2.45, 0.01, 8, 72]} />
        <meshBasicMaterial
          color="#3a78ff"
          transparent
          opacity={0.28}
          toneMapped={false}
        />
      </mesh>

      {/* core hub */}
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.7}>
        <mesh>
          <sphereGeometry args={[0.85, 48, 48]} />
          <meshStandardMaterial
            color="#2460da"
            emissive="#3a78ff"
            emissiveIntensity={0.35}
            roughness={0.25}
            metalness={0.6}
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[1.55, 1]} />
          <meshBasicMaterial
            wireframe
            color="#8b9fde"
            transparent
            opacity={0.3}
            toneMapped={false}
          />
        </mesh>
      </Float>

      {/* data packets traveling the links */}
      <instancedMesh
        ref={packetRef}
        args={[undefined as any, undefined as any, packetStates.length]}
        frustumCulled={false}
      >
        <sphereGeometry args={[0.09, 10, 10]} />
        <meshBasicMaterial
          color="#24bff3"
          transparent
          opacity={0.95}
          toneMapped={false}
        />
      </instancedMesh>
    </group>
  );
}

/* ───────────────────────── root ───────────────────────── */

const NetworkBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 720px)");
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setIsMobile(mq.matches);
      setReducedMotion(rm.matches);
    };
    update();
    mq.addEventListener("change", update);
    rm.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      rm.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden
    >
      <Canvas
        frameloop={reducedMotion ? "demand" : inView ? "always" : "never"}
        dpr={[1, isMobile ? 1.5 : 2]}
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{
          alpha: true,
          antialias: !isMobile,
          powerPreference: "high-performance",
        }}
      >
        <AdaptiveDpr pixelated />
        <NetworkScene isMobile={isMobile} reducedMotion={reducedMotion} />
        <Sparkles
          count={isMobile ? 50 : 140}
          scale={[9, 9, 3]}
          size={isMobile ? 1.5 : 2.5}
          speed={0.35}
          opacity={0.55}
          color="#3a78ff"
          noise={1}
        />
      </Canvas>
    </div>
  );
};

export default NetworkBackground;
