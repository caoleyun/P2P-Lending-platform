import React from "react";
import Canlendar from './Canlendar.js';
import '../static/BECanlendar.less';





class BECanlendar  extends React.Component{
	constructor(){
		super();

		//b表示开始日期
		//e表示结束日期
		this.state={
			"b":{
				"year":2019,
				"month":5,
				"day":3,
				"showCanlendar":false
			},
			"e":{
				"year":2029,
				"month":10,
				"day":1,
				"showCanlendar":false
			}
		}
	}

	//此组件的显示与否
	showCanlendar1(){
		// console.log(this.state.b.showCanlendar);
		if(this.state.b.showCanlendar){
			return <Canlendar {...this.state.b} onpick={(this.onpick1).bind(this)} />;
		}
	}
	showCanlendar2(){
		// console.log(this.state.e.showCanlendar);
		if(this.state.e.showCanlendar){
			return <Canlendar {...this.state.e} onpick={(this.onpick2).bind(this)}  />;
		}
	}


	//通过子组件传回的值 设置自己的state..
	onpick1({year,month,day}){
		this.setState({b:{showCanlendar:false,year,month,day}});
	}
	onpick2({year,month,day}){
		this.setState({e:{showCanlendar:false,year,month,day}});
	}
		
	render(){
		// console.log(this.state.b.year,this.state.b.month,this.state.b.day);
		// console.log(this.state.e.year,this.state.e.month,this.state.e.day);
		
		return (
			<div className="BECanlendar">
				<div className="result">
					2016年6月7日 - 2019年4月30日
					<span className="glyphicon glyphicon-calendar canlendarbtn"></span>
				</div>
				<div className="chooseBox">
					<div className="begin">
						开始日期：
						<div className="begin_result result" onClick={(event)=>{  /*此处事件涉及事件冒泡  会覆盖*/if(event.currentTarget==event.target){ if(this.state.b.showCanlendar){ this.setState({b:{...this.state.b,showCanlendar:false}}); }else{ this.setState({b:{...this.state.b,showCanlendar:true}});}  }}}>
							{this.state.b.year}年{this.state.b.month}月{this.state.b.day}日
							<span className="glyphicon glyphicon-calendar canlendarbtn" ></span>
							{this.showCanlendar1()}
						</div>
					</div>
					<div className="days">
						共<span className="month">6</span>月
					</div>
					<div className="end">
						结束日期：
						<div className="begin_result result" onClick={(event)=>{if(event.currentTarget==event.target){  if(this.state.e.showCanlendar){ this.setState({e:{...this.state.e,showCanlendar:false}}); }else{ this.setState({e:{...this.state.e,showCanlendar:true}});} } }}>
							{this.state.e.year}年{this.state.e.month}月{this.state.e.day}日
							<span className="glyphicon glyphicon-calendar canlendarbtn" ></span>
							{this.showCanlendar2()}
						</div>
					</div>
				</div>
				


			</div>
		)
	}    
		
}

export default BECanlendar;