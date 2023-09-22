import Lottie from "react-lottie";
import animationData from "./LottieFiles/45022-isometric-smartphone.json";

const AppDevAnimation = () => {
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

export default AppDevAnimation;