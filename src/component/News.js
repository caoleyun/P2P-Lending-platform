import React from "react";
import { Link} from "react-router-dom";




class News  extends React.Component{
	constructor(props){
		super(props);

		this.state={
			list:[
				{
					aid:'11',
					title:'11'
				},
				{
					aid:'22',
					title:'22'
				},
				{
					aid:'33',
					title:'33'
				},
				{
					aid:'44',
					title:'44'
				}
			]
		}

	}	
		
	render(){
		return (
			<div>
				我是News
				<ul>
					{
						this.state.list.map((value,key)=>{
							return(
								<li key={key}>
									<Link to={"/content/"+value.aid}>{value.title}</Link>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}    
		
}

export default News;