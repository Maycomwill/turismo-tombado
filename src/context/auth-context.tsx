import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";

export interface AuthContextProps {
  login: (data: LoginData) => void;
  register: (data: RegisterData) => void
  logout: () => void;
  auth: boolean;
  userData: UserData | undefined;
}

interface LoginData {
  email: string;
  password: string;
  reminder: boolean;
}

export interface UserData {
  first_name: string;
  last_name: String;
  email: string;
  id: string;
}

interface StorageSchema {
  token: string;
  user: UserData;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repassword: string;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState(false);
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    const storage = localStorage.getItem("horus-auth-data");

    if (storage) {
      const data: StorageSchema = JSON.parse(storage);

      verify(data.token);
      setUserData({
        first_name: data.user.first_name,
        email: data.user.email,
        id: data.user.id,
        last_name: data.user.last_name,
      });
    }
    return setAuth(false);
  }, []);

  async function verify(token: string) {
    try {
      const { data } = await axios.post("/api/auth/verify", {
        token,
      });

      return setAuth(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        setAuth(false);
        return toast.error(error.message);
      }
    }
  }

  async function login(formData: LoginData) {
    console.log(formData);
    try {
      const { data } = await axios.post("/api/auth", {
        email: formData.email,
        password: formData.password,
        reminder: formData.reminder,
      });

      toast.success(data.message);
      localStorage.setItem("horus-auth-data", JSON.stringify(data.data));
      return setAuth(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        localStorage.removeItem("horus-auth-data"),
          localStorage.removeItem("horus-auth-token");
        setAuth(false);
        return toast.error(error.message);
      }
    }
  }

  async function register(formData: RegisterData) {
    if (formData.password !== formData.repassword) {
      return toast.warning("As senhas devem ser idênticas");
    }

    try {
      const { data } = await axios.post("/api/users/register", {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      return toast.success("Usuário criado com sucesso");
    } catch (error) {
      if (error instanceof AxiosError) {
        return toast.error(error.message);
      }
    }
  }

  function logout() {
    setAuth(false);
    localStorage.removeItem("horus-auth-data");
    setUserData(undefined);
    return;
  }

  return (
    <AuthContext.Provider value={{ auth, login, register, userData, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
