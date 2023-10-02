<<<<<<< HEAD
import React from 'react';
import Lottie from 'react-lottie'
import animationData from "./LottieFiles/45022-isometric-smartphone.json";




const AppDevAnimation: React.FC  = () => {
  const defaultOptions = {
=======
"use client";
import { useLottie } from "lottie-react";
import animationData from "./LottieFiles/45022-isometric-smartphone.json";
const AppDevAnimation = () => {
  const style = {
    height: 300,
    width: 270,
  };

  const options = {
>>>>>>> b13de566c854b4f3fcbe5a1ba36a5bc6bc1cc473
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
<<<<<<< HEAD
  
  return (
    <Lottie
      options={defaultOptions}
      height={300}
      width={270}
    />
  );
}
=======

  const { View } = useLottie(options, style);

  return View;
};
>>>>>>> b13de566c854b4f3fcbe5a1ba36a5bc6bc1cc473

export default AppDevAnimation;
