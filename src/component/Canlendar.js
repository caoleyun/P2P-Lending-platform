import React from "react";
import createDataTable from "./createDataTable.js";





class Canlendar  extends React.Component{
	constructor(){
		super();

		//得到返回的日历数据数组
		var {reararr,arr,headarr}=createDataTable(2019,6);
		//合并
		var Allarr=reararr.concat(arr).concat(headarr);
		//拆分
		var result=[];
		for(var i=0;i<Allarr.length;i+=7){
			
			result.push(Allarr.slice(i,i+7));
		}

		this.state={
			"dataArr":result
		}

	}
		

	showDataTable(){
		var trs=[];
		this.state.dataArr.forEach((week,index)=>{
			var tds=[];
			week.forEach((day,index)=>{
				tds.push(<td key={index}>{day}</td>);
			});
			trs.push(<tr key={index}>{tds}</tr>);
		});
		return (
			<tbody>{trs}</tbody>
		)
	}
		
	render(){
		return (
			<div className="canlendarChooser">
				<h4>2019年4月</h4>
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