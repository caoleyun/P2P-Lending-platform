let initState={
	"filters":{ //过滤初始化
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
	"nowfilter":[//当前启用的过滤
	],
	"data":[]//数据
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
		case "FETCHDATA":

			return{
				...state,
				data:action.data
			}
	}
	return state;
}
