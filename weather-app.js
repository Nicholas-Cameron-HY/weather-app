
var weatherWidget = {
};

weatherWidget.apiUrl = 'http://api.wunderground.com/api/21d93447ee992704/conditions/q/autoip.json';

weatherWidget.init = function() {
	weatherWidget.ajaxData();

};

weatherWidget.ajaxData = function(){
	$.ajax ({
		url: weatherWidget.apiUrl,
		method: 'GET',
		dataType: 'json'
	})

	.then(function(weatherData){
		console.log(weatherData.current_observation);

		var observation = weatherData.current_observation;

		weatherWidget.displayWeather(observation);
	});
};

  weatherWidget.displayWeather = function(weather) {
  		console.log(weather);
  		
  		var city = weather.display_location.city;
  		$('.city_name').text(city);
  	
  		var temp_c = weather.temp_c;
  		$('.temp_c').text(temp_c);
  	
  		var time = weather.local_time_rfc822;
  		$('.date_time').text(time);

  		var condition = weather.weather;
  		$('.weather_string').text('condition');

  		var image = weather.icon_url;
  		$('.weather_image').attr('src', image);
};

// 	.then(function(data){
// 		console.log(data)

// 		var weatherImage = data.current_observation.icon_url;
// 		var weatherString = data.current_observation.icon;
// 		var tempC = data.current_observation.temp_C;
// 		var cityName = data.current_observation.display_location.full;
// 		var dateTime = data.current_observation.observation_time_rfc822; 

// 		$('.weather_image').attr('src', weatherImage);
// 		$('.temp').html(tempC);
// 		$('.city_name').html(cityName);
// 		$('.date_time').html(dateTime);
// 		$('.weather_string').html(weatherString);

// 	});	
// };

$(document).ready(function(){
  weatherWidget.init();
});



	//the code in here is used to initialize our application 

	