import React from 'react';

class Nowfilter extends React.Component{
	constructor({nowfilter}){
		super();
	}

	shownowfilter=()=>{
		var arr=[];
		this.props.nowfilter.forEach((item,index)=>{
			if(index!=0){
				arr.push(<li key={arr.length} className="t">且</li>);
			}
				arr.push(<li key={arr.length}>{item.filtertitle} ： {item.v.join(" 或 ")}</li>);
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
						<div className="col-lg-1">
						当前过滤条件
						</div>
						<div className="col-lg-11">
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