import { ReactNode } from "react";

const AboutDescription = ({ children }: { children: ReactNode }) => {
  return (
    <div className="text-castleton-950 flex w-full justify-center text-center text-xl font-medium sm:mb-11 sm:text-2xl">
      {children}
    </div>
  );
};

export default AboutDescription;
