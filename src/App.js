import React from "react";
import { useSelector } from "react-redux/es/exports";
import "./App.css";
import Cards from "./components/Cards";
import data from "./components/data";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDetails from "./components/Carddetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PlayerPurchase from "./components/PlayerPurchase";
import Naavbar from "./components/navbar";
import store from "./store/store";

function App() {
const lang = useSelector((state)=>state.lang.currentlang)

  return (
    <section className="app ">
      <div dir={lang === "ar"?"rtl":"ltr"} className={`${lang==="ar"?"text-right":"text-left"}`}>
      <Router>
        <Switch>
          <Route path={"/"} exact component={Cards} />

          {/* <Route path={"/CardDetails"} exact component={CardDetails} /> */}
          <Route
            path={"/PlayerPurchase/:id?"}
            exact
            component={PlayerPurchase}
          />
          {/* <Route path={"/data/:id?"} exact component={data} /> */}
        </Switch>
      </Router>
      </div>
    </section>
  );
}

export default App;
