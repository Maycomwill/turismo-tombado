import { Toaster } from "sonner";
import { IndexRoutes } from "./routes";
import "./styles/main.css";

function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-gray-100 dark:bg-gray-900">
      <Toaster richColors />
      <IndexRoutes />
    </div>
  );
}

export default App;
