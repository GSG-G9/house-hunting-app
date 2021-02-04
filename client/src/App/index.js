import  React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import InputField from "../Components/InputField";
import './style.css';

function App() {
  return (
    <ThemeProvider theme= {theme}>
      <CssBaseline/>
      <InputField/>
        <div>
          <h1>welcome form hunting app!</h1>
        </div>
    </ThemeProvider>
  );
}

export default App;
