import clsx from 'clsx';
import { Canvas } from '@react-three/fiber';
import { features } from '@/shared/lib/constants';
import { StudioLights } from '@/widgets/studio-lights';
import ModelScroll from './ModelScroll';

export const Features = () => {
  return (
    <section id="features">
      <h2>See it all in a new light.</h2>

      <Canvas id="f-canvas" camera={{}}>
        <StudioLights />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>

      <div className="absolute inset-0">
        {features.map((feature, index) => {
          return (
            <div
              key={feature.id}
              className={clsx('box', `box${index + 1}`, feature.styles)}
            >
              <img src={feature.icon} alt={feature.highlight} />
              <p>
                <span className="text-white">{feature.highlight}</span>
                {feature.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
