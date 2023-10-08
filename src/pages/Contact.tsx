import { Footer } from "../components/Footer";
import Text from "../components/Text";
import { Header } from "../components/Header";
import { CreatorsCard } from "../components/CreatorsCard";

export function Contact() {

  return (
    <div className="min-h-screen">
      <Header />
      <div className="px-4 pt-4">
        <div className="flex flex-col">
          <Text size="lg" className="mb-12 leading-tight ">
            Esta plataforma foi desenvolvida com o esforço e dedicação da{" "}
            <span className="from-blue-400 via-rose-500 to-orange-500 bg-clip-text bg-no-repeat font-bold text-transparent bg-gradient-120">
              Equipe Hórus
            </span>{" "}
            formada pelos integrantes:
          </Text>

          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap md:pt-4">
            <div>
              <CreatorsCard
                name={"Edilson Bernardo"}
                links={[
                  {
                    github: "https://github.com/ebernardo98",
                    instagram: "https://www.instagram.com/ebernaardo_/",
                    linkedIn:
                      "https://www.linkedin.com/in/edilson-bernardo-8868a918a",
                  },
                ]}
              />
            </div>
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
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
