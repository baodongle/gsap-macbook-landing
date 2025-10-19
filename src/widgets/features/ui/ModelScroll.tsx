import gsap from 'gsap';
import { Suspense, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import type { Group } from 'three';
import { useGSAP } from '@gsap/react';
import { Html } from '@react-three/drei';
import { setTexture } from '@/app/store';
import { featureSequence } from '@/shared/lib/constants';
import { MacbookModel } from '@/widgets/models';

const ModelScroll = () => {
  const groupRef = useRef<Group>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  // Pre-load all feature videos during component mount
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement('video');

      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: 'auto',
        crossOrigin: 'anonymous',
      });

      v.load();
    });
  }, []);

  useGSAP(() => {
    // 3D MODEL ROTATION ANIMATION
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top top',
        end: 'bottom  top',
        scrub: 1,
        pin: true,
      },
    });

    // SYNC THE FEATURE CONTENT
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top center',
        end: 'bottom  top',
        scrub: 1,
      },
    });

    // 3D SPIN
    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: 'power1.inOut',
      });
    }

    // Content & Texture Sync
    timeline
      .call(() => {
        setTexture('/videos/feature-1.mp4');
      })
      .to('.box1', { opacity: 1, y: 0, delay: 1 })

      .call(() => {
        setTexture('/videos/feature-2.mp4');
      })
      .to('.box2', { opacity: 1, y: 0 })

      .call(() => {
        setTexture('/videos/feature-3.mp4');
      })
      .to('.box3', { opacity: 1, y: 0 })

      .call(() => {
        setTexture('/videos/feature-4.mp4');
      })
      .to('.box4', { opacity: 1, y: 0 })

      .call(() => {
        setTexture('/videos/feature-5.mp4');
      })
      .to('.box5', { opacity: 1, y: 0 });
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-3xl text-white uppercase">Loading...</h1>
          </Html>
        }
      >
        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

export default ModelScroll;
