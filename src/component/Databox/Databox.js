import React from 'react';
import {connect} from 'react-redux';
import Datarow from './Datarow.js';
import SetTableBox from './SetTableBox.js';
import './table.less';


 class Databox extends React.Component{
 	constructor(){
 		super();
 	}
 	render(){
 		return (
 			<div className="databox">
 				<div className="text-right">
 					<a href="javascript:;">设置表格显示字段</a>
 				</div>
 				<table>
 					<thead>
 						<th>姓名</th>
 						<th>学校</th>
 						<th>目标金额</th>
 						<th>所需</th>
 						<th>完成</th>
 					</thead>
 					<tbody>
 						{this.props.data.map((data,index)=>{
 							return <Datarow key={index} data={data} />
 						})}
 					</tbody>
 				</table>
 			</div>
 		)
 	}
 }

 export default connect((state)=>{
	return {
		"data":state.reducers.touzhireducers.data
	}
 })(Databox);