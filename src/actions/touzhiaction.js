import $ from  'jquery/dist/jquery.min.js';

export const fetchInitData=()=>{return (dispatch)=>{
	$.get("/api/filters.json",function(data){
		dispatch({"type":"FETCHINITDATA","data":data});
	})
}}

export const fetchData=()=>{return (dispatch)=>{
	$.get("/api/data.json",function(data){
		dispatch({"type":"FETCHDATA","data":data.results});
	})
}}



export const addfilter=(title,v)=>{ return {"type":"ADDFILTER",title,v}}
export const delfilter=(title)=>{return {"type":"DELFILTER" , title} }