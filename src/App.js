import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./components/ui/header";
import theme from "./components/ui/theme";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/ui/home";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          {" "}
          <Header></Header>
          <Switch>
            <Route exact path="/Home" component={Home}></Route>
            <Route
              exact
              path="/Services"
              component={() => <div>Services</div>}
            ></Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
