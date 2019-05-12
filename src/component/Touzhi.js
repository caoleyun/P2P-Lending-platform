import React from 'react';
import {connect} from 'react-redux';
import Filterbar from './Filterbar/Filterbar.js';
import {fetchInitData} from '../actions/touzhiaction.js';


class Touzhi extends React.Component{
	constructor({school,dispatch}){
		super();
		//请求数据
		dispatch(fetchInitData("filters"));
	}
	//当子组件 给我们传来数据时
	pickHandler(title,v){
		console.log(title,v);
	}

	render(){
		return(
			<section>
				<div className="container"> 
					<div className="filterBox">
						<div className="row">
							<Filterbar options={this.props.school}  title="学校" onpick={(this.pickHandler).bind(this)} />
							<Filterbar options={["哈哈","嘻嘻","卡卡"]}  title="学校" onpick={(this.pickHandler).bind(this)} />
						</div>
					</div>	
				</div>
			</section>
		)
	}
}

export default connect((state)=>{
	console.log(state.reducers.touzhireducers.filter.school);
	return {
		"school" : state.reducers.touzhireducers.filter.school
	}
})(Touzhi);