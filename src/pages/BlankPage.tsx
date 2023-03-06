import React from "react";
import Text from "../components/Text";
import RobotNotF from "../assets/RobotNotF.svg";
import { Footer } from "../components/Footer";

export function BlankPage() {
  return (
    <div className="flex flex-col gap-10 h-full items-center justify-start mt-28">
      <div>
        <img src={RobotNotF} alt="404 Error" height={200} width={200} />
      </div>
      <div className="flex flex-col items-center justify-center gap-2 px-2">
        <Text size="3xl" capitalize>
          Erro 404
        </Text>
        <Text size="2xl">
          Aparentemente, você tentou acessar uma página inexistente, por favor,
          volte a{" "}
          <a
            className="text-orange-500 hover:border-b-2 hover:border-orange-500 focus:border-blue-500 focus:text-blue-500"
            href="/"
          >
            página inicial
          </a>
        </Text>
      </div>
      <div className="absolute bottom-0">
        <Footer />
      </div>
    </div>
  );
}
