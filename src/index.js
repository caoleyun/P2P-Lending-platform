import React from 'react';
import {render} from 'react-dom';


//依赖 。。。  redux  router
import { Provider } from 'react-redux';
import { combineReducers , createStore } from 'redux';
import {BrowserRouter as Router,Route,Link } from 'react-router-dom';
// import { Route , Link , HashRouter as Router , browserHistory } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';
// import createHistory from 'history/createHashHistory';



//store

//引入组件
// import BECanlendar from './component/BECanlendar/BECanlendar.js';
// import Range from './component/Range/Range.js';

//插件
// import 'bootstrap/dist/css/bootstrap.css';


const store = createStore(
  combineReducers({
    routing: routerReducer
  })
);


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
   
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          rendering
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
    
  </div>
)

render(
	(
	<Provider store={store} >
		<Router hashType="hashbang">
		    <div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/Topics">Topics</Link></li>
				</ul>
				<hr/>
				<Route exact path="/" component={Home}/>
				<Route path="/about" component={About}/>
				<Route path="/Topics" component={Topics}/>
			</div>
	    </Router>
	</Provider>
	)
,document.getElementById("root"));
