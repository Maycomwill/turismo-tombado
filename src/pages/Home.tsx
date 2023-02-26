import React from "react";
import { Header } from "../components/Header";
import Text from "../components/Text";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="px-4">
      <Header />
      <Text weight="black">Hello</Text>
      <br />
      <br />
      <br />
      <button
        onClick={() => navigate("/forte-5-pontas")}
        className="bg-pYellow-400 px-4 py-2 rounded-md"
      >
        <Text color="blue" weight="bold" className="uppercase" size="xlg">forte 5 pontas</Text>
      </button>
    </div>
  );
}
