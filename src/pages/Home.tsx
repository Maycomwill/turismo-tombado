import React from "react";
import Text from "../components/Text";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="px-4">
      <Header />
      <div>
        <Button onClick={() => navigate("/forte-5-pontas")}>
          forte 5 pontas
        </Button>
      </div>
    </div>
  );
}
