 /* jshint ignore:start */
function getCurrentTime() {
  // Get city name from page header
  var cityName = $('.cityheader').text();
  if (cityName === 'San Francisco') {
    var lat = 37.7833;
    var lon = -122.4167;
    var apireturn = $.get('https://worldtimeiodeveloper.p.mashape.com/geo?latitude=' + lat + '&longitude=' + lon, {'X-Mashape-Key': 'jPC642J7yfmshz91mKuYEAs3aNwSp1yzeeUjsnAhG0Zheu2cOG'}, 'json');
    console.log(JSON.parse(apireturn));
  }
}
getCurrentTime();
 /* jshint ignore:end */
