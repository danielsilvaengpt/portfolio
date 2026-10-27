/**
 * LatentMeshCanvas — Swiss Latent Dimension Background
 * A continuous Three.js WebGL layer behind the entire portfolio:
 *  1. Mathematical grid particle field that waves with mouse proximity
 *  2. CatmullRom latent-space spline traversing the full vertical height
 *  3. Bright data-packet glyphs travelling along the spline
 *  4. Magnetic cursor comet trail (2D canvas overlay)
 *  5. Scroll-driven camera position — camera follows page scroll
 */
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useTheme } from '../../hooks/useTheme'

export const LatentMeshCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const trailCanvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!containerRef.current || !trailCanvasRef.current) return

    // ─── Three.js setup ───────────────────────────────────────────
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 32

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    const isDark = theme === 'dark'
    const pointColor = isDark ? 0xffffff : 0x111111
    const lineColor = isDark ? 0x282828 : 0xd0d0d0
    const accentColor = isDark ? 0xc8c8c8 : 0x444444

    // ─── 1. Latent Space Spline ───────────────────────────────────
    const pointsCount = 70
    const curvePoints: THREE.Vector3[] = []
    for (let i = 0; i < pointsCount; i++) {
      const p = i / pointsCount
      const y = 24 - p * 54
      const x = Math.sin(p * Math.PI * 3) * (4 + Math.cos(p * 2) * 2)
      const z = Math.cos(p * Math.PI * 2) * 3
      curvePoints.push(new THREE.Vector3(x, y, z))
    }
    const curve = new THREE.CatmullRomCurve3(curvePoints)
    const splinePoints = curve.getPoints(400)
    const splineGeo = new THREE.BufferGeometry().setFromPoints(splinePoints)
    const splineMat = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: isDark ? 0.5 : 0.3,
    })
    scene.add(new THREE.Line(splineGeo, splineMat))

    // ─── 2. Grid Particle Field ───────────────────────────────────
    const gridCols = 26, gridRows = 26
    const totalPoints = gridCols * gridRows
    const gridPos = new Float32Array(totalPoints * 3)
    const gridOrig = new Float32Array(totalPoints * 3)

    let idx = 0
    for (let i = 0; i < gridCols; i++) {
      for (let j = 0; j < gridRows; j++) {
        const x = (i - gridCols / 2) * 1.8
        const y = (j - gridRows / 2) * 1.8
        const z = -6 + Math.sin(i * 0.4) * Math.cos(j * 0.4) * 2
        gridPos[idx * 3] = gridOrig[idx * 3] = x
        gridPos[idx * 3 + 1] = gridOrig[idx * 3 + 1] = y
        gridPos[idx * 3 + 2] = gridOrig[idx * 3 + 2] = z
        idx++
      }
    }

    // Soft circle sprite for dots
    const dotCanvas = document.createElement('canvas')
    dotCanvas.width = dotCanvas.height = 32
    const dctx = dotCanvas.getContext('2d')!
    const grad = dctx.createRadialGradient(16, 16, 0, 16, 16, 16)
    grad.addColorStop(0, 'rgba(255,255,255,1)')
    grad.addColorStop(0.3, 'rgba(255,255,255,0.5)')
    grad.addColorStop(1, 'rgba(255,255,255,0)')
    dctx.fillStyle = grad
    dctx.fillRect(0, 0, 32, 32)
    const dotTex = new THREE.CanvasTexture(dotCanvas)

    const gridGeo = new THREE.BufferGeometry()
    gridGeo.setAttribute('position', new THREE.BufferAttribute(gridPos, 3))
    const gridMat = new THREE.PointsMaterial({
      color: pointColor,
      size: 0.17,
      transparent: true,
      opacity: isDark ? 0.22 : 0.13,
      map: dotTex,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    })
    const gridPoints = new THREE.Points(gridGeo, gridMat)
    scene.add(gridPoints)

    // ─── 3. Data Packets on Spline ────────────────────────────────
    const packetCount = 50
    const pPos = new Float32Array(packetCount * 3)
    const pProgress = new Float32Array(packetCount).map(() => Math.random())
    const pSpeeds = new Float32Array(packetCount).map(
      () => 0.0005 + Math.random() * 0.0014
    )
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({
      color: accentColor,
      size: 0.36,
      transparent: true,
      opacity: isDark ? 0.85 : 0.55,
      map: dotTex,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    })
    scene.add(new THREE.Points(pGeo, pMat))

    // ─── 4. Mouse & Scroll state ──────────────────────────────────
    let mouseX = 0, mouseY = 0, tMouseX = 0, tMouseY = 0
    let scrollY = 0, tScrollY = 0

    const onMouseMove = (e: MouseEvent) => {
      tMouseX = (e.clientX / window.innerWidth) * 2 - 1
      tMouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }
    const onScroll = () => { tScrollY = window.scrollY }
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      trailCanvasRef.current!.width = window.innerWidth
      trailCanvasRef.current!.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    // ─── 5. Cursor Comet Trail (2D overlay canvas) ─────────────────
    const trailCanvas = trailCanvasRef.current
    trailCanvas.width = window.innerWidth
    trailCanvas.height = window.innerHeight
    const tctx = trailCanvas.getContext('2d')!
    const trail: { x: number; y: number; age: number }[] = []
    let rawMouseX = window.innerWidth / 2
    let rawMouseY = window.innerHeight / 2

    const onRawMouse = (e: MouseEvent) => {
      rawMouseX = e.clientX
      rawMouseY = e.clientY
      trail.push({ x: rawMouseX, y: rawMouseY, age: 0 })
      if (trail.length > 28) trail.shift()
    }
    window.addEventListener('mousemove', onRawMouse, { passive: true })

    // ─── Animation Loop ────────────────────────────────────────────
    let rafId: number
    const clock = new THREE.Clock()

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Smooth inertia
      mouseX += (tMouseX - mouseX) * 0.045
      mouseY += (tMouseY - mouseY) * 0.045
      scrollY += (tScrollY - scrollY) * 0.055

      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      const scrollRatio = scrollY / maxScroll

      // Camera travels down the scene on scroll
      camera.position.y = 8 - scrollRatio * 32
      camera.position.x = mouseX * 2.4
      camera.lookAt(0, camera.position.y - 0.5, 0)

      // Wave grid
      const pos = gridGeo.attributes.position.array as Float32Array
      for (let i = 0; i < totalPoints; i++) {
        const ox = gridOrig[i * 3], oy = gridOrig[i * 3 + 1], oz = gridOrig[i * 3 + 2]
        const dist = Math.sqrt((ox - mouseX * 12) ** 2 + (oy - mouseY * 12) ** 2)
        const pull = Math.max(0, 1 - dist / 14) * 1.6
        const wave = Math.sin(t * 0.85 + ox * 0.2 + oy * 0.2) * 0.38
        pos[i * 3 + 2] = oz + wave + pull
      }
      gridGeo.attributes.position.needsUpdate = true

      // Move data packets
      const pp = pGeo.attributes.position.array as Float32Array
      for (let i = 0; i < packetCount; i++) {
        pProgress[i] = (pProgress[i] + pSpeeds[i]) % 1.0
        const pt = curve.getPointAt(pProgress[i])
        pp[i * 3] = pt.x; pp[i * 3 + 1] = pt.y; pp[i * 3 + 2] = pt.z
      }
      pGeo.attributes.position.needsUpdate = true

      renderer.render(scene, camera)

      // ─── Cursor Comet Trail (2D) ─────────────────────────────────
      tctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height)
      if (trail.length > 1) {
        for (let i = 1; i < trail.length; i++) {
          const p = trail[i]
          p.age++
          const alpha = isDark
            ? (i / trail.length) * 0.35
            : (i / trail.length) * 0.2
          const radius = (i / trail.length) * 5
          const g = tctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, radius + 2)
          g.addColorStop(0, isDark ? `rgba(255,255,255,${alpha})` : `rgba(0,0,0,${alpha})`)
          g.addColorStop(1, 'rgba(0,0,0,0)')
          tctx.beginPath()
          tctx.arc(p.x, p.y, radius + 2, 0, Math.PI * 2)
          tctx.fillStyle = g
          tctx.fill()
        }
        // Bright tip
        const tip = trail[trail.length - 1]
        tctx.beginPath()
        tctx.arc(tip.x, tip.y, 3, 0, Math.PI * 2)
        tctx.fillStyle = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.4)'
        tctx.fill()
      }
    }

    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousemove', onRawMouse)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (containerRef.current) containerRef.current.innerHTML = ''
      tctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height)
    }
  }, [theme])

  return (
    <>
      {/* Three.js WebGL canvas layer */}
      <div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      />
      {/* Cursor comet trail (2D overlay) */}
      <canvas
        ref={trailCanvasRef}
        className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
        aria-hidden="true"
        style={{ mixBlendMode: 'normal' }}
      />
    </>
  )
}
