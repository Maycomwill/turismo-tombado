import clsx from "clsx";
import React, { ReactNode } from "react";

interface ITextProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "xsm" | "sm" | "md" | "lg" | "xlg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
  color?: "blue" | "yellow" | "white" | "gray";
  weight?: "regular" | "bold" | "black";
  paragraph?: "1" | "2"
}

function Text({
  color = "gray",
  className,
  size = "md",
  children,
  weight = "regular",
  paragraph
}: ITextProps) {
  return (
    <span
      className={clsx(
        {
          "text-pBlue-500": color === "blue",
          "text-pYellow-500": color === "yellow",
          "text-gray-900 dark:text-gray-100": color === "gray",
        },
        {
          "font-regular": weight === "regular",
          "font-bold": weight === "bold",
          "font-black": weight === "black",
        },
        {
          "text-xxs md:text-xsm": size === "xsm",
          "text-xsm md:text-sm": size === "sm",
          "text-sm md:text-md": size === "md",
          "text-md md:text-lg": size === "lg",
          "text-lg md:text-xlg": size === "xlg",
        },
        {
          "indent-4": paragraph === "1",
          "indent-8": paragraph === "2",
        },
        className
      )}
    >
      {children}
    </span>
  );
}

export default Text;
