import React from 'react';
import {Route,Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Shouye from './Shouye.js';
import Touzhi from './Touzhi.js';


	
//给选中的路由加cur    包括旗下的子路由
let testactive=(hash)=>{
	//用/拆分url为数组
	var hasharr=window.location.hash.substr(3).split("/");
	if(hasharr[0]===hash){
		return "active";
	}
	return "";
}

class App extends React.Component{
	render(){
		return (
		  	<section>
		  		<header>
						<nav className="navbar navbar-default">
						  <div className="container-fluid">
						    <div className="navbar-header">
						      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						        <span className="sr-only">Toggle navigation</span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						      </button>
						      <a className="navbar-brand" href="#">P2P2</a>
						    </div>

						    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						      <ul className="nav navbar-nav">
						        <li className={testactive("")}><Link to="/">首页 <span className="sr-only"></span></Link></li>
						        <li className={testactive("invest")}><Link to="/invest">投资<span className="sr-only"></span></Link></li>
						      </ul>
						     
						      <ul className="nav navbar-nav navbar-right">
						        <li><a href="#">登录成功</a></li>
						      </ul>
						    </div>
						  </div>
						</nav>
		  		</header>
		 		<section>
		 			<Route exact path="/" component={Shouye}></Route>
		 			<Route path="/invest" component={Touzhi}></Route>
		 		</section>
		  	</section>
		);
	}
}

export default connect()(App);