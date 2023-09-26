import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Transactions from './components/Transactions';
import AddAccount from './components/AddAccount';
import AddLinkedAccounts from './components/AddLinkedAccounts';
import SelectBankLocation from './components/SelectBankLocation';
import Plaid from './components/Plaid';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/transactions" component={Transactions} />
                <Route path="/add-account" component={AddAccount} />
                <Route path="/add-linked-account" component={AddLinkedAccounts} />
                <Route path="/select-bank-location" component={SelectBankLocation} />
                <Route path="/plaid" component={Plaid} />
            </Switch>
        </Router>
    );
};

export default AppRouter;
