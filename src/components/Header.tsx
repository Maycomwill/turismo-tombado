import React from "react";
import Text from "./Text";
import { Switch } from "./Switch";

export function Header() {
  return (
    <div className="w-screen flex items-center justify-between p-4">
      <div className="w-12 h-12 bg-purple-500 text-center items-center justify-center flex">LOGO</div>
      <Text>Turismo tombado</Text>
      <Switch />
    </div>
  );
}
