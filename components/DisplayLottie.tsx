import React from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

interface DisplayLottieProps {
  animationData: any;
}

const DisplayLottie = ({ animationData }: DisplayLottieProps) => {
  return <Lottie animationData={animationData} loop={true} />;
};

export default DisplayLottie;