function  prints(){
	var iDays = "2023-02-08"
	var date1= '2023/02/08 11:30:00';  //开始时间
       var date2 = new Date();    //结束时间
       var date3 = date2.getTime() - new Date(date1).getTime();   //时间差的毫秒数     
 
       //------------------------------
 
       //计算出相差天数
       var days=Math.floor(date3/(24*3600*1000))
 
       //计算出小时数
 
       var leave1=date2%(24*3600*1000)    //计算天数后剩余的毫秒数
       var hours=Math.floor(leave1/(3600*1000))
       //计算相差分钟数
       // var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
	   var leave2=date2%(3600*1000)
       var minutes=Math.floor(leave2/(60*1000))
       //计算相差秒数
       // var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
	   var leave3=date2%(60*1000) 
       var seconds=Math.round(leave3/1000)
	   var back = "我们相识"+days+"\u5929"+hours+"\u5c0f\u65f6"+minutes+"\u5206\u949f"+seconds+"\u79d2"
	   var test = back;
	   // var  div1 = document.getElementById("d2");
	   // div1	.write(test+back);
	   for(var i = 0 ;i<test.length-1;i++){
		   console.log("i");
		
	     document.getElementById("d2").innerHTML=back;
}
		//setTimeout(prints,31000);

	   
};
