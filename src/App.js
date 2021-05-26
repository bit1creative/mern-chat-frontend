import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Join from "./components/Join/index.js";
import ChatRoom from "./components/ChatRoom/index.js";

const App = () => {
  function setViewHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setViewHeight();
    window.addEventListener("resize", () => {
      setViewHeight();
    });
  }, []);

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
