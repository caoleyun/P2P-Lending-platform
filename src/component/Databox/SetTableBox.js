import React from 'react';
import $ from  'jquery/dist/jquery.min.js';


class SetTableBox extends React.Component{
	constructor({setSetTableBoxShow,tablecol}){
		super();
		this.state=(function(){
			var o={};
			tablecol.forEach(function(item){
				o[item.fieldname]=item.show;
			});
			return o;
		})();
		console.log(this.state);
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
						{
							this.props.tablecol.map((item,index)=>{
								return	<label key={index}><input type="checkbox"  checked={item.show} onChange={(event)=>{this.setc(item.fieldname,event)}} />{item.fieldchinesename}</label>
							})
						}
					</div>
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
		console.log(fieldname,event.target.checked);
		console.log(this.state);
		//改变state
	}


}

export default SetTableBox;