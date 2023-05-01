import Text from "./Text";
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface InputRootProps {
  children: ReactNode;
  for: string;
  label: string;
}

function InputRoot(props: InputRootProps) {
  return (
    <label
      htmlFor={props.for}
      className="flex items-start justify-center gap-1 flex-col"
    >
      <Text>{props.label}</Text>
      <div
        className="
        flex
        gap-2
        w-full
        p-4
        rounded-md
        bg-gray-300
        dark:bg-gray-800
        focus-within:ring-2
        ring-blue-200
      ">
        {props.children}
      </div>
    </label>
  );
}

export interface InputIconProps {
  className?: string;
  children: ReactNode;
}

function InputIcon(props: InputIconProps) {
  return (
    <Slot className={clsx("w-6 h-6 text-blue-500", props.className)}>
      {props.children}
    </Slot>
  );
}
export interface InputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  autoComplete: string;
}

function InputInput(props: InputInputProps) {
  return (
    <input
      className="
        bg-transparent
        h-full
        break-words
        flex-1
        text-md
        text-gray-900
        dark:text-gray-100
        placeholder:text-gray-400
        outline-none
      "
      {...props}
    />
  );
}

export const CustomInput = {
  Root: InputRoot,
  Input: InputInput,
  Icon: InputIcon,
};
