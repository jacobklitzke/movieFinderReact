import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./header";
import CurrentItems from "./currentItems";
import FindItems from "./findItems";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={CurrentItems} />
        <Route path="/findlistings" component={FindItems} />
      </div>
    </Router>
  );
}

export default App;
