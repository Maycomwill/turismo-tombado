import { useContext } from "react";

import { ThemeContext, switchProps } from "../context/ThemeContext";

export function useTheme(): switchProps {
  const context = useContext(ThemeContext);

  return context;
}
