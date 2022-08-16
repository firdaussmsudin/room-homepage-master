import { CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import theme from "./theme/theme.jsx";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Navbar />
      <Header />
    </ThemeProvider>
     
    </>
  );
}

export default App;
