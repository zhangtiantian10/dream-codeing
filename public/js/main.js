import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reducer from "./reducers/index";
import Nav from './containers/Nav';
import Footer from './containers/footer.js';
import Home from './containers/Home';
import Person from './containers/Person';

import orderList from './containers/orderList.js';

import OnlineOrders from './containers/online-Orders.js';


const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}/>
            <Route path="/nav" component={Nav}/>
            <Route path="/Footer" component={Footer}/>
            <Route path="/person" component={Person}/>
            <Route path="/orderList" component={orderList}/>
            <Route path="/OnlineOrders" component={OnlineOrders}/>
        </Router>
    </Provider>, document.getElementById('app'));
