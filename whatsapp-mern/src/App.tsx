import React from "react";
import "./App.css";
import { Sidebar } from "./views/sidebar/Sidebar";
import { Chat } from "./views/chat/Chat";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <CssBaseline />
      <div className="App">
        <div className="app__body">
          <Sidebar />
          <Chat />
        </div>
      </div>
    </>
  );
}

export default App;
