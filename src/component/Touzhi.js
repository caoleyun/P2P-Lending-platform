import React from 'react';
import {connect} from 'react-redux';
import Filterbar from './Filterbar/Filterbar.js';
import Nowfilter from './Nowfilter/Nowfilter.js';
import {fetchInitData,addfilter} from '../actions/touzhiaction.js';


class Touzhi extends React.Component{
	constructor({filters,dispatch,nowfilter}){
		super();
		//请求默认数据数据
		dispatch(fetchInitData());
	}
	//当子组件 给我们传来数据时
	pickHandler(title,v){
		console.log(title,v);
		this.props.dispatch(addfilter(title,v));
	}

	render(){
		return(
			<section>
				<div className="container"> 
					<div className="filterBox">
						<div className="row">
							<Nowfilter nowfilter={this.props.nowfilter} />
							<Filterbar options={this.props.filters.schools}  title="学校" onpick={(this.pickHandler).bind(this)} />
							<Filterbar options={this.props.filters.types}  title="类型" onpick={(this.pickHandler).bind(this)} />
						</div>
					</div>	
				</div>
			</section>
		)
	}
}

export default connect((state)=>{
	// console.log(state.reducers.touzhireducers.nowfilter);
	return {
		"filters" : state.reducers.touzhireducers.filters,
		"nowfilter":state.reducers.touzhireducers.nowfilter
	}
})(Touzhi);