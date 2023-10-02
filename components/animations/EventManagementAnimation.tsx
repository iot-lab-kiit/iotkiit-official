'use client'
import { useLottie } from 'lottie-react';
import animationData from "./LottieFiles/35684-business-team-discusses-project.json";

const EventManagementAnimation = () => {
  const style = {
    height: 300,
    width:350,
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

export default EventManagementAnimation;