 var opts = {
  width: 300, // 信息窗口宽度    
  height: 200, // 信息窗口高度     
}
var map = new BMap.Map("myMap"); 
var point = new BMap.Point(120.15, 30.25);
map.centerAndZoom(point, 13);

$(".button1").click(function(){
   $("#lable").show();
   map.clearOverlays();
      var point = new BMap.Point(120.15, 30.25);
      map.centerAndZoom(point, 13);
      var local = new BMap.LocalSearch(map, {
      pageCapacity: 8,
      renderOptions: {
        map: map,
        autoViewport: true,
        panel: "lable"
      }
});
local.searchNearby("宾馆", "西湖");
});
map.centerAndZoom(new BMap.Point(120.15, 30.25), 11);    
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("杭州"); 



$(".button2").click(function(){
  $("#lable").show();
  map.clearOverlays();
  var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "lable"
  }
});
transit.search("杭州市海曙路58号", "饭店");     
});





$(".button3").click(function(){
  $("#lable").hide();
  map.clearOverlays();
  var point = new BMap.Point(120.0150230000,30.2961260000);
  map.centerAndZoom(point, 20);

  var point2 = new BMap.Point(120.0162140000,30.2966700000);       
      var marker2 = new BMap.Marker(point2);// 事务服务中心    
      map.addOverlay(marker2);
      marker2.addEventListener("click", function(){ 
      var infoWindow = new BMap.InfoWindow("<img src='mapimage/p1.jpg'>", opts); // 创建信息窗口对象    
      map.openInfoWindow(infoWindow, point2); // 打开信息窗口
            });
  var point4 = new BMap.Point(120.0152170000,30.2964050000);// 博文苑8号楼       
      var marker4 = new BMap.Marker(point4);   
      map.addOverlay(marker4);
      marker4.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/B8.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point4); // 打开信息窗口
            });
      var point5 = new BMap.Point(120.0157920000,30.2965420000);// 博文苑9号楼       
      var marker5 = new BMap.Marker(point5);   
      map.addOverlay(marker5);
      marker5.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/B9.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point5); // 打开信息窗口
            });
      var point6 = new BMap.Point(120.0175440000,30.2968960000);// 恕园24号楼       
      var marker6 = new BMap.Marker(point6);   
      map.addOverlay(marker6);
      marker6.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S24.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point6); // 打开信息窗口
            });
      var point7 = new BMap.Point(120.0177680000,30.2966700000);// 恕园19号楼       
      var marker7 = new BMap.Marker(point7);   
      map.addOverlay(marker7);
      marker7.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S19.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point7); // 打开信息窗口
            });
      var point8 = new BMap.Point(120.0175390000,30.2979800000);//恕园35号楼       
      var marker8 = new BMap.Marker(point8);   
      map.addOverlay(marker8);
      marker8.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S35.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point8); // 打开信息窗口
            });
      var point9 = new BMap.Point(120.0184110000,30.2979570000);// 恕园30号楼       
      var marker9 = new BMap.Marker(point9);   
      map.addOverlay(marker9);
      marker9.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S30.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point9); // 打开信息窗口
            });
      var point10 = new BMap.Point(120.0193490000,30.2978860000);// 恕园29号楼       
      var marker10 = new BMap.Marker(point10);   
      map.addOverlay(marker10);
      marker10.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S29.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point10); // 打开信息窗口
            });
      var point11 = new BMap.Point(120.0198160000,30.2980190000);// 恕园28号楼       
      var marker11 = new BMap.Marker(point11);   
      map.addOverlay(marker11);
      marker11.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S28.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point11); // 打开信息窗口
            });
      var point12 = new BMap.Point(120.0205130000,30.2979370000);// 恕园27号楼       
      var marker12 = new BMap.Marker(point12);   
      map.addOverlay(marker12);
      marker12.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S27.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point12); // 打开信息窗口
            });
      var point13 = new BMap.Point(120.0201400000,30.2977310000);// 恕园20号楼       
      var marker13 = new BMap.Marker(point13);   
      map.addOverlay(marker13);
      marker13.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S20.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point13); // 打开信息窗口
            });
      var point14 = new BMap.Point(120.0206200000,30.2973840000);// 恕园16号楼       
      var marker14 = new BMap.Marker(point14);   
      map.addOverlay(marker14);
      marker14.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S16.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point14); // 打开信息窗口
            });
      var point15 = new BMap.Point(120.0204630000,30.2969510000);// 恕园10号楼       
      var marker15 = new BMap.Marker(point15);   
      map.addOverlay(marker15);
      marker15.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S10.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point15); // 打开信息窗口
            });
      var point16 = new BMap.Point(120.0206290000,30.2967950000);// 恕园9号楼       
      var marker16 = new BMap.Marker(point16);   
      map.addOverlay(marker16);
      marker16.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S9.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point16); // 打开信息窗口
            });
      var point17 = new BMap.Point(120.0197720000,30.2970910000);// 恕园17号楼       
      var marker17 = new BMap.Marker(point17);   
      map.addOverlay(marker17);
      marker17.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S17.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point17); // 打开信息窗口
            });
      var point18 = new BMap.Point(120.0195830000,30.2973990000);// 恕园21号楼       
      var marker18 = new BMap.Marker(point18);   
      map.addOverlay(marker18);
      marker18.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S21.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point18); // 打开信息窗口
            });
      var point19 = new BMap.Point(120.0198660000,30.2968030000);// 恕园12号楼       
      var marker19 = new BMap.Marker(point19);   
      map.addOverlay(marker19);
      marker19.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S12.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point19); // 打开信息窗口
            });
      var point20 = new BMap.Point(120.0193720000,30.2966820000);// 恕园14号楼       
      var marker20 = new BMap.Marker(point20);   
      map.addOverlay(marker20);
      marker20.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S14.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point20); // 打开信息窗口
            });
      var point21 = new BMap.Point(120.0198610000,30.2964090000);// 恕园11号楼       
      var marker21 = new BMap.Marker(point21);   
      map.addOverlay(marker21);
      marker21.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S11.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point21); // 打开信息窗口
            });
      var point22 = new BMap.Point(120.0193670000,30.2966740000);// 恕园14号楼       
      var marker22 = new BMap.Marker(point22);   
      map.addOverlay(marker22);
      marker22.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S14.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point22); // 打开信息窗口
            });
      var point23 = new BMap.Point(120.0191790000,30.2964330000);//一鸣真鲜奶吧        
      var marker23 = new BMap.Marker(point23);   
      map.addOverlay(marker23);
      marker23.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/p23.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point23); // 打开信息窗口
            });
      var point24 = new BMap.Point(120.0204500000,30.2957230000);// 恕园2号楼       
      var marker24 = new BMap.Marker(point24);   
      map.addOverlay(marker24);
      marker24.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S2.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point24); // 打开信息窗口
            });
      var point25 = new BMap.Point(120.0190350000,30.2952550000);// 恕园7号楼       
      var marker25 = new BMap.Marker(point25);   
      map.addOverlay(marker25);
      marker25.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S7.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point25); // 打开信息窗口
            });
      var point26 = new BMap.Point(120.0162820000,30.2958640000);// 博文苑6号楼       
      var marker26 = new BMap.Marker(point26);   
      map.addOverlay(marker26);
      marker26.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/B6.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point26); // 打开信息窗口
            });
      var point27 = new BMap.Point(120.0165110000,30.2957230000);// 博文苑5号楼       
      var marker27 = new BMap.Marker(point27);   
      map.addOverlay(marker27);
      marker27.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/B5.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point27); // 打开信息窗口
            });
      var point28 = new BMap.Point(120.0161920000,30.2950180000);// 博文苑4号楼       
      var marker28 = new BMap.Marker(point28);   
      map.addOverlay(marker28);
      marker28.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/B4.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point28); // 打开信息窗口
            });
      var point29 = new BMap.Point(120.0162820000,30.2947920000);// 博文苑3号楼       
      var marker29 = new BMap.Marker(point29);   
      map.addOverlay(marker29);
      marker29.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/B3.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point29); // 打开信息窗口
            });
      var point30 = new BMap.Point(120.0168390000,30.2962570000);// 菜鸟驿站    
      var marker30 = new BMap.Marker(point30);   
      map.addOverlay(marker30);
      marker30.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/p29.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point30); // 打开信息窗口
            });
      var point31 = new BMap.Point(120.0181860000,30.2964210000);// 杭州师范大学外国语学院       
      var marker31 = new BMap.Marker(point31);   
      map.addOverlay(marker31);
      marker31.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/p31.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point31); // 打开信息窗口
            });
      
      var point33 = new BMap.Point(120.0183300000,30.2974420000);// 恕园23号楼      
      var marker33 = new BMap.Marker(point33);   
      map.addOverlay(marker33);
      marker33.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S23.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point33); // 打开信息窗口
            });
      var point34 = new BMap.Point(120.0168660000,30.2955130000);// 帮帮数码       
      var marker34 = new BMap.Marker(point34);   
      map.addOverlay(marker34);
      marker34.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/p31.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point34); // 打开信息窗口
            });
      var point35 = new BMap.Point(120.0170230000,30.2953800000);//超市       
      var marker35 = new BMap.Marker(point35);   
      map.addOverlay(marker35);
      marker35.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/p31.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point35); // 打开信息窗口
            });

      var point37 = new BMap.Point(120.0153110000,30.2977190000);//弘一大师 丰子恺研究中心       
      var marker37 = new BMap.Marker(point37);   
      map.addOverlay(marker37);
      marker37.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/HF.jpg'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point37); // 打开信息窗口
            });


      
      var point39 = new BMap.Point(120.0183300000,30.2974420000);// 恕园23号楼      
      var marker39 = new BMap.Marker(point39);   
      map.addOverlay(marker39);
      marker39.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S23.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point39); // 打开信息窗口
            });

      var point40 = new BMap.Point(120.0200680000,30.2948540000);// 阿里巴巴商学院      
      var marker40 = new BMap.Marker(point40);   
      map.addOverlay(marker40);
      marker40.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/p41.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point40); // 打开信息窗口
            });
      var point41 = new BMap.Point(120.0188460000,30.2943240000);//恕园3号楼       
      var marker41 = new BMap.Marker(point41);   
      map.addOverlay(marker41);
      marker41.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S3.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point41); // 打开信息窗口
            });
      var point42 = new BMap.Point(120.0175030000,30.2939960000);//恕园5号楼   
      var marker42 = new BMap.Marker(point42);   
      map.addOverlay(marker42);
      marker42.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/S5.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point42); // 打开信息窗口
            });
      var point43 = new BMap.Point(120.0172340000,30.2937080000);//杭州师范大学2号餐厅      
      var marker43 = new BMap.Marker(point43);   
      map.addOverlay(marker43);
      marker43.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/p43.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point43); // 打开信息窗口
            });
      var point44 = new BMap.Point(120.0167940000,30.2935560000);// 博文印象      
      var marker44 = new BMap.Marker(point44);   
      map.addOverlay(marker44);
      marker44.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/p46.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point44); // 打开信息窗口
            });
      var point45 = new BMap.Point(120.0158410000,30.2936690000);//杭州师范大学仓前校区恕园食堂       
      var marker45 = new BMap.Marker(point45);   
      map.addOverlay(marker45);
      marker45.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/p46.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point45); // 打开信息窗口
            });
      var point46 = new BMap.Point(120.0143370000,30.2951150000);//体育场      
      var marker46 = new BMap.Marker(point46);   
      map.addOverlay(marker46);
      marker46.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/p46.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point46); // 打开信息窗口
            });
      var point47 = new BMap.Point(120.0222460000,30.2987280000);//杭州师范大学图书馆       
      var marker47 = new BMap.Marker(point47);   
      map.addOverlay(marker47);
      marker47.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/p49.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point47); // 打开信息窗口
            });
      var point48 = new BMap.Point(120.0222240000,30.2976720000);//杭师大中心区西块      
      var marker48 = new BMap.Marker(point48);   
      map.addOverlay(marker48);
      marker48.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/p49.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point48); // 打开信息窗口
            });
      var point49 = new BMap.Point(120.0123380000,30.2962610000);//杭州师范大学篮球场       
      var marker49 = new BMap.Marker(point49);   
      map.addOverlay(marker49);
      marker49.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/p49.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point49); // 打开信息窗口
            });
      var point50 = new BMap.Point(120.0174310000,30.2946820000);//棋乐奕秋棋社    
      var marker50 = new BMap.Marker(point50);   
      map.addOverlay(marker50);
      marker50.addEventListener("click", function(){
    var infoWindow = new BMap.InfoWindow("<img src='mapimage/p49.png'>", opts); // 创建信息窗口对象    
    map.openInfoWindow(infoWindow, point50); // 打开信息窗口
            });

});

