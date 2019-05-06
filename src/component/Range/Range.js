import React from "react";
import '../../static/Range.less';






class Range extends React.Component{
	constructor({width}){
		super();
	}

	render(){
		return(
			<div className="range">
				<div className="bar" style={{width:(this.props.width)}}>

				</div>
			</div>
		)
	}

}


export default Range;