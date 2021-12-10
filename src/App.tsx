import "./styles/App.css";
import Header from "./components/Header";
import { useAppSelector } from "../src/app/hooks";

function App() {
  const isDarkMode = useAppSelector((state) => state.darkMode.isDarkMode);

  return (
    <div className="h-screen w-screen">
      <Header />
      <div>
        <h1 className="text-center mb-20 pt-80 text-9xl">
          Welcome to Eco Studios
        </h1>
        <p className="text-center text-5xl">
          Next generation of Software Development
        </p>
      </div>
    </div>
  );
}

export default App;
