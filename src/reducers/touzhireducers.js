let initState={
	"filters":{
		"schools" : [],
		"types":[],
		"need":{"min":0,"max":1000},
		"shouyiriqi":{
			byear:2019,
			bmonth:5,
			bday:20,
			eyear:2019,
			emonth:5,
			eday:23
		}
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
		console.log(action.v);
			return {
				...state,
				filters:{
					...state.filters,
					[action.title]:{
						byear:action.v.b.year,
						bmonth:action.v.b.month,
						bday:action.v.b.day,
						eyear:action.v.e.year,
						emonth:action.v.e.month,
						eday:action.v.e.day
					}
				},
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
