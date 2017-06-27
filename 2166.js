// 下拉菜单的鼠标划入划出效果
$(document).ready(function() {
    $(document).off('click.bs.dropdown.data-api');
});
$(document).ready(function(){
    dropdownOpen();
});
function dropdownOpen() {
    var $dropdownDiv = $('div.dropdown'); 
    $dropdownDiv.mouseover(function() {
        $(this).addClass('open');
        }).mouseout(function() {
            $(this).removeClass('open');
            });
        }
               
// tab导航
$(function () {
    $('#myTab a:first').tab('show');
    })
    $('#myTab a').mouseover(function (e) {
        e.preventDefault();
        $(this).tab('show');
})


// 输入框级联
var country=document.getElementById("country");
var city=document.getElementById("city");
var arrCountry=new Array(new Option("Select your country",''),new Option("中国","China"),new Option("美国","American"));
var arrCity=new Array();
arrCity[0]=new Array(new Option("Select your country",''));
arrCity[1]=new Array(new Option("北京",'Beijing'),new Option("上海",'Shanghai'),new Option("深圳",'Shenzhen'));
arrCity[2]=new Array(new Option("纽约",'NewYork'),new Option("华盛顿",'Washington'));
//动态载入所有省份
function load(){
    for(var i=0;i<arrCountry.length;i++){
        country.options[i]=arrCountry[i];
    }
}
//选中国家之后，根据索引动态载入相应城市
function changeCity(){
    //清空上次的选项
    city.options.length=0;
    //获取国家一级的下拉列表选中的索引
    var index=country.selectedIndex;
    for(var i=0;i<arrCity[index].length;i++){
        city.options[i]=arrCity[index][i];
    }
}
 