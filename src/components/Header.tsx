import React from "react";
import Text from "./Text";
import { Switch } from "./Switch";
import Logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";

export function Header() {
  const screenWidth = window.screen.width;
  const navigate = useNavigate();
  return (
    <>
      {screenWidth <= 500 ? (
        <div className="w-screen border-b-2 border-blue-500">
          <div className="w-full flex items-center justify-between p-4">
            <div>
              <Text>Menu</Text>
            </div>
            <div className="hover:cursor-pointer" onClick={() => navigate("/")}>
              <img src={Logo} alt="Hórus Logo" className="w-12 h-12" />
            </div>
            <div>
              <Switch />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen border-b-2 border-blue-500">
          <div className="w-full flex items-center justify-between p-4">
            <div className="hover:cursor-pointer" onClick={() => navigate("/")}>
              <img src={Logo} alt="Hórus Logo" className="w-12 h-12" />
            </div>
            <div className="w-full">
              <div className="uppercase flex items-center m-auto justify-between w-[80%]">
                <a  onClick={()=>navigate("/")}>
                  <Text
                    color="blue"
                    size="xlg"
                    weight="black"
                    className="hover:text-orange-500 border-b-2 border-[#00000000] hover:border-b-2 hover:border-orange-500 transition-colors duration-100 hover:cursor-pointer"
                  >
                    Início
                  </Text>
                </a>
                <a onClick={()=>navigate("/about")}>
                  <Text
                    color="blue"
                    size="xlg"
                    weight="black"
                    className="hover:text-orange-500 border-b-2 border-[#00000000] hover:border-b-2 hover:border-orange-500 transition-colors duration-100 hover:cursor-pointer"
                  >
                    Sobre
                  </Text>
                </a>
                <a onClick={()=>navigate("/catalog")}>
                  <Text
                    color="blue"
                    size="xlg"
                    weight="black"
                    className="hover:text-orange-500 border-b-2 border-[#00000000] hover:border-b-2 hover:border-orange-500 transition-colors duration-100 hover:cursor-pointer"
                  >
                    Catálogo
                  </Text>
                </a>
                <a onClick={()=>navigate("/contact")}>
                  <Text
                    color="blue"
                    size="xlg"
                    weight="black"
                    className="hover:text-orange-500 border-b-2 border-[#00000000] hover:border-b-2 hover:border-orange-500 transition-colors duration-100 hover:cursor-pointer"
                  >
                    Contato
                  </Text>
                </a>
              </div>
            </div>
            <div>
              <Switch />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
