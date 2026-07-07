'use client';
import animationData from './LottieFiles/43173-web-development.json';
import LottiePlayer from './LottiePlayer';

const WebDevAnimation = () => (
  <LottiePlayer animationData={animationData} style={{ height: 300, width: 270 }} />
);

export default WebDevAnimation;
