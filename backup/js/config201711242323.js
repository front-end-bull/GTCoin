// const HOST = 'http://192.168.10.93:8080'
// const HOST = 'http://192.168.10.250:8080'
// const HOST = 'http://52.77.187.2:4002'
// const HOST = 'http://gtdollar.licaishenqi.cn:4002'
const HOST = 'http://ddcoin.com:4002'

// var backup = http://d3tbpk51ffth2m.cloudfront.net

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
	},
	  	round:function(x) {    
            var f = parseFloat(x);    
            if (isNaN(f)) {    
                return false;    
            }    
            var f = Math.round(x*100)/100;    
            var s = f.toString();    
            var rs = s.indexOf('.');    
            if (rs < 0) {    
                rs = s.length;    
                s += '.';    
            }    
            while (s.length <= rs + 2) {    
                s += '0';    
            }    
            return s;    
        },


        ceil:function(x) {    
            var f = parseFloat(x);    
            if (isNaN(f)) {    
                return false;    
            }    
            var f = Math.ceil(x*100)/100;    
            var s = f.toString();    
            var rs = s.indexOf('.');    
            if (rs < 0) {    
                rs = s.length;    
                s += '.';    
            }    
            while (s.length <= rs + 2) {    
                s += '0';    
            }    
            return s;    
        },

        floor:function(x) {    
            var f = parseFloat(x);    
            if (isNaN(f)) {    
                return false;    
            }    
            var f = Math.floor(x*100)/100;    
            var s = f.toString();    
            var rs = s.indexOf('.');    
            if (rs < 0) {    
                rs = s.length;    
                s += '.';    
            }    
            while (s.length <= rs + 2) {    
                s += '0';    
            }    
            return s;    
        },
        comdify:function(n){
            n += ''
        　　 var re=/\d{1,3}(?=(\d{3})+$)/g;
        　　 var n1=n.replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(re,"$&,")+s2;});
        　　 return n1;
        }
}

