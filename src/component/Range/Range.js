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

		//大格的数量  向上取整
		this.biggridamount=Math.ceil(width/60);
		//大格的宽度
		this.biggridwidth=width/this.biggridamount;
		//小格的宽度
		this.smallgridwidth=this.biggridwidth/5;

		//每个大格表示的实际 数量*(大约)
		this.perbiggridnumber=parseInt((max-min)/this.biggridamount);
		//每小格表示的 实际数量
		this.persmallgridnumber=this.perbiggridnumber/5;

		this.width=width;

		// console.log(this);
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
		var kk=$(this.refs.range).offset().left;
		$(this.refs.range).find(".bar b").on({
		    mousedown: function(e){
		                var el=$(this);
		                var os = el.offset(), dx = e.pageX-os.left, dy = e.pageY-os.top;
		                $(document).on('mousemove.drag', function(e){ console.log("left",os.left,e.pageX,dx,"top",os.top,e.pageY,dy);  if(e.pageX-dx<kk){el.offset({left: kk});}else if(e.pageX-dx-kk>this.width){el.offset({left: kk+this.width});}else{el.offset({left: e.pageX-dx});} });
		            },
		   mouseup: function(e){ $(document).off('mousemove.drag'); }
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
				<div className="bar" style={{width:this.props.width-1.5}}>
					<b className="left" style={{left:-0.5}}></b>
					<b className="right" style={{left:this.props.width-3.5}}></b>
					<span style={{width:this.props.width-1.5}}></span>
				</div>
				<div className="scaleline">
					{this.showis()}
				</div>
			</div>
		)
	}

}


export default Range;