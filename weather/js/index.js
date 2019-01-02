$(function(){
    var snowing = false;
    var dropSpeed = 600;
    var temp, cond, place, icon;
    var conditions = {
        "clear-day":{
            wi:"wi wi-day-sunny",
            url:"https://www.dropbox.com/s/thygtc17qa5s8p0/clear-sky-min.jpg?dl=0&raw=1"
        }, 
        "clear-night":{
            wi:"wi wi-night-clear",
            url:"https://www.dropbox.com/s/xrpameh27psnlji/stars-transparent-background.png?dl=0&raw=1"
        }, 
        "rain":{
            wi:"wi wi-rain",
            url:"https://www.dropbox.com/s/acpotxmi8cy38ry/air-2241577_960_720-min.jpg?dl=0&raw=1"
        }, 
        "snow":{
            wi:"wi wi-snow",
            url:"https://www.dropbox.com/s/acpotxmi8cy38ry/air-2241577_960_720-min.jpg?dl=0&raw=1"
        }, 
        "sleet":{
            wi:"wi wi-sleet",
            url:"https://www.dropbox.com/s/acpotxmi8cy38ry/air-2241577_960_720-min.jpg?dl=0&raw=1"
        }, 
        "wind":{
            wi:"wi wi-strong-wind",
            url:"https://www.dropbox.com/s/thygtc17qa5s8p0/clear-sky-min.jpg?dl=0&raw=1"
        }, 
        "fog":{
            wi:"wi wi-fog",
            url:"https://www.dropbox.com/s/acpotxmi8cy38ry/air-2241577_960_720-min.jpg?dl=0&raw=1"
        }, 
        "cloudy":{
            wi:"wi wi-cloudy",
            url:"https://www.dropbox.com/s/acpotxmi8cy38ry/air-2241577_960_720-min.jpg?dl=0&raw=1"
        }, 
        "partly-cloudy-day":{
            wi:"wi wi-day-cloudy",
            url:"https://www.dropbox.com/s/thygtc17qa5s8p0/clear-sky-min.jpg?dl=0&raw=1"
        },
        "partly-cloudy-night":{
            wi:"wi wi-night-alt-cloudy",
            url:"https://www.dropbox.com/s/xrpameh27psnlji/stars-transparent-background.png?dl=0&raw=1"
        }
    };
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success, error, options);
    }
    else{
        ipLocation();
    }
    
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    
    function success(pos) {
        var crd = pos.coords;
        getCurrentWeather(crd);
        threeDayWeather(crd);
    }
    
    function error(err) {
        ipLocation();
    }
    
    function ipLocation(){
         $.getJSON('http://ip-api.com/json', function(data){
            var pos = {
                latitude:data.lat,
                longitude:data.lon
            };
            getCurrentWeather(pos);
            threeDayWeather(pos);
        });
    }
    
    function getCurrentWeather(pos) {
        $.getJSON("https://api.darksky.net/forecast/75a4c6b840bd5cd4c5d545326a12072c/"+pos.latitude+","+pos.longitude+"?units=si&callback=?", function(data){
            temp = parseInt(data.currently.temperature);
            var iconName = data.currently.icon;
            var sun = false, moon = false;
            // HERE YOU CAN TRY TO CHANGE iconName variable
            // Set it to any key from conditions object, like "clear-day", "cloudy", "snow", "rain"...
            // for example uncomment this below: 
            //iconName = "snow";
            
            if(iconName == "snow" || iconName == "rain" || iconName == "sleet") {
                if(iconName == "snow" || iconName == "sleet") {
                    snowing = true;
                }
                else {
                    snowing = false;
                }
                $(".sun").css({display: "none"});
                $(".cover").show();
                setInterval(falling, 50);
            }
            if(iconName == "clear-day" || iconName == "clear-night") {
                $(".clouds, .cover").css({display:"none"});
            }
            if(iconName == "partly-cloudy-night" || iconName == "clear-night"){ moon = true; }
            if(iconName == "partly-cloudy-day" || iconName == "clear-day" || iconName == "wind") { sun = true; }
            
            icon = conditions[iconName].icon;
            cond = data.currently.summary;
            // icon is wrong for this condition in data
            if(cond == "Mostly Cloudy") { 
                data.currently.icon = "cloudy";
            }
            $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDrd5FUzXQvUXYUrlzp3QiRLmR4utGsz1g&latlng="+ pos.latitude+","+pos.longitude, function(gglData){
                place = gglData.results[0].address_components[2].long_name;
                $(".city").text(place);
            });
            $(".temp").text(temp);
            $("#icon").attr("class",conditions[iconName].wi);
            $(".condition").text(cond);
            $(".image").attr("src", conditions[iconName].url);
            $(".image").on("load", function(){
                $(this).fadeIn(1000); 
                $(".content-container").fadeIn(1000);
                if(moon) $(".night").show(1000);
                if(sun) $(".sun").show();
                $(".loading").remove();
                $(".clouds").animate({opacity:1}, 1000);
            });
           
        }).fail(function(error) {
            if (error.status == 404 || error.status == 403) {
                var d = new Date();
                var h = d.getHours();
                var m = d.getMinutes() + h * 60;
                var sum = 24 * 60 - m - d.getTimezoneOffset();
                $(".loading").hide().removeClass("fa-sun-o fa-spin").html("<em>Sorry, the limit of 1000 calls per day on this API has exceeded :(<br>It will work again in "+ parseInt(sum/60) + "h and " +sum % 60+" min</em>").css({fontSize: '1em'}).fadeIn(1000);
            }
        });
        
    }
    
    function threeDayWeather(pos) {
        $.getJSON("https://api.darksky.net/forecast/75a4c6b840bd5cd4c5d545326a12072c/" + pos.latitude + "," + pos.longitude + "?units=si&callback=?", function(data){
            data.daily.data.slice(0, 3).forEach(function(val, i) {
                $(".min" + i).text(Math.round(val.temperatureLow) + "°");
                $(".max" + i).text(Math.round(val.temperatureHigh) + "°");
                var icon = conditions[val.icon].wi;
                var date = new Date(val.time * 1000);
                $(".day" + i).text(date.toString().split(" ")[0]);
                $(".icon" + i + " i").attr("class", icon);
                //$(".row3:nth-child("+i+")").click(function(){
                //    $(".day"+i).val.summary;
                //});
                //console.log(val.summary)
            });
        });
    }
    
    function randRange( minNum, maxNum) {
        return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }
    function falling() {
        var l = randRange(0, $(window).width() - 5);
        var t = randRange(-100, -50);
        
        $('.rain').append("<div class='drop' style='left: " + l + "px;top: " + t + "px;'></div>");
        if(snowing) {
            $(".drop").css({
                height: "5px",
                width: "5px",
                background:"#fff",
                borderRadius:"50%"
            });
            dropSpeed = 4500;
        }
        $('.drop').animate({
            top: $(window).height() - 60,
        }, dropSpeed, "linear", function() {
            $(this).remove();
        });
    }
    
});