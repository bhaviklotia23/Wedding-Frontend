// import "./App.css";
import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer";
import Layout from "./layout";
import { Router } from "./Routing/router";

function App() {
  const routing = useRoutes(Router);
  return (
    <div>
      <Layout />
      {routing}
      <Footer />
    </div>
  );
}

export default App;
