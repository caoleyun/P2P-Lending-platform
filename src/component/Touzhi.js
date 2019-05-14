import React from 'react';
import {connect} from 'react-redux';
import Filterbar from './Filterbar/Filterbar.js';
import Nowfilter from './Nowfilter/Nowfilter.js';
import {fetchInitData,addfilter} from '../actions/touzhiaction.js';
import Range from './Range/Range.js';


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
	//显示过滤条
	showfilterbar(propsobj){
		var alreadyexsit=false;
		this.props.nowfilter.forEach((item)=>{
			(item.filtertitle===propsobj.title)&&(alreadyexsit=true);
		});
		return alreadyexsit?"":<Filterbar {...propsobj} />;
	}

	render(){
		return(
			<section>
				<div className="container"> 
					<div className="filterBox">
						<div className="row">
							<Nowfilter nowfilter={this.props.nowfilter} dispatch={this.props.dispatch} />

							<div className="row">
								<div className="col-lg-2 filter_t text-right">学校</div>
								<div className="col-lg-10">
									{
										this.showfilterbar(
											{
												options:this.props.filters.schools,  
												title:"学校" ,
												onpick:this.pickHandler.bind(this) 
											}
										)
									}
								</div>
							</div>

							<div className="row">
								<div className="col-lg-2 filter_t text-right">类型</div>
								<div className="col-lg-10">
									{
										this.showfilterbar(
											{
												options:this.props.filters.types ,
												title:"类型" ,
												onpick:(this.pickHandler).bind(this)
											}
										)
									}
								</div>
							</div>

							<div className="row">
								<div className="col-lg-2 filter_t text-right">所需金额：</div>
								<div className="col-lg-10">
									<Range 
										width={300} 
										min={this.props.filters.need.min} 
										max={this.props.filters.need.max} 
									/>
								</div>
							</div>
							
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