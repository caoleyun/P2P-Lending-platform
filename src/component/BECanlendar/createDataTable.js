


//得到某年某月上一月共多少天
function  _getPrevMounthAllDays(year,month){
	//原理是 用本月的一月一号0点0分减去1毫秒，看看是哪一天（看看那天是几号）
	return (new Date(new Date(year,month-1,1)-1)).getDate();
}

//得到本月共多少天
function  _getMounthAllDays(year,month){
	//原理是 用 下一个月  的一月一号0点0分减去1毫秒，看看是哪一天（看看那天是几号）
	// return (new Date(new Date(year,month,1)-1)).getDay();

	if(month === 12){
		return (new Date(new Date(year+1,0,1)-1)).getDate();
	}else{
		return (new Date(new Date(year,month,1)-1)).getDate();
	}
}

//得到某年某月第一天星期几
function _firstDayDay(year,month){
	return (new Date(year,month-1,1)).getDay();
}



//返回日历数组
function createDataTable(year,month){
	var reararr=[23,24,25,26,27,28,29,30,31];
	var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
	var headarr=[1,2,3,4,5,6,7,8,9,10,11,12,13];

	var firstDayDay=_firstDayDay(year,month);
	var getPrevMounthAllDays=_getPrevMounthAllDays(year,month);
	
	//处理上月尾巴
	for(var i=0;i<31-getPrevMounthAllDays;i++){
		reararr.pop();
	}
	reararr=reararr.slice(reararr.length - firstDayDay);

	//处理本月
	arr=arr.slice(0,_getMounthAllDays(year,month));

	//处理下月
	headarr=headarr.slice(0,42-arr.length-reararr.length);
	// console.log(reararr);
	// console.log(arr);
	// console.log(headarr);

	return {
				reararr,
				arr,
				headarr
	}



	// return [
	// 			[26,27,28,29,30,31,1],
	// 			[2,3,4,5,6,7,8],
	// 			[9,10,11,12,13,14,15],
	// 			[16,17,18,19,20,21,22],
	// 			[23,24,25,26,27,28,29],
	// 			[30,1,2,3,4,5,6]
	// 		]
}
//  createDataTable(2019,4);
export default createDataTable;
