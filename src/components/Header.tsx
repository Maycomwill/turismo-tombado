import React from "react";
import Text from "./Text";
import { Switch } from "./Switch";
import Logo from '../assets/Logo.svg'
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate()
  return (
    <div className="w-full flex items-center justify-between p-4 mb-4">
      <div className="hover:cursor-pointer" onClick={() => navigate('/')}>
        <img src={Logo} alt="Hórus Logo" className="w-12 h-12"/>
      </div>
      <Text color="blue" size="xlg" weight="black">HÓRUS</Text>
      <div>
        <Switch />
      </div>
    </div>
  );
}
