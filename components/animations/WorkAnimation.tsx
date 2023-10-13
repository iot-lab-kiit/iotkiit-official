'use client';
import animationData from './LottieFiles/22830-page-construction.json';
import { useLottie } from 'lottie-react';
const WorkAnimation = () => {
  const style = {
    height: 270,
    width: 270,
    padding: 10,
  };

  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const { View } = useLottie(options, style);

  return View;
};

export default WorkAnimation;
