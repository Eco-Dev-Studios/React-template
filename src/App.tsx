import "./styles/App.css";
import Header from "./components/Header";
import { useEffect } from "react";
import { useAppDispatch } from "./app/hooks";
import { toggleDarkMode } from "./features/darkMode/dark-mode-slice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log();
    const isDarkFromUser = localStorage.getItem("theme");
    if (isDarkFromUser) {
      dispatch(toggleDarkMode());
    }
  }, []);

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
