"use client";

import dynamic from "next/dynamic";

// https://lottie.host/443825fc-7bd7-43e2-8d59-57b70b77b6c9/5HPPkFKEC1.json

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  {
    ssr: false,
  }
);

const LottieAnimation = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/443825fc-7bd7-43e2-8d59-57b70b77b6c9/5HPPkFKEC1.json"
      loop={false}
      autoplay
    />
  );
};
export default LottieAnimation;
