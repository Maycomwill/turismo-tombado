import Text from "./Text";
import Logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { HamburguerMenu } from "./HamburguerMenu";
import { Button } from "./Button";
import { ThemeSettings } from "./ThemeSettings";

export function Header() {
  const screenWidth = window.screen.width;
  const navigate = useNavigate();
  return (
    <>
      {screenWidth <= 500 ? (
        <div className="w-full">
          <div className="w-full flex items-center justify-between p-4">
            <div>
              <HamburguerMenu />
            </div>
            <div className="hover:cursor-pointer" onClick={() => navigate("/")}>
              <img src={Logo} alt="Hórus Logo" className="w-12 h-12" />
            </div>
            <div>
              <Button className="px-2" onClick={() => navigate("/login")}>
                Login
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center justify-start gap-8 w-[50%]">
              <div
                className="hover:cursor-pointer"
                onClick={() => navigate("/")}
              >
                <img src={Logo} alt="Hórus Logo" className="w-14 h-14" />
              </div>
              <div className="flex items-center justify-start w-[80%] gap-12">
                <a onClick={() => navigate("/catalog")}>
                  <Text
                    color="blue"
                    size="md"
                    weight="black"
                    className="hover:text-orange-500 border-b-2 border-[#00000000] hover:border-b-2 hover:border-orange-500 transition-colors duration-100 hover:cursor-pointer"
                  >
                    Serviços
                  </Text>
                </a>
                <a onClick={() => navigate("/about")}>
                  <Text
                    color="blue"
                    size="md"
                    weight="black"
                    className="hover:text-orange-500 border-b-2 border-[#00000000] hover:border-b-2 hover:border-orange-500 transition-colors duration-100 hover:cursor-pointer"
                  >
                    Sobre
                  </Text>
                </a>
                <a onClick={() => navigate("/contact")}>
                  <Text
                    color="blue"
                    size="md"
                    weight="black"
                    className="hover:text-orange-500 border-b-2 border-[#00000000] hover:border-b-2 hover:border-orange-500 transition-colors duration-100 hover:cursor-pointer"
                  >
                    Contato
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Button className="px-4" onClick={() => navigate("/login")}>
                Login
              </Button>
              <div>
                <ThemeSettings />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
