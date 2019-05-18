import React from 'react';
import $ from  'jquery/dist/jquery.min.js';


class SetTableBox extends React.Component{
	constructor({setSetTableBoxShow,tablecol,onsubmit}){
		super();
		this.state=(function(){
			var o={};
			tablecol.forEach(function(item){
				o[item.fieldchinesename]=item.show;
			});
			return o;
		})();
	}

	//组件上树后 调用
	componentDidMount(){
		$(this.refs.innerbox).css("top","-100%").show().animate({"top":"50%"},500);
	}

	

	render(){
		return (
			<div className="settablebox">
				<div className="innerbox" ref="innerbox">
					<a href="javascript:;" className="closebtn" onClick={()=>{this.exit()}}>×</a>
					<div className="text-left">
						{this.showLabels()}
					</div>
					<input type="button" value="确定" onClick={()=>{this.props.onsubmit(this.state)}} />
					<input type="button" value="取消全部" 
						onClick={()=>{
							for(let k in this.state){
								this.setState({[k]:false,"姓名":true});
							}
						}}
					/>
					<input type="button" value="选择全部" 
						onClick={()=>{
							for(let k in this.state){
								this.setState({[k]:true});
							}
						}}
					/>
					<input type="button" value="反选" 
						onClick={()=>{
							for(let k in this.state){
								this.setState({[k]:!this.state[k],"姓名":true});
							}
						}}
					/>
				</div>
				SetTableBox
			</div>
		)
	}

	//点击差号  关闭此组件
	exit(){
		let self=this;
		$(this.refs.innerbox).animate({"top":"-100%"},300,function(){
			self.props.setSetTableBoxShow(false);
		});
	}

	//设置选择的 input
	setc=(fieldname,event)=>{
		//改变state
		this.setState({[fieldname]:event.target.checked});
	}

	//显示复选框
	showLabels(){
		var arr=[];
		for(let k in this.state){
			arr.push(<label   key={arr.length}><input type="checkbox" disabled={k=="姓名"}  checked={this.state[k]} onChange={(event)=>{this.setc(k,event)}} />{k}</label>)
		}
		return arr;
		
	}


}

export default SetTableBox;