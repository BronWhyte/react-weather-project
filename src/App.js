import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Tullamore" />
      <footer>
        <a
          href="https://github.com/BronWhyte/react-weather-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Bronwyn Whyte
      </footer>
    </div>
  );
}
