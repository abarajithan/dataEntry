import React from "react";
import ReactDOM from 'react-dom';

//router
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

//components
import AppContainer from "./components/AppContainer";
import Login from "./components/Login/Login";
import DataList from "./components/DataList/DataLists";
import CreateData from "./components/CreateData/CreateData";
import ViewData from "./components/ViewData/ViewData";
//auth HOC
import withAuth from "./HOCs/withAuth"

//css files
import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./styles/global.css"

//dummy users and roles
import { roles, users } from "./data/users"

//redux config
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/';

const store = createStore(rootReducer);

const reactEl = document.getElementById("react-app");




ReactDOM.render(
    <Provider store={store}>
       <Router onUpdate={console.log}>
    <Switch>
        <Route exact path='/login' component={Login}/>
        <AppContainer>
            <Route exact path='/' component={withAuth(DataList, [roles.ADMIN, roles.USER])}/>
            <Route exact path='/view/:productId' component={withAuth(ViewData, [roles.ADMIN, roles.USER])}/>
            <Route exact path='/create' component={withAuth(CreateData,  [roles.USER])}/>
            <Route exact path='/edit/:productId' component={withAuth(CreateData, [roles.USER])}/>
        </AppContainer>
    </Switch>
</Router>
    </Provider>, reactEl);

// Provider
// console.log("Script Loads !")