import * as SwitchPrimitive from "@radix-ui/react-switch";
import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from 'lucide-react'

export function Switch() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <SwitchPrimitive.Root
        className="
        w-14 h-6 ring-1 ring-black dark:ring-white rounded-full relative focus:shadow-sm bg-[#00000020] dark:bg-[#ffffff20]"
        onCheckedChange={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        <SwitchPrimitive.Thumb className="bg-white w-8 h-8 rounded-full transition-transform duration-150 -translate-x-1 -translate-y-1 data-[state=checked]:translate-x-7 hover:ring-8 ring-[#00000040] dark:ring-[#ffffff40] flex items-center justify-center">
            {theme === 'dark' ? <Moon size={18}/> : <Sun size={18}/>}
        </SwitchPrimitive.Thumb>
      </SwitchPrimitive.Root>
    </div>
  );
}
