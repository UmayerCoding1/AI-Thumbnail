import { cn } from "@/lib/utils";
import React from "react";

const Lable = ({
  htmlFor,
  children,
  className,
}: {
  htmlFor?: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <label
      htmlFor={htmlFor ? htmlFor : "input-lable"}
      className={cn(className,"block text-sm font-medium")}
    >
      {children}
    </label>
  );
};

export default Lable;
