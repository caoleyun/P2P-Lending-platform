import React from "react";
import $ from 'jquery/dist/jquery.min.js';
import PropTypes from "prop-types";
// import './jquery.mousewheel.min.js';






class YearMonthPicker  extends React.Component{
	constructor({onpick,year,month}){
		super();

		this.state={
			"year" : year ,
			"month":month
		}
		//位于视野中央的那个年份
		this.cyear=this.state.year;

		// console.log(this.state.year);
	}
		

	//向右切换年份
	rrBtnHandler(){
		++this.cyear;
		$(this.refs.span_container).append($(`<span>${this.cyear+2}</span>`)).stop(true,true).animate({"left":-38},100,function(){
			$(this).find("span").eq(0).remove();
			$(this).css("left",0);

			$(this).find("span").eq(2).addClass("cur").siblings().removeClass("cur");
		});
		//判断月份加cur
		$(this.refs.month_panel).find("a").removeClass("cur");
		if(this.cyear===this.state.year){
			$(this.refs.month_panel).find("a").eq(this.state.month-1).addClass("cur");
		}
		// console.log(this.cyear ,this.state.year , this.state.month);

	}
	//向左切换年份
	llBtnHandler(){
		--this.cyear;
		$(this.refs.span_container).prepend($(`<span>${this.cyear-2}</span>`)).stop(true,true).animate({"left":38},100,function(){
			$(this).find("span").eq(-1).remove();
			$(this).css("left",0);

			$(this).find("span").eq(2).addClass("cur").siblings().removeClass("cur");
		});
		//判断月份加cur
		$(this.refs.month_panel).find("a").removeClass("cur");
		if(this.cyear===this.state.year){
			$(this.refs.month_panel).find("a").eq(this.state.month-1).addClass("cur");
		}
		// console.log(this.cyear ,this.state.year , this.state.month);

	}






	//上树之后
	componentDidMount(){
		//绑定滚轮事件
		var self=this;
		this.refs.span_container.onmousewheel=function(event){
			var direction = event.wheelDelta > 0 ? 1 : -1;
			if(direction<0){
				self.llBtnHandler();
			}else{
				self.rrBtnHandler();
			}
		};
		//a标签事件
		$(this.refs.month_panel).find("a").click(function(){
			// console.log(self.cyear ,self.state.year , self.state.month);
			self.setState({"year":self.cyear,"month":Number($(this).attr("data-month"))});
			self.props.onpick(self.state);
		});

		//决定a标签的cur
		//判断月份加cur
		$(this.refs.month_panel).find("a").removeClass("cur");
		if(this.cyear===this.state.year){
			$(this.refs.month_panel).find("a").eq(this.state.month-1).addClass("cur");
		}

		//年份点击事件
		//新增span  用事件委托做新元素
		$(this.refs.span_container).delegate("span","click",function(){
			if($(this).index()>2){
				let a=$(this).index()-2;
				while(a){
					a--;
					self.rrBtnHandler();
				}
			}else if($(this).index()<2){
				let a=2-$(this).index();
				while(a){
					a--;
					self.llBtnHandler();
				}
			}

		});
		

	}

	render(){
		// var cyear=this.cyear;
// console.log("2");
// console.log(this.cyear, this.state.year, this.state.month);
// console.log(this.state.year);
		return (
			<div className="YearMonthPicker">
				<div className="inner">
					<div className="year_panel">
						<div className="panel_inner">
							<div className="span_container" ref="span_container" >
								<span>{this.state.year-2}</span>
								<span>{this.state.year-1}</span>
								<span className="cur">{this.state.year}</span>
								<span>{this.state.year+1}</span>
								<span>{this.state.year+2}</span>
							</div>
						</div>

						<i className="ll" onClick={()=>{this.llBtnHandler()}}></i>
						<i className="rr" onClick={()=>{this.rrBtnHandler()}}></i>
					</div>
					<div className="month_panel" ref="month_panel">
						<div className="col">
							<a href="javascript:void(0);" data-month="1">1月</a> 
							<a href="javascript:void(0);" data-month="2">2月</a>
							<a href="javascript:void(0);" data-month="3">3月</a>
							<a href="javascript:void(0);" data-month="4">4月</a>
							<a href="javascript:void(0);" data-month="5">5月</a>
							<a href="javascript:void(0);" data-month="6">6月</a>
						</div>
						<div className="col">
							<a href="javascript:void(0);" data-month="7">7月</a>
							<a href="javascript:void(0);" data-month="8">8月</a>
							<a href="javascript:void(0);" data-month="9">9月</a>
							<a href="javascript:void(0);" data-month="10">10月</a>
							<a href="javascript:void(0);" data-month="11">11月</a>
							<a href="javascript:void(0);" data-month="12">12月</a>
						</div>
					</div>
				</div>
			</div>
		)
	}    
		
}

// 判定父组件 传来的props的类型
YearMonthPicker.propTypes ={
	onpick:PropTypes.func.isRequired,
	year:PropTypes.number.isRequired,
	month:PropTypes.number.isRequired
}


export default YearMonthPicker;