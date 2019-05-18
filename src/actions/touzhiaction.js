import $ from  'jquery/dist/jquery.min.js';

export const fetchInitData=()=>{return (dispatch)=>{
	$.get("/api/filters.json",function(data){
		dispatch({"type":"FETCHINITDATA","data":data});
	})
}}

export const fetchData=()=>{return (dispatch)=>{
	$.post("/api",{"filter":"[]"},function(data){
		dispatch({"type":"FETCHDATA","data":data});
	})
}}



export const addfilter=(title,v,reducerkey)=>{ return (dispatch,getState)=>{
	var nowfilter=getState().reducers.touzhireducers.nowfilter.concat([{"filtertitle":title,"v":v}]);
	$.ajax({
		"url":"/api",
		"data":{"filter":JSON.stringify(nowfilter)},
		"type":"post",
		"traditional":true,
		"success":function(data){
			dispatch({"type":"ADDFILTER",title,v,reducerkey,data});
		}
	});
}}

export const delfilter=(title)=>{ return (dispatch,getState)=>{
	var nowfilter=getState().reducers.touzhireducers.nowfilter.filter(function(item){
		return item.filtertitle!=title;
	});
	$.ajax({
		"url":"/api",
		"data":{"filter":JSON.stringify(nowfilter)},
		"type":"post",
		"traditional":true,
		"success":function(data){
			dispatch({"type":"DELFILTER",title,data});
		}
	});
}}


