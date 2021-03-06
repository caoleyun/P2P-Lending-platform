import React from 'react';
import {connect} from 'react-redux';
import Datarow from './Datarow.js';
import SetTableBox from './SetTableBox.js';
import './table.less';


 class Databox extends React.Component{
 	constructor(){
 		super();

 		this.state={
 			settableboxshow : false ,
 			tablecol:[
 				{"fieldname":"name","fieldchinesename":"姓名","show":true},
 				{"fieldname":"school","fieldchinesename":"学校","show":true},
 				{"fieldname":"target","fieldchinesename":"目标金额","show":true},
 				{"fieldname":"done","fieldchinesename":"已完成","show":true},
 				{"fieldname":"need","fieldchinesename":"仍需要金额","show":true},
 				{"fieldname":"min","fieldchinesename":"最小投资","show":false},
 				{"fieldname":"max","fieldchinesename":"最大投资","show":false},
 				{"fieldname":"type","fieldchinesename":"类型","show":false},
 				{"fieldname":"rate","fieldchinesename":"回报率","show":true},
 				{"fieldname":"credit","fieldchinesename":"信用","show":false},
 				{"fieldname":"province","fieldchinesename":"省份","show":false},
 				{"fieldname":"earnings_time","fieldchinesename":"收益日期","show":true}
 			]
 		}
 	}


 	render(){
 		return (
 			<div className="databox">
 				共{this.props.data.length}条数据
 				<div className="text-right">
 					<a href="javascript:;" onClick={()=>{this.setSetTableBoxShow(true)}}>设置表格显示字段</a>
 					{this.showSetTableBox()}
 				</div>
 				<table>
 					<thead>
 						<tr>
	 						{this.state.tablecol.map((item,index)=>{
	 							if(item.show){
	 								return <th key={index}>{item.fieldchinesename}</th>
	 							}
	 						})}
	 					</tr>
 					</thead>
 					<tbody>
 						{this.props.data.map((data,index)=>{
 							return <Datarow key={index} data={data} tablecol={this.state.tablecol} />
 						})}
 					</tbody>
 				</table>
 			</div>
 		)
 	}

 	//SetTableBox组件显示与否
 	showSetTableBox(){
 		return this.state.settableboxshow?<SetTableBox setSetTableBoxShow={(this.setSetTableBoxShow).bind(this)} onsubmit={this.submithandler.bind(this)} tablecol={this.state.tablecol}  />:"";
 	}
 	//接收子组件  传回的数据
 	submithandler(data){
 		this.setState({
 			"settableboxshow":false,
 			"tablecol":this.state.tablecol.map((obj)=>{
 				return {
 					...obj,
 					"show":data[obj.fieldchinesename]
 				}
 			})
 		});
 	}
 	//关闭 开启 SetTableBox组件
 	setSetTableBoxShow(booleanvalue){
 		this.setState({settableboxshow:booleanvalue});
 	}


 }

 export default connect((state)=>{
	return {
		"data":state.reducers.touzhireducers.data
	}
 })(Databox);