import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Transactions from './components/Transactions';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/transactions" component={Transactions} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
