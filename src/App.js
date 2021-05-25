import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Join from "./components/Join/index.js";
import ChatRoom from "./components/ChatRoom/index.js";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={ChatRoom} />
      </Switch>
    </Router>
  );
};

export default App;
