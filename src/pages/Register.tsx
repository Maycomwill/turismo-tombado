import { Lock, Mail, User } from "lucide-react";
import { Input } from "../components/Input/index";
import Text from "../components/Text";
import { Button } from "../components/Button";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();
  function handleRegister(e: FormEvent) {
    e.preventDefault();

    register({
      email,
      firstName,
      lastName,
      password,
      repassword,
    });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRePassword("");
    return;
  }
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <Text>Register</Text>
      <div className="w-full flex-1 lg:w-2/5">
        <form
          onSubmit={handleRegister}
          className="flex w-full flex-col space-y-4 rounded px-6 py-4 lg:bg-zinc-300 lg:drop-shadow-[0_15px_12px_rgba(0,0,0,0.25)] lg:dark:bg-gray-900 lg:dark:drop-shadow-[0px_15px_12px_rgba(255,255,255,0.05)]"
        >
          <Input.Root for="first_name" label="Nome">
            <Input.Icon>
              <User />
            </Input.Icon>
            <Input.Content
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Ex: Jhon"
              autoComplete="false"
              id="first_name"
            />
          </Input.Root>
          <Input.Root for="last_name" label="sobrenome">
            <Input.Icon>
              <User />
            </Input.Icon>
            <Input.Content
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Ex: Doe"
              autoComplete="false"
              id="last_name"
            />
          </Input.Root>
          <Input.Root for="email" label="e-mail">
            <Input.Icon>
              <Mail />
            </Input.Icon>
            <Input.Content
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ex: john.doe@example.com"
              autoComplete="false"
              id="email"
              type="email"
            />
          </Input.Root>
          <Input.Root for="password" label="senha">
            <Input.Icon>
              <Lock />
            </Input.Icon>
            <Input.Content
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ex: ******"
              type="password"
              autoComplete="false"
              id="password"
            />
          </Input.Root>
          <Input.Root for="repassword" label="Digite a senha novamente">
            <Input.Icon>
              <Lock />
            </Input.Icon>
            <Input.Content
              value={repassword}
              onChange={(e) => setRePassword(e.target.value)}
              placeholder="Ex: ******"
              type="password"
              autoComplete="false"
              id="repassword"
            />
          </Input.Root>
          <div className="w-full pt-2">
            <Button type="submit">cadastrar</Button>
          </div>
        </form>
        <div className="px-6 pt-8">
          <Button
            type="submit"
            onClick={() => {
              navigate("/login");
            }}
          >
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Register;
