import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Header />
      <Header />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
// test