import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Text from "../components/Text";
import { Button } from "../components/Button";

import { Map } from "../components/Map";
import { Marker } from "@react-google-maps/api";

export function Forte5() {
  const navigate = useNavigate();
  const screenWidth = window.screen.width;

  return (
    <>
      <Header />
      <div className="mt-4 text-center">
        <Text weight="bold" size="xlg">
          Forte das cinco pontas
        </Text>

        <Carousel
          images={[
            "https://i.imgur.com/uOyd9gc.jpg",
            "https://i.imgur.com/07P7PQQ.jpg",
            "https://i.imgur.com/ZBk7BVu.jpg",
            "https://i.imgur.com/qgEYK6L.jpg",
          ]}
          className="my-4"
        />

        <div className="flex w-full items-center justify-center">
          <div className="mb-4 flex max-w-[325px] flex-col items-start justify-center text-justify md:max-w-[750px]">
            <Text paragraph="2">
              Forte de São Tiago das Cinco Pontas, mais conhecido como o forte
              das cinco pontas, localizado no bairro de São José, em Recife -
              PE, foi construido orinalmente em 630, pelos holandeses. É um dos
              monumentos mais expressivos do patrimônio colonial brasileiro.
            </Text>
            <br />
            <Text paragraph="2">
              Atualmente é o Museu da Cidade do Recife e oferece exposições de
              fotografias, mapas e fragmentos arqueológicos que representam a
              história da evolução urbana do Recife do século XVII aos dias de
              hoje.
            </Text>
            <br />
            <Text paragraph="2">
              Nos dias 12 de cada mês, o museu realiza um evento cívico para
              trocar a bandeira do Recife na presença de estudantes da rede
              escolar.
            </Text>
            <br />
            <Text>
              Horário de funcionamento: de terça-feira a domingo, das 9h às 17h.
              Entrada gratuita.
            </Text>
            <br />
            <Text>Contato: 3355-9543 / 3355-3107 / 3355-9544</Text>
            <br />
            <Text>
              Endereço: Praça das Cinco Pontas, s/n - São José, Recife - PE,
              50020-500
            </Text>
          </div>
        </div>

        <div className="m-auto mb-4 w-full max-w-[95%] md:max-w-[50%]">
          <Map
            type="secondary"
            name="Forte 5 pontas"
            center={{ lat: -8.071725227284393, lng: -34.88086888487637 }}
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
