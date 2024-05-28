import { ReactNode } from "react";
import { ThemeContextProvider } from "../context/ThemeContext";
import { AuthContextProvider } from "../context/auth-context";

interface AppProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <ThemeContextProvider>
      <AuthContextProvider>{children}</AuthContextProvider>
    </ThemeContextProvider>
  );
}

export default AppProvider;
