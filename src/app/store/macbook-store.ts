import { Store } from '@tanstack/react-store';

const initialState = {
  color: '#2e2c2e',
  scale: 0.08,
  texture: '/videos/feature-1.mp4',
};

export const store = new Store(initialState);

export const setColor = (color: string) => {
  store.setState((state) => {
    return {
      ...state,
      color,
    };
  });
};

export const setScale = (scale: number) => {
  store.setState((state) => {
    return {
      ...state,
      scale,
    };
  });
};

export const setTexture = (texture: string) => {
  store.setState((state) => {
    return {
      ...state,
      texture,
    };
  });
};

export const reset = () => {
  store.setState(initialState);
};
