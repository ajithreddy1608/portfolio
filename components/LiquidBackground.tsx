"use client";

import React, { useEffect, useRef } from "react";

export default function LiquidBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const deepLayerRef = useRef<HTMLDivElement | null>(null);
  const gridLayerRef = useRef<HTMLDivElement | null>(null);
  const cursorGlowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    // Mutable cursor & physics state (Zero React re-renders on mousemove)
    const state = {
      targetX: window.innerWidth * 0.5,
      targetY: window.innerHeight * 0.35,
      currentX: window.innerWidth * 0.5,
      currentY: window.innerHeight * 0.35,
      prevX: window.innerWidth * 0.5,
      prevY: window.innerHeight * 0.35,
      velocity: 0,
      targetVelocity: 0,
      parallaxX: 0,
      parallaxY: 0,
      isHoveringInteractive: false,
      isMouseDown: false,
      trail: [] as { x: number; y: number; age: number; force: number }[],
    };

    const handleMouseMove = (e: MouseEvent) => {
      state.targetX = e.clientX;
      state.targetY = e.clientY;

      const vx = e.clientX - state.prevX;
      const vy = e.clientY - state.prevY;
      const speed = Math.sqrt(vx * vx + vy * vy);
      state.targetVelocity = Math.min(speed / 15, 2.5);
      state.prevX = e.clientX;
      state.prevY = e.clientY;

      // Add to ripple trail (max 12 points)
      if (speed > 2 && state.trail.length < 12) {
        state.trail.push({
          x: e.clientX,
          y: e.clientY,
          age: 0,
          force: Math.min(speed / 20, 1.2),
        });
      }

      // Check if hovering over interactive element
      const target = e.target as HTMLElement | null;
      if (target) {
        state.isHoveringInteractive =
          target.closest("a, button, input, textarea, select, .liquid-card, [role='button']") !== null;
      }
    };

    const handleMouseDown = () => {
      state.isMouseDown = true;
      state.targetVelocity = 3.0;
      state.trail.push({
        x: state.targetX,
        y: state.targetY,
        age: 0,
        force: 2.0,
      });
    };

    const handleMouseUp = () => {
      state.isMouseDown = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });

    // =========================================================================
    // WebGL Liquid Shader Implementation
    // =========================================================================
    const canvas = canvasRef.current;
    let gl: WebGLRenderingContext | null = null;
    let program: WebGLProgram | null = null;
    let animId: number;

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = (a_position + 1.0) * 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Liquid Glass Fragment Shader
    const fsSource = `
      precision mediump float;
      varying vec2 v_uv;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;
      uniform float u_velocity;
      uniform float u_hover;
      uniform vec2 u_trail[10];
      uniform float u_trail_age[10];

      // Simplex-inspired hash and smooth noise
      vec2 hash2(vec2 p) {
        p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
        return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(mix(dot(hash2(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)),
                       dot(hash2(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
                   mix(dot(hash2(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                       dot(hash2(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
      }

      float liquidHeight(vec2 uv, float t) {
        // Base organic flowing waves
        float h = noise(uv * 2.5 + vec2(t * 0.15, t * 0.1)) * 0.5;
        h += noise(uv * 5.0 - vec2(t * 0.2, t * 0.18)) * 0.25;
        h += noise(uv * 9.0 + vec2(t * 0.08, -t * 0.12)) * 0.12;

        // Reactive cursor ripple & displacement
        vec2 mouseUV = u_mouse / u_resolution;
        mouseUV.y = 1.0 - mouseUV.y; // Match WebGL coords
        vec2 diff = uv - mouseUV;
        diff.x *= (u_resolution.x / u_resolution.y);
        float dist = length(diff);

        // Core dynamic wave near cursor
        float cursorWave = sin(dist * 38.0 - t * 4.5) * exp(-dist * 4.8) * (0.35 + u_velocity * 0.45);
        h += cursorWave;

        // Trail ripples propagation
        for (int i = 0; i < 10; i++) {
          if (u_trail_age[i] > 0.0 && u_trail_age[i] < 1.0) {
            vec2 tUV = u_trail[i] / u_resolution;
            tUV.y = 1.0 - tUV.y;
            vec2 tDiff = uv - tUV;
            tDiff.x *= (u_resolution.x / u_resolution.y);
            float tDist = length(tDiff);
            float waveFade = (1.0 - u_trail_age[i]);
            float ripple = sin(tDist * 32.0 - u_trail_age[i] * 12.0) * exp(-tDist * 5.5) * waveFade * 0.25;
            h += ripple;
          }
        }

        return h;
      }

      void main() {
        vec2 uv = v_uv;
        float t = u_time * 0.8;

        // Calculate surface normal via height differentials (Glass refraction)
        vec2 eps = vec2(1.0 / u_resolution.x, 1.0 / u_resolution.y) * 2.2;
        float hL = liquidHeight(uv - vec2(eps.x, 0.0), t);
        float hR = liquidHeight(uv + vec2(eps.x, 0.0), t);
        float hD = liquidHeight(uv - vec2(0.0, eps.y), t);
        float hU = liquidHeight(uv + vec2(0.0, eps.y), t);
        vec3 normal = normalize(vec3(hL - hR, hD - hU, 0.12));

        // Cursor position in WebGL UV
        vec2 mouseUV = u_mouse / u_resolution;
        mouseUV.y = 1.0 - mouseUV.y;
        vec2 toMouse = mouseUV - uv;
        toMouse.x *= (u_resolution.x / u_resolution.y);
        float distToMouse = length(toMouse);

        // Deep Liquid Glass Lighting & Shading
        // Base Deep Navy / Black
        vec3 deepBlack = vec3(0.012, 0.027, 0.071);
        vec3 electricBlue = vec3(0.12, 0.38, 0.95);
        vec3 cyanGlow = vec3(0.02, 0.72, 0.88);
        vec3 brightHighlight = vec3(0.85, 0.95, 1.0);

        // Ambient glass color blend based on height and slope
        float slope = length(normal.xy);
        vec3 col = deepBlack;
        col = mix(col, electricBlue * 0.25, smoothstep(-0.2, 0.4, hR));
        col = mix(col, cyanGlow * 0.32, slope * 2.8);

        // Cursor dynamic spotlight illumination
        float lightRadius = 0.55 + u_hover * 0.2;
        float spotlight = smoothstep(lightRadius, 0.0, distToMouse);
        vec3 lightDir = normalize(vec3(toMouse, 0.35));
        float diffuse = max(dot(normal, lightDir), 0.0);
        col += mix(electricBlue, cyanGlow, 0.5) * spotlight * (0.45 + diffuse * 0.55);

        // Specular reflections on wave crests
        vec3 viewDir = vec3(0.0, 0.0, 1.0);
        vec3 halfDir = normalize(lightDir + viewDir);
        float spec = pow(max(dot(normal, halfDir), 0.0), 28.0) * spotlight;
        col += brightHighlight * spec * (0.8 + u_velocity * 0.5);

        // Edge Fresnel reflection
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.5);
        col += cyanGlow * fresnel * 0.35;

        // Subtle vignette at edges
        vec2 vig = uv * (1.0 - uv);
        float v = vig.x * vig.y * 15.0;
        col *= clamp(v, 0.5, 1.0);

        gl_FragColor = vec4(col, 0.72);
      }
    `;

    // Attempt WebGL setup
    if (canvas && !prefersReduced) {
      try {
        gl = canvas.getContext("webgl", {
          alpha: true,
          antialias: false,
          depth: false,
          powerPreference: "high-performance",
        });

        if (gl) {
          const createShader = (type: number, source: string) => {
            const shader = gl!.createShader(type);
            if (!shader) return null;
            gl!.shaderSource(shader, source);
            gl!.compileShader(shader);
            return shader;
          };

          const vs = createShader(gl.VERTEX_SHADER, vsSource);
          const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
          if (vs && fs) {
            program = gl.createProgram();
            if (program) {
              gl.attachShader(program, vs);
              gl.attachShader(program, fs);
              gl.linkProgram(program);
            }
          }
        }
      } catch (err) {
        console.warn("WebGL liquid shader not available, running Canvas fallback.", err);
      }
    }

    // Set up full-screen buffer for WebGL
    let posBuffer: WebGLBuffer | null = null;
    let uResolutionLoc: WebGLUniformLocation | null = null;
    let uMouseLoc: WebGLUniformLocation | null = null;
    let uTimeLoc: WebGLUniformLocation | null = null;
    let uVelocityLoc: WebGLUniformLocation | null = null;
    let uHoverLoc: WebGLUniformLocation | null = null;
    let uTrailLoc: WebGLUniformLocation | null = null;
    let uTrailAgeLoc: WebGLUniformLocation | null = null;

    if (gl && program) {
      gl.useProgram(program);
      const vertices = new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]);
      posBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

      const aPosition = gl.getAttribLocation(program, "a_position");
      gl.enableVertexAttribArray(aPosition);
      gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

      uResolutionLoc = gl.getUniformLocation(program, "u_resolution");
      uMouseLoc = gl.getUniformLocation(program, "u_mouse");
      uTimeLoc = gl.getUniformLocation(program, "u_time");
      uVelocityLoc = gl.getUniformLocation(program, "u_velocity");
      uHoverLoc = gl.getUniformLocation(program, "u_hover");
      uTrailLoc = gl.getUniformLocation(program, "u_trail");
      uTrailAgeLoc = gl.getUniformLocation(program, "u_trail_age");
    }

    // Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Cap DPR to 1.5 for ultra-smooth 60fps
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      if (gl) gl.viewport(0, 0, canvas.width, canvas.height);
    };
    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });

    // =========================================================================
    // Unified 60 FPS Animation & 3D Parallax Loop
    // =========================================================================
    let startTime = performance.now();

    const renderLoop = (now: number) => {
      animId = requestAnimationFrame(renderLoop);
      const elapsed = (now - startTime) * 0.001;

      // 1. Smooth lerping for cursor physics
      state.currentX += (state.targetX - state.currentX) * 0.14;
      state.currentY += (state.targetY - state.currentY) * 0.14;
      state.velocity += (state.targetVelocity - state.velocity) * 0.1;
      state.targetVelocity *= 0.94; // Velocity decay

      // 2. Compute 3D Parallax offsets relative to center
      const centerX = window.innerWidth * 0.5;
      const centerY = window.innerHeight * 0.5;
      const normX = (state.currentX - centerX) / centerX; // -1 to 1
      const normY = (state.currentY - centerY) / centerY;

      state.parallaxX += (normX * 18 - state.parallaxX) * 0.08;
      state.parallaxY += (normY * 18 - state.parallaxY) * 0.08;

      // 3. Update DOM parallax layers directly (Zero React re-render)
      if (deepLayerRef.current) {
        deepLayerRef.current.style.transform = `translate3d(${state.parallaxX * 1.5}px, ${state.parallaxY * 1.5}px, 0)`;
      }
      if (gridLayerRef.current) {
        gridLayerRef.current.style.transform = `translate3d(${-state.parallaxX * 0.8}px, ${-state.parallaxY * 0.8}px, 0)`;
      }

      // 4. Update Cursor-Following Glow Element
      if (cursorGlowRef.current) {
        const glowX = state.currentX;
        const glowY = state.currentY;
        const glowScale = state.isHoveringInteractive ? 1.25 : 1.0;
        const glowOpacity = state.isHoveringInteractive ? 0.9 : 0.65;
        cursorGlowRef.current.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%) scale(${glowScale})`;
        cursorGlowRef.current.style.opacity = `${glowOpacity}`;
      }

      // 5. Update Trail physics
      for (let i = state.trail.length - 1; i >= 0; i--) {
        state.trail[i].age += 0.028;
        if (state.trail[i].age >= 1.0) {
          state.trail.splice(i, 1);
        }
      }

      // 6. Render WebGL Liquid Shader
      if (gl && program && canvas) {
        gl.useProgram(program);

        gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
        const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
        gl.uniform2f(uMouseLoc, state.currentX * dpr, state.currentY * dpr);
        gl.uniform1f(uTimeLoc, elapsed);
        gl.uniform1f(uVelocityLoc, state.velocity);
        gl.uniform1f(uHoverLoc, state.isHoveringInteractive ? 1.0 : 0.0);

        // Pass trail points
        const trailCoords: number[] = [];
        const trailAges: number[] = [];
        for (let i = 0; i < 10; i++) {
          if (i < state.trail.length) {
            trailCoords.push(state.trail[i].x * dpr, state.trail[i].y * dpr);
            trailAges.push(state.trail[i].age);
          } else {
            trailCoords.push(-1000, -1000);
            trailAges.push(1.0);
          }
        }
        gl.uniform2fv(uTrailLoc, new Float32Array(trailCoords));
        gl.uniform1fv(uTrailAgeLoc, new Float32Array(trailAges));

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
    };

    animId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#02050e]"
    >
      {/* Base Deep Black / Midnight Navy Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#02050f] via-[#040817] to-[#01030a]" />

      {/* Layer 1: Global 3D Parallax Atmospheric Glow Orbs */}
      <div
        ref={deepLayerRef}
        className="absolute inset-0 transition-transform duration-75 ease-out will-change-transform"
      >
        {/* Core Electric Blue Orb */}
        <div
          className="liquid-blob w-[750px] h-[750px] -top-80 left-1/2 -translate-x-1/2 bg-blue-600/20"
          style={{ animation: "pulse 11s ease-in-out infinite" }}
        />
        {/* Cyan Ambient Light Orb (Right Mid) */}
        <div
          className="liquid-blob w-[620px] h-[620px] top-[20%] -right-40 bg-cyan-500/18"
          style={{ animation: "pulse 14s ease-in-out infinite alternate" }}
        />
        {/* Deep Indigo Atmospheric Glow (Left Low) */}
        <div
          className="liquid-blob w-[700px] h-[700px] top-[50%] -left-64 bg-indigo-700/16"
          style={{ animation: "pulse 16s ease-in-out infinite" }}
        />
        {/* Deep Cyan Horizon Glow */}
        <div
          className="liquid-blob w-[680px] h-[680px] -bottom-48 right-[12%] bg-cyan-600/18"
          style={{ animation: "pulse 13s ease-in-out infinite alternate" }}
        />
      </div>

      {/* Layer 2: Interactive WebGL Liquid Glass Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-85 mix-blend-screen"
      />

      {/* Layer 3: Foreground Parallax Subtle Tech Grid */}
      <div
        ref={gridLayerRef}
        className="absolute inset-0 transition-transform duration-75 ease-out will-change-transform opacity-30"
      >
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:36px_36px]" />
      </div>

      {/* Layer 4: Volumetric Cursor-Following Glow Light */}
      <div
        ref={cursorGlowRef}
        className="fixed top-0 left-0 w-[550px] h-[550px] rounded-full pointer-events-none transition-[opacity,transform] duration-150 ease-out will-change-transform mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 211, 238, 0.22) 0%, rgba(59, 130, 246, 0.16) 30%, rgba(147, 197, 253, 0.06) 55%, transparent 72%)",
          filter: "blur(32px)",
        }}
      />
    </div>
  );
}
