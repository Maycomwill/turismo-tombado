import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Text from "../components/Text";
import { Button } from "../components/Button";

import { Map } from "../components/Map";
import { Marker } from "@react-google-maps/api";

export function MarcoZero() {
  const navigate = useNavigate();
  const screenWidth = window.screen.width;

  return (
    <>
      <Header />
      <div className="mt-4 text-center">
        <Text weight="bold" size="xlg">
          Marco-Zero do Recife
        </Text>

        <Carousel
          images={[
            "https://i.imgur.com/JM6t6Xq.jpg",
            "https://i.imgur.com/wzEGBEQ.jpg",
            "https://i.imgur.com/b3YIKTU.jpg",
            "https://i.imgur.com/QWGuuYW.jpg",
          ]}
          className="my-4"
        />

        <div className="flex w-full items-center justify-center">
          <div className="mb-4 flex max-w-[325px] flex-col items-start justify-center text-justify md:max-w-[750px]">
            <Text paragraph="2">
              O Marco Zero no Recife Antigo é um dos pontos turísticos mais
              importantes para quem deseja conhecer a capital de Pernambuco.
              Isso porque é um local de importância histórica que conta o
              nascimento da cidade e possui forte referência cultural.
            </Text>
            <br />
            <Text paragraph="2">
              O Marco Zero no Recife Antigo é o lugar de referência onde a
              cidade nasceu e todas as medidas oficiais de distâncias
              rodoviárias usam como ponto de partida. Seu nome é, na verdade,
              Praça Rio Branco e fica ao lado do Porto de Pernambuco.
            </Text>
            <br />
            <Text paragraph="2">
              O passeio no Marco Zero no Recife Antigo acontece às margens do
              porto velho e permite conhecer palacetes históricos, instalações
              portuárias, bares, restaurantes e espaços culturais. Confira a
              seguir as melhores dicas do que fazer no local!
            </Text>
            <br />
            <Text>
              Horário de funcionamento: Todos os dias, o dia todo. Entrada
              gratuita.
            </Text>
            <br />
            <Text>Endereço: Av. Alfredo Lisboa - Recife, PE, 50030-150</Text>
          </div>
        </div>

        <div className="m-auto mb-4 w-full max-w-[95%] md:max-w-[50%]">
          <Map
            type="secondary"
            name="Marco-zero do Recife"
            center={{ lat: -8.063123361206603, lng: -34.87111791073427 }}
          />
        </div>
      </div>

      <div className="m-auto w-[25%] md:w-[10%]">
        <Button
          onClick={() => navigate(-1)}
          className="bg-pYellow-400 rounded-md px-4 py-2"
        >
          Voltar
        </Button>
      </div>

      <Footer />
    </>
  );
}
