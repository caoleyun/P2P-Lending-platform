import React from "react";





class YearMonthPicker  extends React.Component{
	constructor(){
		super();

	}
		

	render(){
		return (
			<div className="YearMonthPicker">
				<div className="inner">
					<div className="year_panel">
						<span>2016</span>
						<span>2017</span>
						<span>2018</span>
						<span><b>2019</b></span>
						<span>2020</span>

						<i className="ll"></i>
						<i className="rr"></i>
					</div>
					<div className="month_panel">
						<div className="col">
							<a href="javascript:void(0);">1月</a>
							<a href="javascript:void(0);">2月</a>
							<a href="javascript:void(0);">3月</a>
							<a href="javascript:void(0);">4月</a>
							<a href="javascript:void(0);">5月</a>
							<a href="javascript:void(0);">6月</a>
						</div>
						<div className="col">
							<a href="javascript:void(0);">7月</a>
							<a href="javascript:void(0);">8月</a>
							<a href="javascript:void(0);">9月</a>
							<a href="javascript:void(0);">10月</a>
							<a href="javascript:void(0);">11月</a>
							<a href="javascript:void(0);">12月</a>
						</div>
					</div>
				</div>
			</div>
		)
	}    
		
}

export default YearMonthPicker;