import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Hero = ({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) => {
  return (
    <div className={twMerge("px-8 py-32", classname)}>
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </div>
  );
};

export default Hero;
