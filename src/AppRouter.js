import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";
import { Favorite } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import { FavoritesProvider } from './Context/FavoritesContext';

const AppRouter = () => {

  return (
    <ThemeProvider>
      <FavoritesProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/favorite" component={Favorite} />
          </Switch>
        </Router>
      </FavoritesProvider>
    </ThemeProvider>
  );
};

export default AppRouter;
