// import "./App.css";
import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer";
import Layout from "./layout";
import { Router } from "./Routing/router";
import { FormDataProvider } from "./context/FormDataContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    status: {
      warning: "#e65100",
    },
  });

  const routing = useRoutes(Router);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <FormDataProvider>
          <Layout />
          {routing}
          <Footer />
        </FormDataProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
