
'use client';
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import animationData from "./LottieFiles/43173-web-development.json";

const WebDevAnimation = () => {
  const style = {
    height: 300,
    width:270,
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

}

export default WebDevAnimation;