"use client";
import { useLottie } from "lottie-react";
import animationData from "./LottieFiles/45022-isometric-smartphone.json";
const AppDevAnimation = () => {
  const style = {
    height: 300,
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

export default AppDevAnimation;
