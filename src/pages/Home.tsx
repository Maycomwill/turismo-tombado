import Text from "../components/Text";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Map } from "../components/Map";
import { Footer } from "../components/Footer";

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Header />
      <div className="px-4 pt-4">
        <div>
          <div className="mb-4 flex flex-col gap-2">
            <Text size="lg" className="leading-tight">
              Bem vindo(a) ao Hórus
            </Text>
            <Text size="md" className="leading-relaxed">
              Aqui você encontrará seu próximo destino turístico histórico com
              toda a facilidade.
            </Text>
            <Text size="md" className="leading-relaxed">
              Você pode navegar pelo mapa abaixo para encontrar alguns pontos
              históricos
            </Text>
          </div>
          <div className="margin-auto mb-8 w-full">
            <Map
              type="primary"
              name="Marco-zero do Recife"
              center={{ lat: -8.063123361206603, lng: -34.87111791073427 }}
            />
          </div>
        </div>
        <div className="w-container m-auto flex space-x-4 px-2 md:w-[80%]">
          <Button onClick={() => navigate("/forte-5-pontas")}>
            forte 5 pontas
          </Button>
          <Button onClick={() => navigate("/marcozero")}>marco-zero</Button>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
