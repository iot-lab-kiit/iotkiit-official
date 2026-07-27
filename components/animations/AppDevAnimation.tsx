'use client';
import animationData from './LottieFiles/45022-isometric-smartphone.json';
import LottiePlayer from './LottiePlayer';

const AppDevAnimation = () => (
 <LottiePlayer animationData={animationData} style={{ height: 300, width: 270 }} />
);

export default AppDevAnimation;
