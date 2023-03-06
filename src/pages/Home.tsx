import React from "react";
import Text from "../components/Text";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Map } from "../components/Map";
import { Marker } from "@react-google-maps/api";
import { Footer } from "../components/Footer";

export function Home() {
  const navigate = useNavigate();
  const screenWidth = window.screen.width;

  return (
    <div>
      <Header />
      <div className="px-4 pt-4">
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
          <div className="mb-8">
            <Map nome="Marco-zero do Recife" center={{lat: -8.063123361206603, lng: -34.87111791073427}}/>
          </div>
        </div>

        {screenWidth <= 500 ? (
          <div className="w-1/2 m-auto px-2">
            <Button onClick={() => navigate("/forte-5-pontas")}>
              forte 5 pontas
            </Button>
          </div>
        ) : (
          <div className="w-[12%] m-auto mb-2">
            <Button onClick={() => navigate("/forte-5-pontas")}>
              forte 5 pontas
            </Button>
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
