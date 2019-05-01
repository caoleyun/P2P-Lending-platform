import React from "react";
import createDataTable from "./createDataTable.js";
import YearMonthPicker from "./YearMonthPicker.js";





class Canlendar  extends React.Component{
	constructor(){
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
			year:2019,
			month:5
		}

	}
		
	//显示日期
	showDataTable(){
		var {reararr,arr,headarr}=createDataTable(this.state.year,this.state.month);
		var dataArr=reararr.concat(arr,headarr);
		var trs=[];
		var tds=[];
		dataArr.forEach((day,index)=>{
			if((index%7) === 0 && index!==0){
				trs.push(<tr key={index}>{tds}</tr>);
				tds=[];
			}
			tds.push(<td className={index < reararr.length || index >=42-headarr.length? "gray":" "} key={index}>{day}</td>);
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
	}

	//下一月点击事件
	goNextMonth(){
		if(this.state.month!==12){
			this.setState({"month":this.state.month+1});
		}else{
			this.setState({"year":this.state.year+1,"month":1});
		}
	}
		
	render(){
		return (
			<div className="canlendarChooser">
				<h4>
					<a onClick={(this.goPrevMonth).bind(this)}>上一月</a>
					{this.state.year}年{this.state.month}月
					<a onClick={(this.goNextMonth).bind(this)} >下一月</a>
				</h4>

				<YearMonthPicker />

				<table>
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