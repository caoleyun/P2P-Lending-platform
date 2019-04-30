import React from "react";
import Canlendar from './Canlendar.js';
import '../static/BECanlendar.less';





class BECanlendar  extends React.Component{
	constructor(){
		super();
	}
		
		
	render(){
		return (
			<div className="BECanlendar">
				<div className="result">
					2016年6月7日 - 2019年4月30日
					<span className="glyphicon glyphicon-calendar canlendarbtn"></span>
				</div>
				<div className="chooseBox">
					<div className="begin">
						开始日期：
						<div className="begin_result result">
							<span className="glyphicon glyphicon-calendar canlendarbtn"></span>
							<Canlendar />
						</div>
					</div>
					<div className="days">
						共<span className="month">6</span>月
					</div>
					<div className="end">
						结束日期：
						<div className="begin_result result">
							<span className="glyphicon glyphicon-calendar canlendarbtn"></span>
						</div>
					</div>
				</div>
				


			</div>
		)
	}    
		
}

export default BECanlendar;