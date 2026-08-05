import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OctenAiInfrastructurePricing from '../imports/index';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Initialize Lenis Smooth Scroll (only if motion is not reduced)
    let lenis: Lenis | null = null;
    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis?.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0, 0);
    }

    // 2. Initialize GSAP ScrollTrigger Animations (Matching index.html app.js parameters)
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      // Hero content entrance: y:40, duration:1.0, stagger:0.15, ease:'power3.out'
      gsap.fromTo(
        '[data-name="hero-content"] > *, [data-name="hero-cards"]',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
        }
      );

      // Section headers scroll entrance: y:30, start:'top 85%', duration:0.8, ease:'power2.out'
      gsap.fromTo(
        '#qps-plans > div:first-child',
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: '#qps-plans',
            start: 'top 85%',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        }
      );

      // Pricing Cards stagger entrance: y:50, start:'top 80%', duration:0.8, stagger:0.1, ease:'power2.out'
      gsap.fromTo(
        '#qps-plans .grid > div',
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: '#qps-plans .grid',
            start: 'top 80%',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        }
      );

      // Pay As You Go API Explorer section header entrance: y:30, start:'top 85%', duration:0.8, ease:'power2.out'
      gsap.fromTo(
        '#api-pricing',
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: '#api-pricing',
            start: 'top 85%',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        }
      );

      // FAQ section entrance: y:30, start:'top 85%', duration:0.8, ease:'power2.out'
      gsap.fromTo(
        '#faq-section',
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: '#faq-section',
            start: 'top 85%',
            once: true,
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
        }
      );

      // Refresh ScrollTrigger to ensure exact positions with Lenis
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });

    // 3. Mouse Spotlight cursor effect on cards
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll<HTMLElement>('[data-name="Container"], [data-name="Button"]');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    // 4. Lenis Smooth Scroll Anchor Click Handler
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.length > 1) {
          const el = document.querySelector(href);
          if (el) {
            e.preventDefault();
            if (lenis) {
              lenis.scrollTo(el, { duration: 1.2, offset: -40 });
            } else {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleAnchorClick);

    return () => {
      ctx.revert();
      lenis?.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#080B12] text-white overflow-x-hidden">
      <OctenAiInfrastructurePricing />
    </div>
  );
}
