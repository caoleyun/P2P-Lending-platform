import $ from  'jquery/dist/jquery.min.js';

export const fetchInitData=()=>{return (dispatch)=>{
	$.get("/api/filters.json",function(data){
		console.log(data);
		dispatch({"type":"FETCHINITDATA","data":data});
	})
}}

export const addfilter=(title,v)=>{ return {"type":"ADDFILTER",title,v}}