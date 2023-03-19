import React from "react";
import { Footer } from "../components/Footer";
import Text from "../components/Text";
import { Header } from "../components/Header";
import { GithubIcon, InstagramIcon, Linkedin, TwitterIcon } from "lucide-react";
import { CreatorsCard } from "../components/CreatorsCard";

export function Contact() {
  const screenWidth = window.screen.width;



  return (
    <div>
      <Header />
      <div className="px-4 pt-4">
        <div className="flex flex-col gap-8 mb-8">
          <Text size="xlg">
            A plataforma hórus foi desenvolvida pelo grupo "Os Panteras.
            Formados pelos integrantes:
          </Text>
          {screenWidth <= 500 ? (
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-center">
                <CreatorsCard
                  name={"Eduarda Lays"}
                  links={{
                    github: "https://github.com/maycomwill",
                    instagram: "https://www.instagram.com/duda_l4/",
                    linkedIn:
                      "https://www.linkedin.com/in/maycom-willams-22b66716b/",
                  }}
                />
              </div>
              <div className="flex justify-between items-center">
                <CreatorsCard
                  name={"Hugo Alexandre"}
                  links={{
                    github: "https://github.com/HugoAS007",
                    instagram: "https://www.instagram.com/hugo_has_/",
                    linkedIn:
                      "https://www.linkedin.com/in/hugo-alexandre-a85643217/",
                  }}
                />
              </div>
              <div className="flex justify-between items-center">
                <CreatorsCard
                  name={"Maycom Willams"}
                  links={{
                    github: "https://github.com/maycomwill",
                    instagram: "https://www.instagram.com/maycomwill/",
                    linkedIn:
                      "https://www.linkedin.com/in/maycom-willams-22b66716b/",
                  }}
                />
              </div>
              <div className="flex justify-between items-center">
                <CreatorsCard
                  name={"Nathália Sousa"}
                  links={{
                    github: "https://github.com/Nathaliaraphaella",
                    instagram: "https://www.instagram.com/nathalia.rsousa/",
                    linkedIn:
                      "https://www.linkedin.com/in/nath%C3%A1lia-sousa-980438244/",
                  }}
                />
              </div>
              <div className="flex justify-between items-center">
                <CreatorsCard
                  name={"Samara Luize"}
                  links={{
                    github: "https://github.com/Nathaliaraphaella",
                    instagram: "https://www.instagram.com/nathalia.rsousa/",
                    linkedIn:
                      "https://www.linkedin.com/in/nath%C3%A1lia-sousa-980438244/",
                  }}
                />
              </div>
            </div>
          ) : (
            <div className="flex gap-8 flex-wrap items-center justify-center pt-4">
              <div className="flex justify-between items-center">
                <CreatorsCard
                  name={"Eduarda Lays"}
                  links={{
                    github: "https://github.com/maycomwill",
                    instagram: "https://www.instagram.com/duda_l4/",
                    linkedIn:
                      "https://www.linkedin.com/in/eduarda-lays-45a471264/",
                  }}
                />
              </div>
              <div className="flex justify-between items-center">
                <CreatorsCard
                  name={"Hugo Alexandre"}
                  links={{
                    github: "https://github.com/HugoAS007",
                    instagram: "https://www.instagram.com/hugo_has_/",
                    linkedIn:
                      "https://www.linkedin.com/in/hugo-alexandre-a85643217/",
                  }}
                />
              </div>
              <div className="flex justify-between items-center">
                <CreatorsCard
                  name={"Maycom Willams"}
                  links={{
                    github: "https://github.com/maycomwill",
                    instagram: "https://www.instagram.com/maycomwill/",
                    linkedIn:
                      "https://www.linkedin.com/in/maycom-willams-22b66716b/",
                  }}
                />
              </div>
              <div className="flex justify-between items-center">
                <CreatorsCard
                  name={"Nathália Sousa"}
                  links={{
                    github: "https://github.com/Nathaliaraphaella",
                    instagram: "https://www.instagram.com/nathalia.rsousa/",
                    linkedIn:
                      "https://www.linkedin.com/in/nath%C3%A1lia-sousa-980438244/",
                  }}
                />
              </div>
              <div className="flex justify-between items-center">
                <CreatorsCard
                  name={"Samara Luize"}
                  links={{
                    github: "https://github.com/Nathaliaraphaella",
                    instagram: "https://www.instagram.com/nathalia.rsousa/",
                    linkedIn:
                      "https://www.linkedin.com/in/nath%C3%A1lia-sousa-980438244/",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
