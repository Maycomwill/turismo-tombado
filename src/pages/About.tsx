import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import Text from "../components/Text";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";

export function About() {
  const navigate = useNavigate();
  const screenWidth = window.screen.width;

  return (
    <div className="h-screen">
      <Header />
      <div className="px-4 pt-4">
        <div className="flex flex-col gap-2 mb-4">
          <Text size="xlg" className="leading-tight">Bem vindo(a) ao Hórus</Text>
          {screenWidth <= 500 ? (
            <div className="leading-relaxed">
              <Text size="lg" paragraph="2">
                Esta plataforma foi desenvolvida como parte do Projeto Integrado
                no curso de Desenvolvimento de Sistemas no ETE - José David Gil
                Rodrigues.
              </Text>
              <br/>
              <br/>
              <Text size="lg" paragraph="2">
                Com a situação recente em que todos nós passamos durante a
                pandemia de COVID-19, o setor de turismo foi bastante afetada.
              </Text>
              <br/>
              <br/>
              <Text size="lg" paragraph="2">
                Com a recuperação lenta, porém, constante, a plataforma tem como
                objetivo principal, reunir diversos pontos turísticos em um mapa
                interativo, onde o usuário poderá selecionar um ponto e ser
                redirecionado a uma página individual, obtendo informações sobre
                o local como: Endereço, Telefone, Taxas, Horário de
                funcionamento e mais.
              </Text>
            </div>
          ) : (
            <div className="leading-relaxed">
              <Text size="lg">
                Esta plataforma foi desenvolvida como parte do Projeto Integrado
                no curso de Desenvolvimento de Sistemas no ETE - José David Gil
                Rodrigues.
              </Text>
              <br/>
              <br/>
              <Text size="lg">
                Com a situação recente em que todos nós passamos durante a
                pandemia de COVID-19, o setor de turismo foi bastante afetada.
              </Text>
              <br/>
              <br/>
              <Text size="lg">
                Com a recuperação lenta, porém, constante, a plataforma tem como
                objetivo principal, reunir diversos pontos turísticos em um mapa
                interativo, onde o usuário poderá selecionar um ponto e ser
                redirecionado a uma página individual, obtendo informações sobre
                o local como: Endereço, Telefone, Taxas, Horário de
                funcionamento e mais.
              </Text>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 text-center w-full">
        <Footer />
      </div>
    </div>
  );
}
