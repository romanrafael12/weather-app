var inputtext = document.querySelector('.inputtext');
var main = document.querySelector('.name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var img = document.querySelector ('.img');
var minima = document.querySelector ('.minima');
var maxima = document.querySelector('.maxima');
var button= document.querySelector('.submit');



button.addEventListener('click', function(name){
//api.openweathermap.org/data/2.5/weather?q=&appid=799c979e3c61dff569e6cb6e306656fe')
fetch('https://api.openweathermap.org/data/2.5/weather?q=' +inputtext.value+
	'&callback&units=imperial&appid=a6f2046cbd2637b630560a2ddbca0848 ')

	.then(response => response.json())
	 .then(data => {


	var tempValue = data['main']['temp']  ;
	var nameValue = data['name'];
	var descValue = data['weather']  [0]['description']  ;
	var temp_max = data ['main']  ['temp_max'];
	var temp_min = data ['main']  ['temp_min'];
	var imgValue =  " <img src = '  http://openweathermap.org/img/wn/" +data.weather[0].icon+"@4x.png '> " ;
	

 	img.innerHTML =  imgValue;
 	 main.innerHTML = 'Current Weather for: ' +nameValue;
 	 desc.innerHTML = 'Description: '+ descValue;
 	 temp.innerHTML =  'Temperature: '+tempValue + '° F';
 	 maxima.innerHTML = 'Max Temp: ' + temp_max + '°';
 	 minima.innerHTML = 'Min Temp: ' + temp_min + '°';


	})


	 .catch(err => alert("City doesn't exist"));
})

