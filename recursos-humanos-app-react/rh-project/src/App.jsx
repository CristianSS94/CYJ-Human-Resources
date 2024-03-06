import "bootstrap/dist/css/bootstrap.min.css";
import { CyjProvider } from "./context/CyjContext";
import { RoutesApp } from "./routes/RoutesApp";
import "./App.scss";

function App() {
  return (
    <>
      <CyjProvider>
        <RoutesApp />
      </CyjProvider>
    </>
  );
}

export default App;
