import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import cardModel from "@/assets/yustina-portfolio-card-2.glb.media.json";

// the pass is modelled at ~0.086 x 0.054 units; scale it up to a comfortable size
const TARGET_W = 4.6;

function Card() {
  const { scene } = useGLTF(cardModel.url);
  const { gl } = useThree();
  const group = useRef<THREE.Group>(null!);

  const fit = useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    return { scale: TARGET_W / (size.x || 1), center, ratio: (size.x || 1) / (size.y || 1) };
  }, [scene]);

  // crisp print + a touch more studio reflection on the laminate
  useEffect(() => {
    const max = gl.capabilities.getMaxAnisotropy();
    scene.traverse((o) => {
      const mat = (o as THREE.Mesh).material;
      const list = Array.isArray(mat) ? mat : mat ? [mat] : [];
      for (const raw of list) {
        const m = raw as THREE.MeshPhysicalMaterial;
        for (const t of [m.map, m.normalMap, m.metalnessMap, m.roughnessMap]) {
          if (t) {
            t.anisotropy = max;
            t.needsUpdate = true;
          }
        }
        m.envMapIntensity = 1.15;
        m.needsUpdate = true;
      }
    });
  }, [gl, scene]);

  // drag-to-rotate with inertia
  const st = useRef({ drag: false, x: 0, y: 0, vx: 0, vy: 0, rx: -0.1, ry: -0.28, idle: 0 });
  useEffect(() => {
    const el = gl.domElement;
    const down = (e: PointerEvent) => {
      const s = st.current;
      s.drag = true;
      s.x = e.clientX;
      s.y = e.clientY;
      s.vx = s.vy = 0;
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
    };
    const move = (e: PointerEvent) => {
      const s = st.current;
      if (!s.drag) return;
      const dx = e.clientX - s.x;
      const dy = e.clientY - s.y;
      s.x = e.clientX;
      s.y = e.clientY;
      s.vy = dx * 0.012;
      s.vx = dy * 0.012;
      s.ry += s.vy;
      s.rx += s.vx;
      s.idle = 0;
    };
    const up = () => {
      st.current.drag = false;
      el.style.cursor = "grab";
    };
    el.style.cursor = "grab";
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
    };
  }, [gl]);

  useFrame((state, dt) => {
    const a = state.size.width / state.size.height;
    // keep the whole pass inside the frame: fit by width on portrait, by height on landscape
    const vH = 2 * Math.tan(THREE.MathUtils.degToRad(19));
    const vW = vH * a;
    const cardH = TARGET_W / (fit.ratio || 1.6);
    state.camera.position.z = Math.max((TARGET_W * 1.34) / vW, (cardH * 1.75) / vH);
    const s = st.current;
    if (!s.drag) {
      s.ry += s.vy;
      s.rx += s.vx;
      s.vx *= 0.95;
      s.vy *= 0.95;
      s.idle += dt;
      if (s.idle > 3.5 && Math.abs(s.vy) < 0.002) s.ry += dt * 0.12;
    }
    group.current.rotation.set(s.rx, s.ry, 0);
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
  });

  return (
    <group ref={group}>
      <group scale={fit.scale}>
        <group position={[-fit.center.x, -fit.center.y, -fit.center.z]}>
          <primitive object={scene} />
        </group>
      </group>
    </group>
  );
}

export default function Card3D() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5.2], fov: 38 }}
      style={{ touchAction: "none" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} />
      <Suspense fallback={null}>
        <Card />
      </Suspense>
      <ContactShadows position={[0, -1.55, 0]} opacity={0.35} blur={2.6} scale={7} far={2} color="#c2185b" />
      <Environment resolution={256}>
        <Lightformer intensity={3} position={[0, 3, 4]} scale={[8, 1.2, 1]} />
        <Lightformer intensity={2} position={[-4, 0, 2]} rotation-y={Math.PI / 2} scale={[4, 3, 1]} color="#ffd6e7" />
        <Lightformer intensity={2} position={[4, -1, 2]} rotation-y={-Math.PI / 2} scale={[4, 3, 1]} color="#c9ffe0" />
        <Lightformer intensity={1} position={[0, 0, -5]} scale={[10, 10, 1]} />
      </Environment>
    </Canvas>
  );
}
