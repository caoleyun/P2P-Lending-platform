import React from 'react';
import {render} from 'react-dom';


//依赖 。。。  redux  router
import { Provider } from 'react-redux';
import { combineReducers , createStore,applyMiddleware } from 'redux';
// import {BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router  } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
// import createHistory from 'history/createHashHistory';



//reducers
import reducers from './reducers/index.js'

//引入组件
import App from './component/App.js';

//插件
import 'bootstrap/dist/css/bootstrap.css';

//css less
import './static/Touzhi.less';

const store = createStore(
  combineReducers({
  	reducers,
    routing: routerReducer
  }),
  applyMiddleware(createLogger(),thunk)
)


render(
	<Provider store={store} >
	   <Router hashType="hashbang">
        <App />
	   </Router>
	</Provider>
,document.getElementById("root"));
