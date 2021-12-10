import "./App.css";
import Header from "./components/Header";
import { useAppSelector } from "../src/app/hooks"


function App() {

  const isDarkMode = useAppSelector(state => state.darkMode.isDarkMode);


  return (
    <div style={{
      backgroundColor: isDarkMode ? '#181818' : '#fff',
      color: isDarkMode ? '#fff' : '#181818',
      width: '100vw',
      height: '100vh',
    }}>
      <Header />
      <div>
        <h1 className="text-9xl pt-80 mb-20 text-center">
          Welcome to Eco Studios
        </h1>
        <p className="text-5xl text-center">
          Next generation of Software Development
        </p>
      </div>

    </div>
  );
}

export default App;
