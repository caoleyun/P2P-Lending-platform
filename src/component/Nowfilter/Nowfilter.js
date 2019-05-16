import React from 'react';
import {delfilter} from '../../actions/touzhiaction.js'

class Nowfilter extends React.Component{
	constructor({nowfilter,dispatch}){
		super();
	}

	delme(filtertitle){
		this.props.dispatch(delfilter(filtertitle));
	}

	shownowfilter=()=>{
		var arr=[];
		this.props.nowfilter.forEach((item,index)=>{
			if(index!=0){
				arr.push(<li key={arr.length} className="t">且</li>);
			}
				if(item.filtertitle=="学校"||item.filtertitle=="类型"){
					arr.push(<li onClick={()=>{this.delme(item.filtertitle)}} key={arr.length}>{item.filtertitle} ： {item.v.join(" 或 ")}</li>);
				}else if(item.filtertitle=="所需金额范围"||item.filtertitle=="预期收益范围"){
					arr.push(<li onClick={()=>{this.delme(item.filtertitle)}} key={arr.length}>{item.filtertitle} ： {item.v.scaleLeft}~{item.v.scaleRight}</li>);
				}else if(item.filtertitle=="shouyiriqi"){
					arr.push(<li onClick={()=>{this.delme(item.filtertitle)}} key={arr.length}>{item.filtertitle} ： {item.v.b.year}年{item.v.b.month}月{item.v.b.day}~{item.v.e.year}年{item.v.e.month}月{item.v.e.day}</li>);
				}
			
		});

		return (
			<ul>
				{arr}
			</ul>
		)
	}

	render(){
		return(
			<div className="nowfilter">
				<div className="row">
					<div className="row">
						<div className="col-lg-1 col-md-1">
						当前过滤条件
						</div>
						<div className="col-lg-11 col-md-11">
							<ul>
								{this.shownowfilter()}
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}

}
export default Nowfilter;