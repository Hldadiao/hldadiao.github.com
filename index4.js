 $(".newpic").hide();
$(document).ready(function(){
	//test1
	$(".newpic").hide();
    $(".touch").click(function(){
    	$(".newpic")[0].src=$(this).attr("src");
    	$(".newpic").show();
    });
    $(".newpic").click(function(){
    	$(".newpic").hide();
    });

    //test2


    $(".clk2").click(function(){
    	$(".clk1").css("background-color","white");
    	$(".clk2").eq(0).css("background-color","gray");
    	$(".clk2").eq(1).css("background-color","white");
    	$(".background").html("2");
    });
    //按下第二个按钮，对应内容切为2



    $(".clk2").eq(1).click(function(){
    	$(".clk1").css("background-color","white");
    	$(".clk2").eq(0).css("background-color","white");
    	$(".clk2").eq(1).css("background-color","gray");
    	$(".background").html("3");
    });
    //按下第三个按钮，对应内容切为3


    $(".clk1").click(function(){
    	$(".clk1").css("background-color","gray");
    	$(".clk2").css("background-color","white");
    	$(".background").html("1");
    });
    //按下第1个按钮，对应内容切为1



    
    //tese3
    $("#add").click(function(){
    	var newlist='<div class="list"><div class="num">4</div><div class="delete">Delete</div></div>';
     	$(".list").eq(-1).after(newlist);
     });
    $(document).on("click",".delete",function(){ //动态绑定事件
    	var n=$(".delete").index(this);
    	 //alert(n);
    	 $(".list").eq(n).remove();
    });
  });