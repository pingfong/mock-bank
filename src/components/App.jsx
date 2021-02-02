import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyle from "../theme/globalStyle";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import TransactionTable from "./TransactionsTable";
import CreateTransaction from "./CreateTransaction";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/transactions">
            <TransactionTable />
          </Route>
          <Route path="/create">
            <CreateTransaction />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
