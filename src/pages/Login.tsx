import Text from "../components/Text";
import Logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Check, Lock, Mail } from "lucide-react";
import { CustomInput } from "../components/Input";
import { useState } from "react";

export function Login() {
  const navigate = useNavigate();
  const [userMail, setUserMail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  return (
    <div className="max-w-[99%] w-full h-screen flex flex-col items-center justify-center py-8">
      <div className="h-full w-full flex flex-col gap-4 justify-start items-center">
        <div className="hover:cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} alt="Hórus Logo" className="w-28 h-w-28" />
        </div>
        <form
          action=""
          className="
            mt-4
            pt-4
            flex
            flex-col
            gap-4
            px-4
            bg-gray-100
            dark:bg-gray-900
            drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]
            dark:drop-shadow-[0px_15px_12px_rgba(255,255,255,0.05)]
            rounded-2xl
            h-[65%]
            md:h-[70%]
            w-[80%]
            max-w-[80%]
            md:w-[30%]
            md:max-w-[30%]
          "
          onSubmit={(e) => {
            e.preventDefault();
            setUserMail("");
            setUserPassword("");
            console.log("Login Test");
          }}
        >
          <div className="text-center">
            <Text size="2xl" weight="bold">
              Login
            </Text>
          </div>
          <div className="flex flex-col gap-1">
            <CustomInput.Root for="user-email" label="E-mail:">
              <CustomInput.Icon>
                <Mail />
              </CustomInput.Icon>
              <CustomInput.Input
                autoComplete="false"
                type="text"
                required
                onChange={(e) => setUserMail(e.target.value)}
                value={userMail}
                id="user-email"
                placeholder="Digite o seu email"
              />
            </CustomInput.Root>
          </div>
          <div className="flex flex-col gap-1">
            <CustomInput.Root for="user-password" label="Senha:">
              <CustomInput.Icon>
                <Lock />
              </CustomInput.Icon>
              <CustomInput.Input
                type="password"
                required
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassword}
                autoComplete="false"
                id="user-password"
                placeholder="Digite sua senha"
              />
            </CustomInput.Root>
          </div>
          <div>
            <Button type="submit">Login</Button>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-2 items-center justify-between md:mt-2">
            <div className="flex gap-1 items-center justify-center">
              <label htmlFor="rememberMe" className="flex items-center gap-1">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="
                  peer/rememberMe
                  appearance-none
                  h-6
                  w-6
                  border-[1px]
                  border-gray-900
                  dark:border-gray-100
                  outline-none
                  rounded-md
                  focus:outline-none
                  p-2
                  relative
                "
                />
                <Check
                  className="
                  absolute
                  md:top-[90%]
                  md:left-4
                  text-blue-500
                  text-opacity-0
                  check-1
                  transition-all
                  duration-150
                "
                />
                <Text>Manter logado</Text>
              </label>
            </div>
            <a href="">
              <Text className="underline underline-offset-2">
                Esqueci minha senha
              </Text>
            </a>
          </div>
        </form>
        <div>
          <a href="">
            <Text className="hover:underline underline-offset-2">
              Não possui uma conta? Crie agora
            </Text>
          </a>
        </div>
      </div>
    </div>
  );
}
