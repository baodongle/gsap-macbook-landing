/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import clsx from 'clsx';
import { useMediaQuery } from 'react-responsive';
import { Canvas } from '@react-three/fiber';
import { useStore } from '@tanstack/react-store';
import { setColor, setScale, store } from '@/app/store';
import { ModelSwitcher } from '@/features/model-switcher';
import { StudioLights } from '@/widgets/studio-lights';

export const ProductViewer = () => {
  const { color, scale } = useStore(store, (state) => state);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <div className="flex-center mt-5 gap-5">
          <div className="color-control">
            <div
              className={clsx(
                'bg-neutral-300',
                color === '#adb5bd' && 'active',
              )}
              onClick={() => {
                setColor('#adb5bd');
              }}
            />
            <div
              className={clsx(
                'bg-neutral-900',
                color === '#2e2c2e' && 'active',
              )}
              onClick={() => {
                setColor('#2e2c2e');
              }}
            />
          </div>

          <div className="size-control">
            <div
              className={clsx(
                scale === 0.06
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white',
              )}
              onClick={() => {
                setScale(0.06);
              }}
            >
              <p>14&quot;</p>
            </div>
            <div
              className={clsx(
                scale === 0.08
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white',
              )}
              onClick={() => {
                setScale(0.08);
              }}
            >
              <p>16&quot;</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />
        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
};
