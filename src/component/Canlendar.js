import React from "react";
import createDataTable from "./createDataTable.js";
import YearMonthPicker from "./YearMonthPicker.js";
import $ from 'jquery/dist/jquery.min.js';






class Canlendar  extends React.Component{
	constructor({onpick,year,month,day,earliest,latest}){
		super();

		//得到返回的日历数据数组
		// //合并
		// var Allarr=reararr.concat(arr).concat(headarr);
		// //拆分
		// var result=[];
		// for(var i=0;i<Allarr.length;i+=7){
			
		// 	result.push(Allarr.slice(i,i+7));
		// }

		this.state={
			year,
			month,
			day,
			showPicker:false
		}

	}
		
	//显示日期
	showDataTable(){
		var {reararr,arr,headarr}=createDataTable(this.state.year,this.state.month);
		var dataArr=reararr.concat(arr,headarr);
		var trs=[];
		var tds=[];

		//类名函数
		let classname=(day,index)=>{
			//这个日的日期
			var thedate=new Date(this.state.year,this.state.month,day);
			if(this.props.earliest){
				//限制的最早的日期
				var earlistdate=new Date(this.props.earliest.year,this.props.earliest.month,this.props.earliest.day);
				//比较
				if(thedate-earlistdate<0){
					return "gray earliestinvaid";
				}
			}
			if(this.props.latest){
				//限制的最早晚的日期
				var latestdate=new Date(this.props.latest.year,this.props.latest.month,this.props.latest.day);
				//获取 开始日期组件的 日期
				// var hh=new Date(this.props.kk.kbyear,this.props.kk.kbmonth,this.props.kk.kbday);
				// console.log(" 开始日期组件的 日期",this.props.kk.kbyear,this.props.kk.kbmonth,this.props.kk.kbday);
				// //比较
				// ////根据开始日期决定  此组件的 前面的状态
				// if(thedate-hh<0){
				// 	return "gray latestinvaid";
				// }
				if(thedate-latestdate>0){
					return "gray latestinvaid";
				}
			}
			if(index < reararr.length ){
				return "gray prev";
			}else if(index >=42-headarr.length){
				return "gray next";
			}else{
				if (day===this.state.day){
					return "inmonth cur";
				}
				return "inmonth";
			}
			return  "";
		}

		dataArr.forEach((day,index)=>{
			if((index%7) === 0 && index!==0){
				trs.push(<tr key={index}>{tds}</tr>);
				tds=[];
			}
			tds.push(<td data-day={day} className={classname(day,index)} key={index}>{day}</td>);
		});
		trs.push(<tr key={5}>{tds}</tr>);
		return (
			<tbody>{trs}</tbody>
		)
	}

	//上一个月
	goPrevMonth(){
		if(this.state.month!==1){
			this.setState({"month":this.state.month-1});
		}else{
			this.setState({"year":this.state.year-1,"month":12});
		}
		//取消切换年份 cur问题
		this.setState({"day":0});
	}

	//下一月点击事件
	goNextMonth(){
		if(this.state.month!==12){
			this.setState({"month":this.state.month+1});
		}else{
			this.setState({"year":this.state.year+1,"month":1});
		}
		//取消切换年份 cur问题
		this.setState({"day":0});
	}
	//	显示年月选择框 设置开关
	onpick({year,month}){
		this.setState({showPicker:false});
		this.setState({
			year:year,
			month:month
		});
		// console.log(year , month);
	}
	//显示年月选择框
	showpicker(){
		if(this.state.showPicker){
			return <YearMonthPicker year={this.state.year} month={this.state.month} ref="" onpick={(this.onpick).bind(this)} ></YearMonthPicker>;
		}else{
			return "";
		}
	}

	//上树之后
	componentDidMount(){
		//绑定prev事件监听   事件委托
		var self = this;
		$(this.refs.table).delegate("td.prev","click",function(){
			self.goPrevMonth();
		});
		$(this.refs.table).delegate("td.next","click",function(){
			self.goNextMonth();
		});
		$(this.refs.table).delegate("td.inmonth","click",function(){
			self.setState({day:Number($(this).attr("data-day"))});
			//给父亲传值
			self.props.onpick(self.state);
		});

		(this.refs.canlendarChooser).onmousewheel=function(event){
			//此处有滚轮兼容问题待解决
			var direction = event.wheelDelta > 0 ? 1 : -1;
			if(direction<0){
				self.goPrevMonth();
			}else{
				self.goNextMonth();
			}
		};
	}

	render(){
		return (
			<div className="canlendarChooser" ref="canlendarChooser">
				<h4 onClick={()=>{ /*此处事件涉及事件冒泡  会覆盖 e.stopPropagation();*/ this.setState({showPicker:true})}}>
					{this.state.year}年{this.state.month}月
				</h4>

				<a onClick={(this.goPrevMonth).bind(this)} href="javascript:void(0)" className="leftBtn"></a>
				<a onClick={(this.goNextMonth).bind(this)} href="javascript:void(0)" className="rightBtn"></a>

				{this.showpicker()}

				<table ref="table">
					<thead>
						<tr>
							{["周日","周一","周二","周三","周四","周五","周六"].map((item,index)=>{
								return <th key={index} >{item}</th>
							})}
						</tr>
					</thead>
						{this.showDataTable()}
				</table>
			</div>
		)
	}    
		
}

export default Canlendar;