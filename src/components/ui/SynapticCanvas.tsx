import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useTheme } from '../../hooks/useTheme'

export const SynapticCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!containerRef.current) return

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 30

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Colors according to theme
    const isDark = theme === 'dark'
    const particleColor = isDark ? 0xffffff : 0x111111
    const lineColor = isDark ? 0x333333 : 0xdddddd
    const coreColor = isDark ? 0xcccccc : 0x222222

    // 2. Continuous Spline Thread (From top to bottom)
    const pointsCount = 60
    const curvePoints: THREE.Vector3[] = []
    for (let i = 0; i < pointsCount; i++) {
      const progress = i / pointsCount
      const y = 20 - progress * 40
      const x = Math.sin(progress * Math.PI * 3.5) * (4 + Math.cos(progress * 2) * 2)
      const z = Math.cos(progress * Math.PI * 2.5) * 3
      curvePoints.push(new THREE.Vector3(x, y, z))
    }

    const curve = new THREE.CatmullRomCurve3(curvePoints)
    const splinePoints = curve.getPoints(300)
    const splineGeometry = new THREE.BufferGeometry().setFromPoints(splinePoints)
    const splineMaterial = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: isDark ? 0.35 : 0.25,
      linewidth: 1,
    })
    const splineLine = new THREE.Line(splineGeometry, splineMaterial)
    scene.add(splineLine)

    // 3. Synaptic Pulses / Particles along the thread
    const pulsesCount = 180
    const pulsePositions = new Float32Array(pulsesCount * 3)
    const pulseProgresses = new Float32Array(pulsesCount)
    const pulseSpeeds = new Float32Array(pulsesCount)

    for (let i = 0; i < pulsesCount; i++) {
      pulseProgresses[i] = Math.random()
      pulseSpeeds[i] = 0.0008 + Math.random() * 0.0016
    }

    const pulseGeometry = new THREE.BufferGeometry()
    pulseGeometry.setAttribute('position', new THREE.BufferAttribute(pulsePositions, 3))

    // Canvas particle texture for glow
    const canvas = document.createElement('canvas')
    canvas.width = 16
    canvas.height = 16
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8)
      grad.addColorStop(0, 'rgba(255,255,255,1)')
      grad.addColorStop(0.5, 'rgba(255,255,255,0.4)')
      grad.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, 16, 16)
    }
    const particleTexture = new THREE.CanvasTexture(canvas)

    const pulseMaterial = new THREE.PointsMaterial({
      color: particleColor,
      size: 0.35,
      transparent: true,
      opacity: isDark ? 0.7 : 0.5,
      map: particleTexture,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    })
    const pulseSystem = new THREE.Points(pulseGeometry, pulseMaterial)
    scene.add(pulseSystem)

    // 4. Hero Agent Nodal Sphere (Brain Core)
    const sphereRadius = 4.2
    const spherePointsCount = 280
    const spherePositions = new Float32Array(spherePointsCount * 3)
    const sphereOrigPositions = new Float32Array(spherePointsCount * 3)

    for (let i = 0; i < spherePointsCount; i++) {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = Math.cbrt(Math.random()) * sphereRadius

      const sinPhi = Math.sin(phi)
      const x = r * sinPhi * Math.cos(theta)
      const y = r * sinPhi * Math.sin(theta) + 10 // Placed at Hero level
      const z = r * Math.cos(phi)

      spherePositions[i * 3] = x
      spherePositions[i * 3 + 1] = y
      spherePositions[i * 3 + 2] = z

      sphereOrigPositions[i * 3] = x
      sphereOrigPositions[i * 3 + 1] = y
      sphereOrigPositions[i * 3 + 2] = z
    }

    const sphereGeometry = new THREE.BufferGeometry()
    sphereGeometry.setAttribute('position', new THREE.BufferAttribute(spherePositions, 3))
    const sphereMaterial = new THREE.PointsMaterial({
      color: coreColor,
      size: 0.22,
      transparent: true,
      opacity: isDark ? 0.6 : 0.4,
      map: particleTexture,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    })
    const sphereSystem = new THREE.Points(sphereGeometry, sphereMaterial)
    scene.add(sphereSystem)

    // 5. Mouse & Scroll Interactivity
    let targetMouseX = 0
    let targetMouseY = 0
    let mouseX = 0
    let mouseY = 0
    let scrollY = 0
    let targetScrollY = 0

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }

    const onScroll = () => {
      targetScrollY = window.scrollY
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // 6. Animation Loop
    let animationFrameId: number
    let clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Smooth dampening
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05
      scrollY += (targetScrollY - scrollY) * 0.08

      // Translate camera along spline according to page scroll
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      )
      const scrollRatio = scrollY / maxScroll
      camera.position.y = 8 - scrollRatio * 28
      camera.position.x = mouseX * 2.5
      camera.lookAt(0, camera.position.y - 1, 0)

      // Rotate sphere core
      sphereSystem.rotation.y = elapsedTime * 0.15
      sphereSystem.rotation.x = Math.sin(elapsedTime * 0.1) * 0.15

      // Pulsing pulse particles along the spline
      const positions = pulseGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < pulsesCount; i++) {
        pulseProgresses[i] = (pulseProgresses[i] + pulseSpeeds[i]) % 1.0
        const pt = curve.getPointAt(pulseProgresses[i])
        // Add subtle radial displacement for dynamic neural feel
        const offset = Math.sin(elapsedTime * 2 + i) * 0.15
        positions[i * 3] = pt.x + offset
        positions[i * 3 + 1] = pt.y
        positions[i * 3 + 2] = pt.z + offset
      }
      pulseGeometry.attributes.position.needsUpdate = true

      // Gentle breathing effect on sphere nodes
      const sPositions = sphereGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < spherePointsCount; i++) {
        const ox = sphereOrigPositions[i * 3]
        const oy = sphereOrigPositions[i * 3 + 1]
        const oz = sphereOrigPositions[i * 3 + 2]
        const wave = Math.sin(elapsedTime * 1.5 + i * 0.2) * 0.12
        sPositions[i * 3] = ox * (1 + wave)
        sPositions[i * 3 + 1] = oy
        sPositions[i * 3 + 2] = oz * (1 + wave)
      }
      sphereGeometry.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }
  }, [theme])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  )
}
