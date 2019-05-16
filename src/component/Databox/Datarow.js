import React from 'react';

class Datarow extends React.Component{
	constructor({data}){
		super();
	}

	render(){
		return (
			<tr className="datarow">
				<td>{this.props.data.name}</td>
				<td>{this.props.data.school}</td>
				<td>{this.props.data.target}</td>
				<td>{this.props.data.need}</td>
				<td>{this.props.data.done}</td>
			</tr>
		)
	}	
}

export default Datarow;