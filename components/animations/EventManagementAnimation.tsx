import Lottie from "react-lottie";
import animationData from "./LottieFiles/35684-business-team-discusses-project.json";

const EventManagementAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={300} width={350} />;
}

export default EventManagementAnimation;