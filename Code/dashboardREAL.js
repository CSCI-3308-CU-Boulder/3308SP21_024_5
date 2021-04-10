



function myFunction() {
var symbol = document.getElementById('test').value;
var endtime = Date.now();
// var resolution = 15; //Supported resolution includes 1, 5, 15, 30, 60, D, W, M  ***************THIS MIGHT MAKE FROM/TO DATES HARD
var fromtime = endtime - 16;

var request = new XMLHttpRequest()


//getting cors policy block from heroku**********************
request.open('GET', 'https://finnhub.io/api/v1/stock/candle?symbol='+symbol+'&resolution=D&from=1572651390&to=1575243390&token=c141bbv48v6s4a2e21v0' ,true)
request.onload = function(){
console.log(this.response)
  var dataclose = JSON.parse(this.response).c
  var datahigh = JSON.parse(this.response).h
  var datalow = JSON.parse(this.response).l
  var dataopen = JSON.parse(this.response).o
  var datatime = JSON.parse(this.response).t
  var newtime = []
    for (var i = 0; i < datatime.length; i++) {


    var d = new Date( datatime[i]*1000);
    newtime[i] = d.getFullYear() + '-' + (d.getMonth()) + '-' + d.getDate();
    }

    newtime = newtime.map(String);

var trace1 = {

  x: newtime,

  close: dataclose,

  decreasing: {line: {color: '#7F7F7F'}},

  high: datahigh,

  increasing: {line: {color: '#17BECF'}},

  line: {color: 'rgba(31,119,180,1)'},

  low: datalow,

  open: dataopen,

  type: 'candlestick',
  xaxis: 'x',
  yaxis: 'y'
};

var data = [trace1];

var layout = {

  dragmode: 'zoom',
  showlegend: false,
  xaxis: {
    rangeslider: {
		 visible: false
	 }
  }
};

Plotly.newPlot('myDiv', data, layout);
}
request.send(null);
}
