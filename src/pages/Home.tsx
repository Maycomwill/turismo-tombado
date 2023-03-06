import React from "react";
import Text from "../components/Text";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Map} from "../components/Map";
import { Marker } from "@react-google-maps/api";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="px-4">
      <Header />
      <div>
        <div>
          <div className="flex flex-col gap-2 mb-4">
            <Text size="xlg">Bem vindo(a) ao Hórus</Text>
            <Text size="lg">
              Aqui você encontrará seu próximo destino turístico histórico com
              toda a facilidade.
            </Text>
            <Text size="lg">
              Você pode navegar pelo mapa abaixo para encontrar alguns pontos
              históricos
            </Text>
          </div>
          <div className="mb-8 w-full h-full">
            <Map nome="Marco-zero do Recife" center={{lat: -8.063123361206603, lng: -34.87111791073427}}/>
          </div>
        </div>
        <Button onClick={() => navigate("/forte-5-pontas")}>
          forte 5 pontas
        </Button>
      </div>
    </div>
  );
}
