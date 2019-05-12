import React from 'react';
import {connect} from 'react-redux';



class Shouye extends React.Component{
	render(){
		return(
			<div>
				首页
			</div>
		)
	}
}


export default connect()(Shouye);