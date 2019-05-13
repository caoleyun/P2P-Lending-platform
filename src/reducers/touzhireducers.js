let initState={
	"filters":{
		"schools" : [],
		"types":[]
	},
	"nowfilter":[
	]
}

export default (state=initState,action)=>{
	switch(action.type){
		case "FETCHINITDATA":
			return {
				...state,
				filters:{
					...state.filters,
					types:action.data.types,
					schools:action.data.schools
				}
			}
		case "ADDFILTER":
			return {
				...state,
				nowfilter:[
					...state.nowfilter,
					{"filtertitle":action.title,"v":action.v}
				]
			}
	}
	return state;
}
