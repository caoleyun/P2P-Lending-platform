import React from "react";
import Canlendar from './Canlendar.js';
import '../static/BECanlendar.less';
import $ from 'jquery/dist/jquery.min.js';






class BECanlendar  extends React.Component{
	constructor(){
		super();

		var d=new Date();
		//b表示开始日期
		//e表示结束日期
		this.state={
			"b":{
				"year":d.getFullYear(),
				"month":d.getMonth()+1,
				"day":d.getDate(),
				"showCanlendar":false
			},
			"e":{
				"year":2029,
				"month":10,
				"day":1,
				"showCanlendar":false
			},
			showchoosebox:false
		}
		//取消时候的 备份数据
		this.kbyear=this.state.b.year;
		this.kbmonth=this.state.b.month;
		this.kbday=this.state.b.day;
		this.keyear=this.state.e.year;
		this.kemonth=this.state.e.month;
		this.keday=this.state.e.day;
	}

	//此组件的显示与否
	showCanlendar1(){
		// console.log(this.state.b.showCanlendar);
		if(this.state.b.showCanlendar){
			return <Canlendar {...this.state.b} onpick={(this.onpick1).bind(this)} />;
		}
	}
	showCanlendar2(){
		// console.log(this.state.e.showCanlendar);
		if(this.state.e.showCanlendar){
			return <Canlendar {...this.state.e} onpick={(this.onpick2).bind(this)}  />;
		}
	}


	//通过子组件传回的值 设置自己的state..
	onpick1({year,month,day}){
		this.setState({b:{showCanlendar:false,year,month,day}});
	}
	onpick2({year,month,day}){
		this.setState({e:{showCanlendar:false,year,month,day}});
	}

	//计算日期间隔
	calcGap(){
		var dateb=new Date(this.state.b.year,this.state.b.month,this.state.b.day);
		var datee=new Date(this.state.e.year,this.state.e.month,this.state.e.day);
		//时间戳差
		var gap = datee-dateb;

		//换算成天
		var gmonth = gap/1000/60/60/24;

		return  gmonth;
		
		// //年分差
		// var gyear = this.state.e.year-this.state.b.year;

		// //

	}

	//上树之后
	componentDidMount(){
		var self =this;
		$("html").click(function(event){
			var o = self.refs.BECanlendar;
			if($(event.target).parents(o).length==0){
				self.setState({"showchoosebox":false,b:{...self.state.b,showCanlendar:false},e:{...self.state.e,showCanlendar:false}});
			}
		});
	}

	//显示组件
	showchoosebox(){
			return ( 
				<div className="chooseBox">
					<input type="button" value="确定" className="submitbtn"  onClick={(event)=>{  /*此处事件涉及事件冒泡  会覆盖*/
						this.setState({ 
							showchoosebox:false
						}); 
						this.kbyear=this.state.b.year;
						this.kbmonth=this.state.b.month;
						this.kbday=this.state.b.day;
						this.keyear=this.state.e.year;
						this.kemonth=this.state.e.month;
						this.keday=this.state.e.day;
					}}/>
					<input type="button" value="取消" className="cancelbtn"  onClick={(event)=>{  /*此处事件涉及事件冒泡  会覆盖*/
						this.setState({ 
							showchoosebox:false,
							b:{
								year:this.kbyear,
								month:this.kbmonth,
								day:this.kbday
							},
							e:{
								year:this.keyear,
								month:this.kemonth,
								day:this.keday
							}
						}); 
					}}/>
					<div className="begin">
						开始日期：
						<div className="begin_result result" >
							<div onClick={(event)=>{  /*此处事件涉及事件冒泡  会覆盖*/
								this.setState({ 
									b:{...this.state.b,showCanlendar:!(this.state.b.showCanlendar)},
									e:{...this.state.e,showCanlendar:false} 
								}); 
							}}>
								{this.state.b.year}年{this.state.b.month}月{this.state.b.day}日
								<span className="glyphicon glyphicon-calendar canlendarbtn" ></span>
							</div>
							{this.showCanlendar1()}
						</div>
					</div>
					<div className="days">
						共<span className="month">{this.calcGap()}</span>天
					</div>
					<div className="end">
						结束日期：
						<div className="begin_result result">
							<div onClick={(event)=>{
								this.setState({ 
									e:{...this.state.e,showCanlendar:!(this.state.e.showCanlendar)},
									b:{...this.state.b,showCanlendar:false}
								});  
						}}>
								{this.state.e.year}年{this.state.e.month}月{this.state.e.day}日
								<span className="glyphicon glyphicon-calendar canlendarbtn" ></span>
							</div>
							{this.showCanlendar2()}
						</div>
					</div>
				</div>
			)
	}

		
	render(){
		// console.log(this.state.b.year,this.state.b.month,this.state.b.day);
		// console.log(this.state.e.year,this.state.e.month,this.state.e.day);
		
		return (
			<div className="BECanlendar" ref="BECanlendar">
				<div className="result" onClick={(event)=>{  /*此处事件涉及事件冒泡  会覆盖*/
						this.setState({ 
							showchoosebox:!this.state.showchoosebox
						}); 
				}}>
					{this.kbyear}年{this.kbmonth}月{this.kbday}日 - {this.keyear}年{this.kemonth}月{this.keday}日
					<span className="glyphicon glyphicon-calendar canlendarbtn"></span>
				</div>

				{this.state.showchoosebox && this.showchoosebox()}


			</div>
		)
	}    
		
}

export default BECanlendar;