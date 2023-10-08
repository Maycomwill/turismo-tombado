import React from "react";
import Text from "../components/Text";
import RobotNotF from "../assets/RobotNotF.svg";
import { Footer } from "../components/Footer";

export function BlankPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 pb-12">
      <div>
        <img src={RobotNotF} alt="404 Error" height={200} width={200} />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 px-2">
        <Text size="3xl" uppercase>
          Erro 404
        </Text>
        <Text size="2xl">
          Aparentemente, você tentou acessar uma página inexistente, por favor,
          volte a{" "}
          <a href="/">
            <span className="cursor-default from-blue-400 via-rose-500 to-orange-500 bg-[length:100%_10%] bg-bottom bg-no-repeat transition-[background-size] duration-200 bg-gradient-120 hover:bg-opacity-50 hover:bg-[length:100%_100%]">
              página inicial
            </span>
          </a>
        </Text>
      </div>
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}
