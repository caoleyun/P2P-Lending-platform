import React from 'react';
import $ from  'jquery/dist/jquery.min.js';


class SetTableBox extends React.Component{
	constructor({setSetTableBoxShow,tablecol}){
		super();
	}

	//组件上树后 调用
	componentDidMount(){
		$(this.refs.innerbox).css("top","-100%").show().animate({"top":"50%"},500);
	}

	exit(){
		let self=this;
		$(this.refs.innerbox).animate({"top":"-100%"},300,function(){
			self.props.setSetTableBoxShow(false);
		});
	}

	render(){
		return (
			<div className="settablebox">
				<div className="innerbox" ref="innerbox">
					<a href="javascript:;" className="closebtn" onClick={()=>{this.exit()}}>×</a>
					<div className="text-left">
						{
							this.props.tablecol.map((item,index)=>{
								return	<label key={index}><input type="checkbox" readOnly="readonly" checked={item.show} />{item.fieldchinesename}</label>
							})
						}
					</div>
				</div>
				SetTableBox
			</div>
		)
	}
}

export default SetTableBox;