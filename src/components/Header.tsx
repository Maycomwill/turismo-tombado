import Text from "./Text";
import Logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { HamburguerMenu } from "./HamburguerMenu";
import { Button } from "./Button";
import { ThemeSettings } from "./ThemeSettings";
import useAuth from "../hooks/useAuth";

export function Header() {
  const screenWidth = window.screen.width;
  const { userData, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      {screenWidth <= 500 ? (
        <div className="w-full">
          <div className="flex w-full items-center justify-between p-4">
            <div>
              <HamburguerMenu />
            </div>
            <div className="hover:cursor-pointer" onClick={() => navigate("/")}>
              <img src={Logo} alt="Hórus Logo" className="h-12 w-12" />
            </div>
            <div>
              {userData ? (
                <div className="group relative flex flex-col items-center ">
                <Text weight="bold" uppercase size="lg">
                  {userData.first_name}
                </Text>
                <div className="hidden absolute -bottom-10 w-full transition-all duration-150 ease-in-out group-hover:block">
                  <Button onClick={logout}>Sair</Button>
                </div>
              </div>
              ) : (
                <Button className="px-2" onClick={() => navigate("/login")}>
                  Login
                </Button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between p-4">
            <div className="flex w-[50%] items-center justify-start gap-8">
              <div
                className="hover:cursor-pointer"
                onClick={() => navigate("/")}
              >
                <img src={Logo} alt="Hórus Logo" className="h-14 w-14" />
              </div>
              <div className="flex w-[80%] items-center justify-start gap-12">
                <a onClick={() => navigate("/catalog")}>
                  <Text
                    color="blue"
                    size="md"
                    weight="black"
                    className="border-b-2 border-[#00000000] transition-colors duration-100 hover:cursor-pointer hover:border-b-2 hover:border-orange-500 hover:text-orange-500"
                  >
                    Serviços
                  </Text>
                </a>
                <a onClick={() => navigate("/about")}>
                  <Text
                    color="blue"
                    size="md"
                    weight="black"
                    className="border-b-2 border-[#00000000] transition-colors duration-100 hover:cursor-pointer hover:border-b-2 hover:border-orange-500 hover:text-orange-500"
                  >
                    Sobre
                  </Text>
                </a>
                <a onClick={() => navigate("/contact")}>
                  <Text
                    color="blue"
                    size="md"
                    weight="black"
                    className="border-b-2 border-[#00000000] transition-colors duration-100 hover:cursor-pointer hover:border-b-2 hover:border-orange-500 hover:text-orange-500"
                  >
                    Contato
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              {userData ? (
                <div className="group relative flex flex-col items-center ">
                  <Text weight="bold" uppercase size="lg">
                    {userData.first_name}
                  </Text>
                  <div className="hidden absolute -bottom-10 w-full transition-all duration-150 ease-in-out group-hover:block">
                    <Button onClick={logout}>Sair</Button>
                  </div>
                </div>
              ) : (
                <Button className="px-2" onClick={() => navigate("/login")}>
                  Login
                </Button>
              )}
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
