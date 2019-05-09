import React from "react";
import '../../static/Range.less';
import $ from 'jquery/dist/jquery.min.js';
// import 'jquery-ui/themes/base/draggable.css'; //此css不引入也不影响draggable 功能
// import 'jquery-ui/themes/base/resizable.css'; //使用resizable功能必须引入此css！
// import 'jquery-ui/ui/widgets/draggable.js'; //必须像如下这样直接引入，import 'jquery-ui' 这样引入是无效的
// import 'jquery-ui/ui/widgets/resizable';





class Range extends React.Component{
	constructor({width,min,max}){
		super();

		//大格的个数  向上取整
		this.biggridamount=Math.ceil(width/60);
		//大格的宽度 px
		this.biggridwidth=width/this.biggridamount;
		//小格的宽度 px
		this.smallgridwidth=this.biggridwidth/5;

		//每个大格表示的实际 数量*(大约)
		this.perbiggridnumber=parseInt((max-min)/this.biggridamount);
		//每小格表示的 实际数量
		this.persmallgridnumber=this.perbiggridnumber/5;

		// this.width=width;

		// console.log(this.width);
		
		//表示有寓意的 数字？  边界？
		// 允许范围的  数字表示
		this.state={
			scaleLeft:min,
			scaleRight:max
		}
			this.scaleLeft=this.state.scaleLeft;
			this.scaleRight=this.state.scaleRight;
	}

	componentDidMount(){
		$(this.refs.range).find(".scaleline i").css("margin-right",this.smallgridwidth-1);
		$(this.refs.range).find(".scaleline i").eq(-2).css("margin-right",this.smallgridwidth-4);
		$(this.refs.range).find(".scaleline i").eq(-1).css("margin-right",0);
		$(this.refs.range).find(".scaleline i:nth-child(5n+1)").addClass('big');

		var self=this;
		//刻度线的数字数组
		$(this.refs.range).find(".scaleline i.big").each(function(idx){
			$(this).append("<u>"+(self.props.min+self.perbiggridnumber*idx)+"</u>");
		});

		//拖拽
		// $(this.refs.range).find(".bar b.left").draggable({

		// });
		
		// 拖拽条 两边界
		var lkk=$(this.refs.range).offset().left+16;
		//允许范围的 数字表示的  对应像素
		let scaleLeftpx=$(this.refs.left).offset().left+(this.scaleLeft-this.props.min)/this.persmallgridnumber*this.smallgridwidth;
		let scaleRightpx=$(this.refs.left).offset().left+(this.scaleRight-this.props.min)/this.persmallgridnumber*this.smallgridwidth-2;


		//bar宽度
		// $(this.refs.bar).width();
		// 左条限制操作
		$(this.refs.left).on({
		    mousedown: function(e){
		                var el=$(this);
		                var os = el.offset(), dx = e.pageX-os.left, dy = e.pageY-os.top;
		                $(document).on('mousemove.drag', function(e){
						let scaleLeftpx2number=(el.position().left)/self.smallgridwidth*self.persmallgridnumber+self.props.min;

		                	console.log(scaleLeftpx2number);
		                	//超过边界处理
		                	// console.log("scaleLeftpx",scaleLeftpx,"scaleRightpx",scaleRightpx,"e.pageX-dx",e.pageX-dx,"perbiggridnumber",self.perbiggridnumber,"smallgridwidth",self.smallgridwidth);
		                	if(e.pageX-dx<lkk){
		                		el.offset({left: lkk});
		                	}else if(e.pageX-dx>=scaleRightpx){
		                		el.offset({left:scaleRightpx});
		                	}else{
		                		el.offset({left: e.pageX-dx});
		                		scaleLeftpx=e.pageX-dx;
		                		// console.log(scaleLeftpx);
		                		self.setState({scaleLeft:scaleLeftpx2number});
		                	}
		                	//设置蓝色线
		                	$(self.refs.span).css({
		                		"left":el.position().left,
		                		"width":$(self.refs.right).position().left-el.position().left
		                	});
		                });
		            },
		   mouseup: function(e){ $(document).off('mousemove.drag'); }
		});

		// 右条限制操作
		$(this.refs.right).on({
		    mousedown: function(e){
		                var el=$(this);
		                var os = el.offset(), dx = e.pageX-os.left, dy = e.pageY-os.top;
		                $(document).on('mousemove.drag', function(e){ 
							let scaleLeftpx2number=(el.position().left)/self.smallgridwidth*self.persmallgridnumber+self.props.min;
		                	//超过边界处理
		                	if(e.pageX-dx<=scaleLeftpx){
		                		el.offset({left: scaleLeftpx});
		                	}else if(e.pageX-dx-lkk-2>self.props.width-2){
		                		el.offset({left: lkk+self.props.width-2});
		                	}else{
		                		el.offset({left: e.pageX-dx});
		                		scaleRightpx=e.pageX-dx;
		                		self.setState({scaleRight:scaleLeftpx2number});
		                	} 
		                	//设置蓝色线
		                	$(self.refs.span).css({
		                		"width":el.position().left-$(self.refs.left).position().left
		                	});
		                });
		            },
		   mouseup: function(e){ $(document).off('mousemove.drag'); }
		});

		//点击事件
		$(self.refs.bar).click(function(event){
			var x=event.clientX-$(this).offset().left;
			
		});

	}

	//显示刻度线
	showis(){
		var is=[];
		//个数
		var length=this.biggridamount*5+1;
		for(var i=0;i<length;i++){
			is.push(<i key={i}></i>);
		}
		return is;
	}

	render(){
		return(
			<div className="range" ref="range" style={{width:this.props.width+32}}>
				<div className="bar" ref="bar" style={{width:this.props.width-1.5}}>
					<b className="left" ref="left" style={{left:-0.5}}>
						<u>{Math.ceil(this.state.scaleLeft)}</u>
					</b>
					<b className="right" ref="right" style={{left:this.props.width-3.5}}>
						<u>{Math.ceil(this.state.scaleRight)}</u>
					</b>
					<span ref="span" style={{width:this.props.width-1.5}}></span>
				</div>
				<div className="scaleline">
					{this.showis()}
				</div>
			</div>
		)
	}

}


export default Range;