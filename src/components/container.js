import React from "react";
import { Header } from "./header";
import { Routes } from "./routes";
import { Footer } from "./footer";
import {
    BrowserRouter as Router,
} from "react-router-dom";


export const Container = () => {
    return(
        <div>
            <Router>
                <Header />
                <Routes />
                <Footer />
            </Router>            
        </div>
    )

}