let initState={
	"filter":{
		"school" : []
	}
}

export default (state=initState,action)=>{
	switch(action.type){
		case "FETCHINITDATA":
			return {
				...state,
				filter:{
					...state.filter,
					school:action.data.schools
				}
			}
	}
	return state;
}