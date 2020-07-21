import React from "react";
import { Home } from "./pages/home/home";
import { About } from "./pages/about";
import { FAQ } from "./pages/faq/faq";
import { Plans } from "./pages/plans/plans";
import { P404 } from "./pages/notfound";
import {
    Switch,
    Route,
  } from "react-router-dom";

export const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/faqs" component={FAQ} />
            <Route exact path="/plans" component={Plans} />
            <Route component={P404} />
        </Switch>
    )
}