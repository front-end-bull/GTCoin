// const HOST = 'http://192.168.10.93:8080'
const HOST = 'http://192.168.10.250:8080'
// const HOST = 'http://52.77.187.2:4002'

const isString = function(obj){
	  return Object.prototype.toString.call(obj) === "[object String]"; 
}
const str = JSON.stringify
const l = console.log


function GetQueryString(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");  
    var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
    var context = "";  
    if (r != null)  
         context = r[2];  
    reg = null;  
    r = null;  
    return context == null || context == "" || context == "undefined" ? "" : context;  
}



const utils = {
	formatDate:function(now){
	    var year = now.getYear() + 1900
	    var month = now.getMonth() + 1
	    var date = now.getDate()
	    var hour = now.getHours()
	    var minute = now.getMinutes()
	    var second = now.getSeconds()
	    if(month<10) month = '0'+month
	    if(date<10) date = '0'+date

	    return year + "-" + month + "-" + date + " " + hour + ":" + minute;
	    // return year + "-" + month + "-" + date;
	}
}

