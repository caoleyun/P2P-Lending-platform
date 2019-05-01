import React from "react";





class YearMonthPicker  extends React.Component{
	constructor(){
		super();

		this.state={
			"year":2019,
			"month":5
		}

	}
		
	rrBtnHandler(){
		// $()
	}

	render(){
		var cyear=this.state.year;
		return (
			<div className="YearMonthPicker">
				<div className="inner">
					<div className="year_panel">
						<div className="panel_inner">
							<div className="span_container" ref="span_container">
								<span>{cyear-2}</span>
								<span>{cyear-1}</span>
								<span><b>{cyear}</b></span>
								<span>{cyear+1}</span>
								<span>{cyear+2}</span>
							</div>
						</div>

						<i className="ll"></i>
						<i className="rr" onClick={()=>{this.rrBtnHandler()}}></i>
					</div>
					<div className="month_panel">
						<div className="col">
							<a className={this.state.year === cyear && this.state.month === 1 ? "cur" : ""} href="javascript:void(0);">1月</a>
							<a className={this.state.year === cyear && this.state.month === 2 ? "cur" : ""} href="javascript:void(0);">2月</a>
							<a className={this.state.year === cyear && this.state.month === 3 ? "cur" : ""} href="javascript:void(0);">3月</a>
							<a className={this.state.year === cyear && this.state.month === 4 ? "cur" : ""} href="javascript:void(0);">4月</a>
							<a className={this.state.year === cyear && this.state.month === 5 ? "cur" : ""} href="javascript:void(0);">5月</a>
							<a className={this.state.year === cyear && this.state.month === 6 ? "cur" : ""} href="javascript:void(0);">6月</a>
						</div>
						<div className="col">
							<a className={this.state.year === cyear && this.state.month === 7 ? "cur" : ""} href="javascript:void(0);">7月</a>
							<a className={this.state.year === cyear && this.state.month === 8 ? "cur" : ""} href="javascript:void(0);">8月</a>
							<a className={this.state.year === cyear && this.state.month === 9 ? "cur" : ""} href="javascript:void(0);">9月</a>
							<a className={this.state.year === cyear && this.state.month === 10 ? "cur" : ""} href="javascript:void(0);">10月</a>
							<a className={this.state.year === cyear && this.state.month === 11 ? "cur" : ""} href="javascript:void(0);">11月</a>
							<a className={this.state.year === cyear && this.state.month === 12 ? "cur" : ""} href="javascript:void(0);">12月</a>
						</div>
					</div>
				</div>
			</div>
		)
	}    
		
}

export default YearMonthPicker;