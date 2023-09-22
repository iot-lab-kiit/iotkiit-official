import Lottie from "react-lottie";
import animationData from "./LottieFiles/22830-page-construction.json";

const WorkAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions}  height={270} width={270} style={{padding:10}}/>
}

export default WorkAnimation;