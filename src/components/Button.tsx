import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "PRIMARY" | "SECONDARY";
  type?: "button" | "submit";
}

export function Button({
  variant = "PRIMARY",
  className,
  type = "button",
  children,
  ...props
}: IButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        "w-full h-10 rounded-sm uppercase font-black transition-colors duration-150",
        {
          "text-blue-500": variant === "PRIMARY",
          "bg-orange-400": variant === "PRIMARY",
          "hover:bg-orange-500": variant === "PRIMARY",
        },
        {
          "text-white": variant === "SECONDARY",
          "bg-red-500": variant === "SECONDARY",
          "hover:bg-red-600": variant === "SECONDARY",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
