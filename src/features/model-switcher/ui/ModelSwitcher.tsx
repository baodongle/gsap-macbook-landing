import { useRef } from 'react';
import type { Group } from 'three';
import { useGSAP } from '@gsap/react';
import {
  type PresentationControlProps,
  PresentationControls,
} from '@react-three/drei';
import { fadeMeshes, moveGroup } from '../lib';
import MacbookModel14 from '../models/Macbook-14';
import MacbookModel16 from '../models/Macbook-16';

const OFFSET_DISTANCE = 5;
const SCALE_LARGE_DESKTOP = 0.08;
const SCALE_LARGE_MOBILE = 0.05;
const SCALE_SMALL_DESKTOP = 0.06;
const SCALE_SMALL_MOBILE = 0.03;
const controlsConfig = {
  snap: true,
  speed: 1,
  zoom: 1,
  azimuth: [-Infinity, Infinity] as [number, number],
  config: { mass: 1, tension: 0, friction: 26 },
} as PresentationControlProps;

interface MacbookModelProps {
  scale: number;
  isMobile: boolean;
}

export const ModelSwitcher = ({ scale, isMobile }: MacbookModelProps) => {
  const smallMacbookRef = useRef<Group>(null);
  const largeMacbookRef = useRef<Group>(null);

  const showLargeMacbook =
    scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacbookRef.current, 0);

      fadeMeshes(smallMacbookRef.current, 0);
      fadeMeshes(largeMacbookRef.current, 1);
    } else {
      moveGroup(smallMacbookRef.current, 0);
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacbookRef.current, 1);
      fadeMeshes(largeMacbookRef.current, 0);
    }
  }, [scale]);

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacbookModel16
            scale={isMobile ? SCALE_LARGE_MOBILE : SCALE_LARGE_DESKTOP}
          />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <MacbookModel14
            scale={isMobile ? SCALE_SMALL_MOBILE : SCALE_SMALL_DESKTOP}
          />
        </group>
      </PresentationControls>
    </>
  );
};
