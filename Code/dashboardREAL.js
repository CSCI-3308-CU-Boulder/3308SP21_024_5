function myFunction() {
    var symbol = document.getElementById('test').value;
    console.log(symbol)
    var endtime = Date.now();
    // var resolution = 15; //Supported resolution includes 1, 5, 15, 30, 60, D, W, M  ***************THIS MIGHT MAKE FROM/TO DATES HARD
    //var fromtime = endtime - 16;

    var request = new XMLHttpRequest()

    var timeEnd = parseInt(new Date().getTime() / 1000)
    var timeStart = timeEnd - 1296000 //resolution = 86400 * day
    //getting cors policy block from heroku**********************
    //default will should latest 15 days data
    request.open('GET', 'https://finnhub.io/api/v1/stock/candle?symbol='+symbol+'&resolution=15&from='+timeStart+'&to='+timeEnd+'&token=c141bbv48v6s4a2e21v0' ,true)
    var FIFDaysAgo = new Date()
    request.onload = function(){
    //console.log(this.response)
      var dataclose = JSON.parse(this.response).c
      var datahigh = JSON.parse(this.response).h
      var datalow = JSON.parse(this.response).l
      var dataopen = JSON.parse(this.response).o
      var datatime = JSON.parse(this.response).t
      var newtime = []
      for (var i = 0; i < 15; i++) {
        newtime[i] = timestampToTime(timeStart)
        timeStart += 86400
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
    }
    Plotly.newPlot('myDiv', data, layout)
    var btn = document.createElement('node')
    var print = document.getElementById('btn')
    //
    //print.innerHTML = '<div class="btn-group" ><button type="button" class="btn btn-secondary">Pinned</button><button type="button" class="btn btn-dark">Buy</button><button type="button" class="btn btn-primary">Sell</button></div>'
    var button_for_pinned = '<div class="btn-group" ><button type="button" class="btn btn-secondary">Add to watchlist</button>'
    var button_for_buySell = '<button type="button" class="btn btn-dark" onclick="jump_to_game()">Buy/Sell Games</button>'
    print.innerHTML = button_for_pinned + button_for_buySell

    }
    
    
    request.send(null);
}

function timestampToTime(timestamp) {
  var date = new Date(timestamp * 1000)
  var Y = date.getFullYear() + '-'
  var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  var D = date.getDate()
  return Y + M + D
}



function jump_to_game(){
  console.log('im in ')
  var password = document.getElementById('test').value;
  window.location.href = "game_password.html?param1="+ password +"";
  
}
