import React from 'react';
import {render} from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reducer from "./reducers/index";
import App from './containers/hello.js';
import Nav from './containers/Nav';
import Footer from './containers/footer.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(reducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
            </Route>
            <Route path="/nav" component={Nav}/>
            <Route path="/Footer" component={Footer}/>
        </Router>
    </Provider>, document.getElementById('app'));
