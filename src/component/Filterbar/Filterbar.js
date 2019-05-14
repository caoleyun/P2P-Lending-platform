import React from 'react';
import $ from  'jquery/dist/jquery.min.js';


class Filterbar extends React.Component{
	constructor({options,title,onpick}){
		super();

		this.state={
			v:[],
			shape:"radio" //radio 单选 checkbox 多选
		}
	}

	//单选 筛选
	chooseradio(item){
		let arr=[];
		this.setState({"v":[item]});
		//向父组件 传数据
		arr.push(item);
		this.props.onpick(this.props.title,arr);
		// $(this).css("display","none");
	}
	//多选 筛选
	choosecheckbox(){
		//这里要决定数组怎么变 必须要知道哪些 复选框选中
		//react 中没有双向绑定
		var arr=[];
		$(this.refs.checkbox).find("input[type=checkbox]:checked").each(function(){
			arr.push($(this).val());
		});
		this.setState({"v":arr});
	}

	//上传数据 （给父组件传数据）
	submitdata(){
		this.props.onpick(this.props.title,this.state.v);
	}

	showshape(){
		if(this.state.shape=="radio"){
			return <div className="radio">
						{
							this.props.options.map((item,index)=>{
								return <a 
											key={index} 
											href="javascript:;" 
											onClick={()=>{this.chooseradio(item)}}
											className={this.state.v[0]==item?"cur":""}
										>{item}</a>
							})
						}
						<a href="javascript:;" className="mutibtn" onClick={()=>{this.setState({"shape":"checkbox"})}}>多选+</a>
					</div>
		}else{
			return <div className="checkbox" ref="checkbox">
						{
							this.props.options.map((item,index)=>{
								return <label  key={index}><input onClick={()=>{this.choosecheckbox()}} type="checkbox" key={index} value={item} />{item}</label>
							})
						}
						<input type="button" className="btn btn-success" value="确定" onClick={()=>{if(this.state.v.length===0){return "";}this.submitdata()}} />
						{" "}
						<input type="button" className="btn" value="取消" onClick={()=>{this.setState({"shape":"radio","v":[]})}} />
					</div>
		}
						
						
	}

	render(){
		return(
			<div className="filterbar">
				{this.showshape()}
			</div>
		);
	}

	
}

export default Filterbar;