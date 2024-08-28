import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import HtmlViewer from './HtmlViewer';
import YoTracker from "./YoTracker";
import YoLocator from "./YoLocator";
import YoLibrary from  "./YoLibrary";
import GoHome from "./GoHome";
import Footer from "./Footer";
import Login from "./Login";
import Dashboard from "./Dashboard";

const YoAfrica = () => {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route path="/locator">
                        <YoLocator/>
                    </Route>
                    <Route exact path="/Symptom Tracker">
                        <YoTracker/>
                    </Route>
                    <Route exact path="/library">
                        <YoLibrary/>
                    </Route>
                    <Route exact path="/news/latest">
                        <HtmlViewer filePath="/news.html" />
                    </Route>
                    <Route exact path="/home/login">
                        <Login/>
                    </Route>
                    <Route exact path="/home/login/dashboard">
                        <Dashboard/>
                    </Route>
                    {/* Fallback Route */}
                    <Route path="*">
                        {/* Display only the footer and GoHome button */}
                        <GoHome/>
                    </Route>
                </Switch>
                <Footer/>
            </>
        </Router>
    );
};

export default YoAfrica;
