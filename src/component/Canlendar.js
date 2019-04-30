import React from "react";
import createDataTable from "./createDataTable.js";





class Canlendar  extends React.Component{
	constructor(){
		super();

		//得到返回的日历数据数组
		var {reararr,arr,headarr}=createDataTable(2019,2);
		// //合并
		// var Allarr=reararr.concat(arr).concat(headarr);
		// //拆分
		// var result=[];
		// for(var i=0;i<Allarr.length;i+=7){
			
		// 	result.push(Allarr.slice(i,i+7));
		// }

		this.state={
			year:2019,
			month:2,
			reararr,
			arr,
			headarr,
			"dataArr":reararr.concat(arr,headarr)
		}

	}
		

	showDataTable(){
		var trs=[];
		var tds=[];
		this.state.dataArr.forEach((day,index)=>{
			if(index%7==0 && index !=0){
				trs.push(<tr key={index}>{tds}</tr>);
				tds=[];
			}
			tds.push(<td className={index < this.state.reararr.length || index >=42-this.state.headarr.length? "gray":" "} key={index}>{day}</td>);
		});
		trs.push(<tr key={5}>{tds}</tr>);
		return (
			<tbody>{trs}</tbody>
		)
	}
		
	render(){
		return (
			<div className="canlendarChooser">
				<h4>{this.state.year}年{this.state.month}月</h4>
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