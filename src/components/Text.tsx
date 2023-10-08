import clsx from "clsx";
import React, { ReactNode } from "react";

interface ITextProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "xsm" | "sm" | "md" | "lg" | "xlg" | "2xl" | "3xl";
  children: ReactNode;
  className?: string;
  color?: "blue" | "orange" | "gray";
  weight?: "regular" | "bold" | "black";
  paragraph?: "1" | "2";
  uppercase?: boolean
}

function Text({
  color = "gray",
  className,
  size = "md",
  children,
  weight = "regular",
  paragraph,
  uppercase = false,
  ...props
}: ITextProps) {
  return (
    <span
      className={clsx(
        "text-justify antialiased",
        {
          "text-blue-500": color === "blue",
          "text-orange-500": color === "orange",
          "text-gray-900 dark:text-gray-100": color === "gray",
        },
        {
          "font-regular": weight === "regular",
          "font-bold": weight === "bold",
          "font-black": weight === "black",
        },
        {
          "text-xsm": size === "xsm",
          "text-sm": size === "sm",
          "text-sm md:text-md": size === "md",
          "text-md md:text-lg": size === "lg",
          "text-lg md:text-xlg": size === "xlg",
          "text-xlg md:text-2xl": size === "2xl",
          "text-2xl md:text-3xl": size === "3xl",
        },
        {
          "indent-4": paragraph === "1",
          "indent-8": paragraph === "2",
        },
        {
          "uppercase": uppercase === true,
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
export default Text;
