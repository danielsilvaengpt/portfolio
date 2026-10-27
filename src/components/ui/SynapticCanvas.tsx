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
    camera.position.z = 28

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    const isDark = theme === 'dark'
    const particleColor = isDark ? 0xffffff : 0x111111
    const lineColor = isDark ? 0x2a2a2a : 0xcccccc
    const glowLineColor = isDark ? 0x888888 : 0x444444

    // 2. Continuous Organic 3D Synaptic Spine (Traverses entire website depth)
    const pointsCount = 80
    const curvePoints: THREE.Vector3[] = []
    for (let i = 0; i < pointsCount; i++) {
      const p = i / pointsCount
      const y = 22 - p * 52 // Extends through full scroll travel
      const x = Math.sin(p * Math.PI * 4) * (5 + Math.cos(p * 3) * 2)
      const z = Math.cos(p * Math.PI * 3) * 4
      curvePoints.push(new THREE.Vector3(x, y, z))
    }

    const curve = new THREE.CatmullRomCurve3(curvePoints)
    const splinePoints = curve.getPoints(400)
    const splineGeometry = new THREE.BufferGeometry().setFromPoints(splinePoints)

    // Base structural thread
    const splineMaterial = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: isDark ? 0.35 : 0.25,
      linewidth: 1,
    })
    const splineLine = new THREE.Line(splineGeometry, splineMaterial)
    scene.add(splineLine)

    // 3. High-velocity Energy Synaptic Packets (Travelling light particles)
    const pulsesCount = 240
    const pulsePositions = new Float32Array(pulsesCount * 3)
    const pulseProgresses = new Float32Array(pulsesCount)
    const pulseSpeeds = new Float32Array(pulsesCount)

    for (let i = 0; i < pulsesCount; i++) {
      pulseProgresses[i] = Math.random()
      pulseSpeeds[i] = 0.001 + Math.random() * 0.0025
    }

    const pulseGeometry = new THREE.BufferGeometry()
    pulseGeometry.setAttribute('position', new THREE.BufferAttribute(pulsePositions, 3))

    // Radial gradient glow texture
    const canvas = document.createElement('canvas')
    canvas.width = 32
    canvas.height = 32
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
      grad.addColorStop(0, 'rgba(255,255,255,1)')
      grad.addColorStop(0.35, 'rgba(255,255,255,0.7)')
      grad.addColorStop(0.7, 'rgba(255,255,255,0.2)')
      grad.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, 32, 32)
    }
    const glowTexture = new THREE.CanvasTexture(canvas)

    const pulseMaterial = new THREE.PointsMaterial({
      color: particleColor,
      size: 0.45,
      transparent: true,
      opacity: isDark ? 0.85 : 0.6,
      map: glowTexture,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    })
    const pulseSystem = new THREE.Points(pulseGeometry, pulseMaterial)
    scene.add(pulseSystem)

    // 4. Hero Agent Quantum Core (Nodal Cluster)
    const sphereRadius = 4.5
    const spherePointsCount = 360
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
      const y = r * sinPhi * Math.sin(theta) + 12 // Positioned at Hero level
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
      color: particleColor,
      size: 0.28,
      transparent: true,
      opacity: isDark ? 0.75 : 0.45,
      map: glowTexture,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      depthWrite: false,
    })
    const sphereSystem = new THREE.Points(sphereGeometry, sphereMaterial)
    scene.add(sphereSystem)

    // 5. Interactive Shockwave Rings on Click
    const shockwaves: { ring: THREE.Mesh; scale: number; opacity: number }[] = []
    const ringGeo = new THREE.RingGeometry(0.2, 0.4, 32)

    const onPointerDown = (e: MouseEvent) => {
      const mouseVec = new THREE.Vector3(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
        0.5
      )
      mouseVec.unproject(camera)
      const dir = mouseVec.sub(camera.position).normalize()
      const distance = -camera.position.z / dir.z
      const pos = camera.position.clone().add(dir.multiplyScalar(distance))

      const ringMat = new THREE.MeshBasicMaterial({
        color: glowLineColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      })
      const ring = new THREE.Mesh(ringGeo, ringMat)
      ring.position.copy(pos)
      scene.add(ring)
      shockwaves.push({ ring, scale: 1, opacity: 0.8 })
    }

    window.addEventListener('pointerdown', onPointerDown)

    // 6. Camera Motion, Scroll & Mouse Dampening
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

    // 7. Animation Cinema Loop (Dolly, Warp & Synapses)
    let animationFrameId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Smooth camera dampening
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05
      scrollY += (targetScrollY - scrollY) * 0.07

      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      )
      const scrollRatio = scrollY / maxScroll

      // Camera travels through the 3D space with cinematic parallax
      camera.position.y = 12 - scrollRatio * 38
      camera.position.x = mouseX * 2.8 + Math.sin(scrollRatio * Math.PI * 2) * 2
      camera.position.z = 28 + Math.cos(scrollRatio * Math.PI) * 2
      camera.lookAt(0, camera.position.y - 0.5, 0)

      // Rotate sphere core
      sphereSystem.rotation.y = elapsedTime * 0.18
      sphereSystem.rotation.x = Math.sin(elapsedTime * 0.12) * 0.2

      // Animate travelling packets along the spine
      const positions = pulseGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < pulsesCount; i++) {
        pulseProgresses[i] = (pulseProgresses[i] + pulseSpeeds[i]) % 1.0
        const pt = curve.getPointAt(pulseProgresses[i])
        const wobble = Math.sin(elapsedTime * 3 + i) * 0.2
        positions[i * 3] = pt.x + wobble
        positions[i * 3 + 1] = pt.y
        positions[i * 3 + 2] = pt.z + wobble
      }
      pulseGeometry.attributes.position.needsUpdate = true

      // Morph sphere breathing
      const sPositions = sphereGeometry.attributes.position.array as Float32Array
      for (let i = 0; i < spherePointsCount; i++) {
        const ox = sphereOrigPositions[i * 3]
        const oy = sphereOrigPositions[i * 3 + 1]
        const oz = sphereOrigPositions[i * 3 + 2]
        const pulseWave = Math.sin(elapsedTime * 2.2 + i * 0.25) * 0.14
        sPositions[i * 3] = ox * (1 + pulseWave)
        sPositions[i * 3 + 1] = oy
        sPositions[i * 3 + 2] = oz * (1 + pulseWave)
      }
      sphereGeometry.attributes.position.needsUpdate = true

      // Animate shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i]
        sw.scale += 0.35
        sw.opacity -= 0.02
        sw.ring.scale.set(sw.scale, sw.scale, sw.scale)
        ;(sw.ring.material as THREE.MeshBasicMaterial).opacity = Math.max(sw.opacity, 0)

        if (sw.opacity <= 0) {
          scene.remove(sw.ring)
          sw.ring.geometry.dispose()
          ;(sw.ring.material as THREE.Material).dispose()
          shockwaves.splice(i, 1)
        }
      }

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('pointerdown', onPointerDown)
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
