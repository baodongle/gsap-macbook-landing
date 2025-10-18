import gsap from 'gsap';
import type { Group, Material, Mesh } from 'three';
import { ANIMATION_DURATION } from '../constants';

export const fadeMeshes = (group: Group | null, opacity: number) => {
  if (!group) {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  group.traverse((child: Mesh) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (child.isMesh) {
      (child.material as Material).transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  });
};
