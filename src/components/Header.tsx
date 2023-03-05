import React from "react";
import Text from "./Text";
import { Switch } from "./Switch";

export function Header() {
  return (
    <div className="w-full flex items-center justify-between p-4 mb-4">
      <div className="w-12 h-12 bg-orange-500 text-center items-center justify-center flex">
        LOGO
      </div>
      <Text size="xlg" weight="black">HÓRUS</Text>
      <div>
        <Switch />
      </div>
    </div>
  );
}
