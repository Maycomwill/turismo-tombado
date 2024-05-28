import { InputHTMLAttributes } from "react";

export interface InputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  autoComplete: string;
}

export function InputInput(props: InputInputProps) {
  return (
    <input
      className="
        h-full
        flex-1
        break-words
        rounded
        bg-zinc-800 py-3 px-4
        text-md
        text-gray-900
        outline-none
        ring-blue-400
        placeholder:text-gray-600
        group-focus-within:ring-2
        dark:text-gray-100
      "
      {...props}
    />
  );
}
