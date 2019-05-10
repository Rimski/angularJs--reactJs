import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {StartScreen} from './screens/startScreen';
import {CountryList} from './screens/countryList';
//somehow route to angularJs...
function AppRouter() {
    return (
        <Router>
                <Route path="/" exact component={StartScreen} />
                <Route path="/islands/" component={StartScreen} />
                <Route path="/neibors/" component={CountryList} />
        </Router>
    );
}
export default AppRouter;