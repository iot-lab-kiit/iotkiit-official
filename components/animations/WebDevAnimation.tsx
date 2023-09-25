import Lottie from "react-lottie";
import animationData from "./LottieFiles/43173-web-development.json";

const WebDevAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={300} width={270} />;
}

export default WebDevAnimation;