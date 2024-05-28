import Text from "../Text";
import { ReactNode } from "react";

export interface InputRootProps {
  children: ReactNode;
  for: string;
  label: string;
}

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="
    group
    relative
    flex
    w-full
    flex-col
    space-y-2
  "
    >
      <label
        htmlFor={props.for}
        className="capitalize flex flex-col items-start justify-center gap-1"
      >
        <Text>{props.label}</Text>
      </label>
      {props.children}
    </div>
  );
}
