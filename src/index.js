import React from 'react';
import {render} from 'react-dom';
import App from './component/App.js';
import News from './component/News.js';
import Product from './component/Product.js';
import Content from './component/Content.js';

import './static/index.css';

import { combineReducers , createStore } from 'redux';
import { Provider } from 'react-redux';
import { routerReducer , syncHistoryWithStore } from 'react-router-redux';


import { Route , Link , HashRouter as Router , browserHistory } from 'react-router-dom'

import createHistory from 'history';



// import {BrowserRouter as Router , Route , Link} from "react-router-dom";

render(
	<Router>
		<div>

			<Link to="/" className="haha">首页</Link><br />
			<Link to="/news">新闻</Link><br />
			<Link to="/product">商品</Link><br />
			<hr/>



			<Route exact path="" component={App} />
			<Route  path="/news" component={News} />
			<Route  path="/product" component={Product} />
			<Route  path="/content/:aid" component={Content} />
		</div>
	</Router>
,document.getElementById("root"))
