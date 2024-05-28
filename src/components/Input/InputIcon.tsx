import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface InputIconProps {
  className?: string;
  children: ReactNode;
}

export function InputIcon(props: InputIconProps) {
  return (
    <Slot className={clsx("h-6 w-6 group-focus-within:text-blue-400 text-blue-200 absolute right-4 bottom-2.5", props.className)}>
      {props.children}
    </Slot>
  );
}
