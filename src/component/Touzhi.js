import React from 'react';
import {connect} from 'react-redux';
import Filterbar from './Filterbar/Filterbar.js';
import Nowfilter from './Nowfilter/Nowfilter.js';
import {fetchInitData,addfilter} from '../actions/touzhiaction.js';
import Range from './Range/Range.js';
import BECanlendar from './BECanlendar/BECanlendar.js';


class Touzhi extends React.Component{
	constructor({filters,dispatch,nowfilter}){
		super();
		//请求默认数据数据
		dispatch(fetchInitData());
	}
	//当子组件 给我们传来数据时
	pickHandler(title,v){
		this.props.dispatch(addfilter(title,v));
	}
	//显示过滤条
	showfilterbar(propsobj){
		let alreadyexsit=false;
		this.props.nowfilter.forEach((item)=>{
			(item.filtertitle===propsobj.title)&&(alreadyexsit=true);
		});
		if(alreadyexsit){
			return "";
		}else{
			return (<div>
				<div className="col-lg-2 filter_t text-right">{propsobj.title}</div>
				<div className="col-lg-10">
					<Filterbar {...propsobj} />
				</div>
			</div>
			);
		}
	}
	//显示过滤条2
	showRange(propsobj){
		let alreadyexsit=false;
		this.props.nowfilter.forEach((item)=>{
			(item.filtertitle===propsobj.title)&&(alreadyexsit=true);
		});
		if(alreadyexsit){
			return "";
		}else{
			return (<div>
				<div className="col-lg-2 filter_t text-right">{propsobj.title}</div>
				<div className="col-lg-10">
					<Range  {...propsobj} />
				</div>
			</div>
			);
		}
	}

	//显示日历组件
	showBECanlendar(propsobj){
		let alreadyexsit=false;
		this.props.nowfilter.forEach((item)=>{
			(item.filtertitle===propsobj.title)&&(alreadyexsit=true);
		});
		if(alreadyexsit){
			return "";
		}else{
			return (<div>
				<div className="col-lg-2 filter_t text-right">{propsobj.title}</div>
				<div className="col-lg-10">
					<BECanlendar  {...propsobj} />
				</div>
			</div>
			);
		}
	}

	render(){
		return(
			<section>
				<div className="container"> 
					<div className="filterBox">
						<div className="row">
							<Nowfilter nowfilter={this.props.nowfilter} dispatch={this.props.dispatch} />

							<div className="row">
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

							<div className="row">
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

							<div className="row">
								{
									this.showRange(
										{
											width:300, 
											min:this.props.filters.need.min, 
											max:this.props.filters.need.max,
											title:"所需金额范围" ,
											onpick:(this.pickHandler).bind(this)
										}
									)
								}
							</div>

							<div className="row">
								{
									this.showRange(
										{
											width:300, 
											min:this.props.filters.need.min, 
											max:this.props.filters.need.max,
											title:"预期收益范围" ,
											onpick:(this.pickHandler).bind(this)
										}
									)
								}
							</div>
							<div className="row">
								{
									this.showBECanlendar({
										onpick: (this.pickHandler).bind(this),
										earliest:{year:new Date().getFullYear(),month:new Date().getMonth()+1,day:new Date().getDate()},
										latest:{year:2019,month:5,day:30}, 

										byear:this.props.filters.shouyiriqi.byear,
										bmonth:this.props.filters.shouyiriqi.bmonth,
										bday:this.props.filters.shouyiriqi.bday,

										eyear:this.props.filters.shouyiriqi.eyear,
										emonth:this.props.filters.shouyiriqi.emonth,
										eday:this.props.filters.shouyiriqi.eday,

										title:"shouyiriqi" 
									})
								}
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