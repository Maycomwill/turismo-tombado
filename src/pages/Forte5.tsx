import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Text from "../components/Text";
import { Button } from "../components/Button";

import Image1 from "../assets/5pontas/forte5pontas1.jpg";
import Image2 from "../assets/5pontas/forte5pontas2.jpg";
import Image3 from "../assets/5pontas/forte5pontas3.jpg";
import Image4 from "../assets/5pontas/forte5pontas4.jpg";

export function Forte5() {
  const navigate = useNavigate();
  const screenWidth = window.screen.width;

  return (
    <div className="w-screen h-full">
      <Header />
      <div className="text-center">
        <Text weight="bold" size="xlg">
          Forte das cinco pontas
        </Text>
        <div className="my-4">
          <Carousel
            images={[Image1, Image2, Image3, Image4]}
            className="mt-4"
          />
        </div>
        <div className="w-screen flex items-center justify-center">
          <div className="max-w-[325px] md:max-w-[750px] mb-4 flex flex-col items-start justify-center text-justify">
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
          </div>
        </div>
      </div>
      {screenWidth <= 500 ? (
        <div className="w-[25%] m-auto">
          <Button
            onClick={() => navigate(-1)}
            className="bg-pYellow-400 px-4 py-2 rounded-md"
          >
            Voltar
          </Button>
        </div>
      ) : (
        <div className="w-[10%] m-auto">
          <Button
            onClick={() => navigate(-1)}
            className="bg-pYellow-400 px-4 py-2 rounded-md"
          >
            Voltar
          </Button>
        </div>
      )}
      <Footer />
    </div>
  );
}
