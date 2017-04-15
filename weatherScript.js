$.getJSON('http://ip-api.com/json', function(data){
//get ip info;
var city=data.city;
var state=data.regionName;
var country=data.country;
var lat=data.lat;
var lon=data.lon;
var apiLink='http://api.openweathermap.org/data/2.5/weather?lat=';
var unitsId='&units=imperial&APPID=08775aee5beb80e9b38791e3421d03f2';
var day= moment().format('dddd, MMMM Do, YYYY');
//set up location and time;
$("#weather-location").text(city+", "+state+", "+country);
//setting up counting clock
$(function() {
   setInterval(function(){ clocking() }, 1000);
});
function clocking(){
  //var time = moment().format('h:mm:ss A');
  var date=new Date();
  //var day1=date.toDateString();
  var time=date.toLocaleTimeString();
  $("#weather-time").text(time);
}
$("#weather-day").text(day);
$.getJSON(apiLink+data.lat+'&lon='+data.lon+unitsId,function(response){
//get weather info
    var des=response.weather[0].description;
    var icon=response.weather[0].icon;
    var temp=Math.round(response.main.temp);
    var cel=Math.round((response.main.temp-32)*5/9);
    //set up weather info;
    $(".weather-general").text(des);
    $("#weather-icon").attr("src","http://openweathermap.org/img/w/"+icon+".png");
    $(".weather-temp").text(temp);
    //switching fahrenheit and celsius;
  $("#fc").click(function(e){
   //e.preventDefault();
if($("#fc").text().charCodeAt()===8457){
  $(".weather-temp").text(cel);
  $("#fc").html("&#8451");
}
else{
  $(".weather-temp").text(temp);
  $("#fc").html("&#8457");
}
})
})
})
