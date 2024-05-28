import { useContext } from "react";
import { AuthContext, AuthContextProps } from "../context/auth-context";

export default function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);
  return context;
}
