import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Hero = ({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) => {
  return <div className={twMerge("px-8 py-32", classname)}>{children}</div>;
};

export default Hero;
