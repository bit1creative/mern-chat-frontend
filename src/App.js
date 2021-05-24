import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Join from "./components/Join/index.js";
import ChatRoom from "./components/ChatRoom/index.js";

const App = () => (
  <Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={ChatRoom} />
  </Router>
);

export default App;
