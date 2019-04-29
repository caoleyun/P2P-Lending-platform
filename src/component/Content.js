import React from "react";




class Content  extends React.Component{
	constructor(props){
		super(props);
	}
	
	componentDidMount(){
		console.log(this.props.match.params);
		console.log(this.props);
	}
		
	render(){
		return (
			<div>
				我是Content
			</div>
		)
	}    
		
}

export default Content;