import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
// import { Button } from "@chakra-ui/react";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
