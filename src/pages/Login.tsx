import Text from "../components/Text";
import Logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Check, Lock, Mail } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Input } from "../components/Input";
import useAuth from "../hooks/useAuth";

export function Login() {
  const navigate = useNavigate();
  const [userMail, setUserMail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [reminder, setReminder] = useState(false);
  const { auth, login } = useAuth();

  if(auth === true){
    window.location.replace("/")
  }

  function handleLogin(e: FormEvent) {
    e.preventDefault();
    login({ email: userMail, password: userPassword, reminder });
    setReminder(false);
    setUserMail("");
    setUserPassword("");
  }

  return (
    <div className="flex h-screen w-full max-w-[99%] flex-col items-center justify-center py-8">
      <div className="flex h-full w-full flex-col items-center justify-start gap-4">
        <div className="hover:cursor-pointer" onClick={() => navigate("/")}>
          <img src={Logo} alt="Hórus Logo" className="h-w-28 w-28" />
        </div>
        <form
          className="
            mt-4
            flex
            h-[65%]
            w-[80%]
            max-w-[80%]
            flex-col
            gap-4
            rounded-2xl
            bg-gray-100
            px-4
            pt-4
            drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)]
            dark:bg-gray-900
            dark:drop-shadow-[0px_15px_12px_rgba(255,255,255,0.05)]
            md:w-[50%]
            lg:h-[70%]
            lg:w-[35%]
            lg:max-w-[35%]
          "
          onSubmit={handleLogin}
        >
          <div className="text-center">
            <Text size="2xl" weight="bold">
              Login
            </Text>
          </div>
          <div className="flex flex-col gap-1">
            <Input.Root for="user-email" label="E-mail:">
              <Input.Icon>
                <Mail />
              </Input.Icon>
              <Input.Content
                autoComplete="false"
                type="text"
                required
                onChange={(e) => setUserMail(e.target.value)}
                value={userMail}
                id="user-email"
                placeholder="Digite o seu email"
              />
            </Input.Root>
          </div>
          <div className="flex flex-col gap-1">
            <Input.Root for="user-password" label="Senha:">
              <Input.Icon>
                <Lock />
              </Input.Icon>
              <Input.Content
                type="password"
                required
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassword}
                autoComplete="false"
                id="user-password"
                placeholder="Digite sua senha"
              />
            </Input.Root>
          </div>
          <div>
            <Button type="submit">Login</Button>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-2 md:mt-2 md:flex-row">
            <div className="flex items-center justify-center gap-1">
              <label htmlFor="rememberMe" className="flex items-center gap-1">
                <input
                  checked={reminder}
                  onChange={() => {
                    setReminder(!reminder);
                  }}
                  type="checkbox"
                  id="rememberMe"
                  className="
                  peer/rememberMe
                  relative
                  h-6
                  w-6
                  appearance-none
                  rounded-md
                  border-[1px]
                  border-gray-900
                  p-2
                  outline-none
                  focus:outline-none
                  dark:border-gray-100
                "
                />
                <Check
                  className="
                  check-1
                  absolute
                  text-blue-500
                  text-opacity-0
                  transition-all
                  duration-150
                  md:top-[95]
                  md:bottom-[10]
                  md:left-4
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
          <a href="/register">
            <Text className="underline-offset-2 hover:underline">
              Não possui uma conta? Crie agora
            </Text>
          </a>
        </div>
      </div>
    </div>
  );
}
