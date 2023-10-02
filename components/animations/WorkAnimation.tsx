'use client';
import animationData from "./LottieFiles/35684-business-team-discusses-project.json";
import { useLottie } from "lottie-react";
const WorkAnimation = () => {
  const style = {
    height: 270,
    width: 270,
  };

  const options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(options, style);

  return View;
};

export default WorkAnimation;
