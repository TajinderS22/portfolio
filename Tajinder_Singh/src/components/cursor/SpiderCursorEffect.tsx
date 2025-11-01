/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, type RefObject } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
}

interface SpiderCursorEffectProps {
  containerRef?: RefObject<HTMLDivElement | null> ;
  particleCount?: number;
  repulsionRadius?: number;
  connectionRadius?: number;
  particleColor?: string;
  connectionColor?: string;
}

export const SpiderCursorEffect = ({ 
  containerRef, 
  particleCount = 70,
  repulsionRadius = 500,
  connectionRadius = 300,
  particleColor = "239, 68, 68", // RGB values for hsl(0 85% 55%)
  connectionColor = "239, 68, 68"
}: SpiderCursorEffectProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, isOver: false });
  const animationFrameRef = useRef<number>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const container = containerRef?.current || document.body;
    
    // Set canvas size to match container or window
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      // Reinitialize particles on resize
      initializeParticles();
    };
    
    // Initialize particles randomly in the canvas
    const initializeParticles = () => {
      particlesRef.current = [];
      // const rect = container.getBoundingClientRect();
      
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesRef.current.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const isOver = 
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isOver,
      };
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      particles.forEach((particle) => {
        // Random drift motion
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges with some padding
        if (particle.x < 10 || particle.x > canvas.width - 10) {
          particle.vx *= -1;
          particle.x = Math.max(10, Math.min(canvas.width - 10, particle.x));
        }
        if (particle.y < 10 || particle.y > canvas.height - 10) {
          particle.vy *= -1;
          particle.y = Math.max(10, Math.min(canvas.height - 10, particle.y));
        }

        // Apply repulsion force from cursor when hovering
        if (mouse.isOver) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < repulsionRadius) {
            const force = (repulsionRadius - distance) / repulsionRadius;
            const angle = Math.atan2(dy, dx);
            particle.x += Math.cos(angle) * force * 5;
            particle.y += Math.sin(angle) * force * 5;
          }
        }

        // Spring back to origin
        const returnForce = 0.05;
        particle.x += (particle.originX - particle.x) * returnForce;
        particle.y += (particle.originY - particle.y) * returnForce;

        // Draw connection to cursor if hovering
        if (mouse.isOver) {
          const dx = particle.x - mouse.x;
          const dy = particle.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionRadius) {
            const alpha = 1 - distance / connectionRadius;
            
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${connectionColor}, ${alpha * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, 0.6)`;
        ctx.fill();
        
        // Draw particle glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          8
        );
        gradient.addColorStop(0, `rgba(${particleColor}, 0.4)`);
        gradient.addColorStop(1, `rgba(${particleColor}, 0)`);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [containerRef, particleCount, repulsionRadius, connectionRadius, particleColor, connectionColor]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-10 bg-transparent"
    />
  );
};
