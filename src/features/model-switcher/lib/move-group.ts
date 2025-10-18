import gsap from 'gsap';
import type { Group } from 'three';
import { ANIMATION_DURATION } from '../constants';

export const moveGroup = (group: Group | null, x: number) => {
  if (!group) {
    return;
  }

  gsap.to(group.position as gsap.TweenTarget, {
    x,
    duration: ANIMATION_DURATION,
  });
};
