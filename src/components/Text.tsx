import clsx from "clsx";
import React, { ReactNode } from "react";

interface ITextProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "xsm" | "sm" | "md" | "lg" | "xlg" | "2xl" | "3xl";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
  color?: "blue" | "orange" | "gray";
  weight?: "regular" | "bold" | "black";
  paragraph?: "1" | "2";
  capitalize?: boolean
}

function Text({
  color = "gray",
  className,
  size = "sm",
  children,
  weight = "regular",
  paragraph,
  capitalize = false,
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
          "text-xxs md:text-xsm": size === "xsm",
          "text-xsm md:text-sm": size === "sm",
          "text-sm md:text-md": size === "md",
          "text-md md:text-lg": size === "lg",
          "text-lg md:text-xlg": size === "xlg",
          "text-xlg md:text-2xl": size === "2xl",
          "text-2lg md:text-3xl": size === "3xl",
        },
        {
          "indent-4": paragraph === "1",
          "indent-8": paragraph === "2",
        },
        {
          "uppercase": capitalize === true,
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
