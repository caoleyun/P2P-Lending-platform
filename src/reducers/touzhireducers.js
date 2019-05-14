let initState={
	"filters":{
		"schools" : [],
		"types":[],
		"need":{"min":0,"max":1000}
	},
	"nowfilter":[]
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
		case "DELFILTER":
			return {
				...state,
				nowfilter:state.nowfilter.filter((item)=>{
					return item.filtertitle!=action.title;
				})
			}
	}
	return state;
}
