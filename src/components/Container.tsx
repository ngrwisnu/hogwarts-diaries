import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Container = ({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) => {
  return (
    <div className={cn("mx-auto w-full max-w-[1200px] px-8", classname)}>
      {children}
    </div>
  );
};

export default Container;
