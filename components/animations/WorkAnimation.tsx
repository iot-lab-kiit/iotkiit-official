'use client';
import animationData from './LottieFiles/22830-page-construction.json';
import LottiePlayer from './LottiePlayer';

const WorkAnimation = () => (
  <LottiePlayer animationData={animationData} style={{ height: 270, width: 270, padding: 10 }} />
);

export default WorkAnimation;
