import Provider from "./context/SiteContext";
import Home from "./Home";
import "./index.css";

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
