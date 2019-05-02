import React from "react";
import $ from 'jquery/dist/jquery.min.js';
// import './jquery.mousewheel.min.js';
import  mousewheelhandler from './mousewheelhandler.js';






class YearMonthPicker  extends React.Component{
	constructor(){
		super();

		this.state={
			"year":2019,
			"month":5
		}

		this.cyear=2019;
	}
		
	//向右切换年份
	rrBtnHandler(cyear){
		$(this.refs.span_container).append($(`<span>${cyear+2}</span>`)).animate({"left":-38},100,function(){
			$(this).find("span").eq(0).remove();
			$(this).css("left",0);

			$(this).find("span").eq(1).removeClass("cur");
			$(this).find("span").eq(2).addClass("cur");
		});
		//判断月份加cur
		$(".month_panel").find("a").removeClass("cur");
		if(cyear===this.state.year){
			$(".month_panel").find("a").eq(this.state.month-1).addClass("cur");
		}
	}
	//向左切换年份
	llBtnHandler(cyear){
		$(this.refs.span_container).prepend($(`<span>${cyear-2}</span>`)).animate({"left":38},100,function(){
			$(this).find("span").eq(-1).remove();
			$(this).css("left",0);

			$(this).find("span").eq(3).removeClass("cur");
			$(this).find("span").eq(2).addClass("cur");
		});
		//判断月份加cur
		$(".month_panel").find("a").removeClass("cur");
		if(cyear===this.state.year){
			$(".month_panel").find("a").eq(this.state.month-1).addClass("cur");
		}
	}



	//上树之后
	componentDidMount(){
		//绑定滚轮事件
		// var self=this;
		// $(this.refs.span_container).mousewheel(function(event,delta){
		// 	if(delta>0){
		// 		self.llBtnHandler(this.cyear);
		// 	}else{
		// 		self.rrBtnHandler(this.cyear);
		// 	}
		// });

		// mousewheelhandler();


		mousewheelhandler(this.refs.span_container);

	}

	render(){
		var cyear=this.cyear;

		return (
			<div className="YearMonthPicker">
				<div className="inner">
					<div className="year_panel">
						<div className="panel_inner">
							<div className="span_container" ref="span_container" >
								<span>{cyear-2}</span>
								<span>{cyear-1}</span>
								<span className="cur">{cyear}</span>
								<span>{cyear+1}</span>
								<span>{cyear+2}</span>
							</div>
						</div>

						<i className="ll" onClick={()=>{this.llBtnHandler(--cyear)}}></i>
						<i className="rr" onClick={()=>{this.rrBtnHandler(++cyear);}}></i>
					</div>
					<div className="month_panel">
						<div className="col">
							<a className={this.state.year === cyear && this.state.month === 1 ? "cur" : ""} href="javascript:void(0);">1月</a>
							<a className={this.state.year === cyear && this.state.month === 2 ? "cur" : ""} href="javascript:void(0);">2月</a>
							<a className={this.state.year === cyear && this.state.month === 3 ? "cur" : ""} href="javascript:void(0);">3月</a>
							<a className={this.state.year === cyear && this.state.month === 4 ? "cur" : ""} href="javascript:void(0);">4月</a>
							<a className={this.state.year === cyear && this.state.month === 5 ? "cur" : ""} href="javascript:void(0);">5月</a>
							<a className={this.state.year === cyear && this.state.month === 6 ? "cur" : ""} href="javascript:void(0);">6月</a>
						</div>
						<div className="col">
							<a className={this.state.year === cyear && this.state.month === 7 ? "cur" : ""} href="javascript:void(0);">7月</a>
							<a className={this.state.year === cyear && this.state.month === 8 ? "cur" : ""} href="javascript:void(0);">8月</a>
							<a className={this.state.year === cyear && this.state.month === 9 ? "cur" : ""} href="javascript:void(0);">9月</a>
							<a className={this.state.year === cyear && this.state.month === 10 ? "cur" : ""} href="javascript:void(0);">10月</a>
							<a className={this.state.year === cyear && this.state.month === 11 ? "cur" : ""} href="javascript:void(0);">11月</a>
							<a className={this.state.year === cyear && this.state.month === 12 ? "cur" : ""} href="javascript:void(0);">12月</a>
						</div>
					</div>
				</div>
			</div>
		)
	}    
		
}

export default YearMonthPicker;