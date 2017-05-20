
$("document").ready(function(){
	    // 字数限制
        $("#leavecount").wordCount(150, $("#wordCountShow"));
        // 百度地图容器
        var map;
        initMap();

});

$.fn.extend({
    wordCount: function (maxLength, wordWrapper) {
        var self = this;
        $(self).attr("maxlength", maxLength);
        showWordCount();
        $(this).on("input propertychange", showWordCount);
        function showWordCount() {
            curLength = $(self).val().length;
            wordWrapper.text("少于150字("+curLength + "/" + maxLength+")");
        }
    }
})

//创建和初始化地图函数：
function initMap(){
    createMap();//创建地图
    setMapEvent();//设置地图事件
    addMapControl();//向地图添加控件
}
function createMap(){ 
    map = new BMap.Map("map"); 
    map.centerAndZoom(new BMap.Point(113.223604,23.284587),18);
}
function setMapEvent(){
    map.enableScrollWheelZoom();
    map.enableKeyboard();
    map.enableDragging();
    map.enableDoubleClickZoom()
}
function addClickHandler(target,window){
    target.addEventListener("click",function(){
      target.openInfoWindow(window);
    });
}

//向地图添加控件
function addMapControl(){
    var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
    map.addControl(scaleControl);
    var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(navControl);
    var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
    map.addControl(overviewControl);
}