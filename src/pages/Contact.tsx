import React from "react";
import { Footer } from "../components/Footer";
import Text from "../components/Text";
import { Header } from "../components/Header";
import { GithubIcon, InstagramIcon, Linkedin, TwitterIcon } from "lucide-react";
import { CreatorsCard } from "../components/CreatorsCard";
import { SocialButtons } from "../components/SocialButtons";

export function Contact() {
  const screenWidth = window.screen.width;

  return (
    <div>
      <Header />
      <div className="px-4 pt-4">
        <div className="flex flex-col">
          <Text size="xlg" className="leading-tight mb-12">
            Esta plataforma foi desenvolvida com o esforço e dedicação da <span className="font-bold bg-gradient-120 from-blue-400 via-rose-500 to-orange-500 bg-no-repeat text-transparent bg-clip-text cursor-default">Equipe Hórus</span> {" "}
            {/* <span className="font-bold bg-gradient-120 from-blue-400 via-rose-500 to-orange-500 bg-no-repeat bg-bottom bg-[length:100%_4px] hover:bg-[length:100%_100%] transition-[background-size] cursor-default">Equipe Hórus</span> */}
            formada pelos integrantes:
          </Text>
          {screenWidth <= 500 ? (
            <div className="flex flex-col gap-8 justify-center items-center">
              <div>
                <CreatorsCard
                  name={"Eduarda Lays"}
                  links={[
                    {
                      github: "https://github.com/duda-http",
                      instagram: "https://www.instagram.com/duda_l4/",
                      linkedIn:
                        "https://www.linkedin.com/in/maycom-willams-22b66716b/",
                    },
                  ]}
                />
              </div>
              <div>
                <CreatorsCard
                  name={"Hugo Alexandre"}
                  links={[
                    {
                      github: "https://github.com/HugoAS007",
                      instagram: "https://www.instagram.com/hugo_has_/",
                      linkedIn:
                        "https://www.linkedin.com/in/hugo-alexandre-a85643217/",
                    },
                  ]}
                />
              </div>
              <div>
                <CreatorsCard
                  name={"Maycom Willams"}
                  links={[
                    {
                      github: "https://github.com/maycomwill",
                      instagram: "https://www.instagram.com/maycomwill/",
                      linkedIn:
                        "https://www.linkedin.com/in/maycom-willams-22b66716b/",
                    },
                  ]}
                />
              </div>
              <div>
                <CreatorsCard
                  name={"Nathália Sousa"}
                  links={[
                    {
                      github: "https://github.com/Nathaliaraphaella",
                      instagram: "https://www.instagram.com/nathalia.rsousa/",
                      linkedIn:
                        "https://www.linkedin.com/in/nath%C3%A1lia-sousa-980438244/",
                    },
                  ]}
                />
              </div>
            </div>
          ) : (
            <div className="flex gap-8 flex-wrap items-center justify-center pt-4">
              <div>
                <CreatorsCard
                  name={"Eduarda Lays"}
                  links={[
                    {
                      github: "https://github.com/duda-http",
                      instagram: "https://www.instagram.com/duda_l4/",
                      linkedIn:
                        "https://www.linkedin.com/in/eduarda-lays-45a471264/",
                    },
                  ]}
                />
              </div>
              <div>
                <CreatorsCard
                  name={"Hugo Alexandre"}
                  links={[
                    {
                      github: "https://github.com/HugoAS007",
                      instagram: "https://www.instagram.com/hugo_has_/",
                      linkedIn:
                        "https://www.linkedin.com/in/hugo-alexandre-a85643217/",
                    },
                  ]}
                />
              </div>
              <div>
                <CreatorsCard
                  name={"Maycom Willams"}
                  links={[
                    {
                      github: "https://github.com/maycomwill",
                      instagram: "https://www.instagram.com/maycomwill/",
                      linkedIn:
                        "https://www.linkedin.com/in/maycom-willams-22b66716b/",
                    },
                  ]}
                />
              </div>
              <div>
                <CreatorsCard
                  name={"Nathália Sousa"}
                  links={[
                    {
                      github: "https://github.com/Nathaliaraphaella",
                      instagram: "https://www.instagram.com/nathalia.rsousa/",
                      linkedIn:
                        "https://www.linkedin.com/in/nath%C3%A1lia-sousa-980438244/",
                    },
                  ]}
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
