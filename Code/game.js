var store =  []
var date = [0,1,2,3,4]
var to_cancel
var count_day = 4
var buy_price
//var x = []
//'https://finnhub.io/api/v1/stock/candle?symbol='+password+'&resolution=1&from='+start+'&to='+end+'&token=c141b3f48v6s4a2e21p0'
function startLoop(){
    
    //var start = '2021-01-01 00:00:00'
    var start = document.getElementById('start-date').value + ' 00:00:00'
    //var end = '2021-04-01 00:00:00'
    var end = document.getElementById('end-date').value + ' 00:00:00'
   
    var stamp_start = parseInt(new Date (start).getTime() / 1000)
    const myChart = echarts.init(document.getElementById('main'));
    var stamp_end = parseInt(new Date(end).getTime() / 1000)
    var url = 'https://finnhub.io/api/v1/stock/candle?symbol='+password+'&resolution=D&from='+stamp_start+'&to='+stamp_end+'&token=c141b3f48v6s4a2e21p0'
    //console.log(url)
    var init_data = []
    const request = new XMLHttpRequest()
    request.open('GET',url, true)
    request.onload = function(){
    //console.log(this.response)
    data1 = JSON.parse(this.response).o
    data2 = JSON.parse(this.response).c
    data3 = JSON.parse(this.response).h
    data4 = JSON.parse(this.response).l
    if(request.status >= 200 && request.status < 400){
      for( i = 0; i < data1.length; i++){
        store.push([data1[i], data2[i], data3[i], data4[i]])
      
      }
    }else{
      console.log("error")
    }
    console.log(store[0][0])
    buy_price = store[0][0]
    //console.log(data1)
    JSON.parse(JSON.stringify(store));
    console.log(store)
        
                myChart.resize({
                    width: 800,
                    height: 600
                })
        option = {
        toolbox: { feature: { saveAsImage: {} } },
        xAxis: { type: 'category', data: date },
        yAxis: { type: 'value' },
        series: [
          {
            data: store,
            type: 'k',
          },
        ],
      };
			myChart.setOption(option);
    }
    
    //console.log(store)
    //console.log(store[0])
    request.send()
    to_cancel = setInterval(function(){painting(myChart, store, date)},500)
}

function painting(myChart, store, date){
  date.push(date[date.length-1] +1)
  console.log(date)
  option = {
      toolbox: { feature: { saveAsImage: {} } },
      xAxis: { type: 'category', data: date },
      yAxis: { type: 'value' },
      series: [
          {
          data: store,
          type: 'k',
      },
      ],
  };
  myChart.setOption(option);
  count_day ++
}

  
//sell the stock, painting stops
function endLoop(){
  clearInterval(to_cancel)
  
  calProfit()
}
//calculate the profit
function calProfit(){
  sell_price = store[count_day-1][1]
  console.log(sell_price)
  console.log(buy_price)
  profit = 0
  temp = document.getElementById("user-amount").value
  if(!temp){
      amount = 1000
  }else{
      amount = temp
  }
  var profit = amount * (sell_price - buy_price)
  document.getElementById("output_profit").innerHTML = profit.toFixed(2) + "$"
}
//date.push(5)
//console.log("in js", store)
/*
request.open('GET', 'https://finnhub.io/api/v1/crypto/candle?symbol=BINANCE:BTCUSDT&resolution=D&from=1577808000&to=1609344000&token=c141b3f48v6s4a2e21p0' ,true)
request.onload = function(){
  var data1 = JSON.parse(this.response).o
  var data2 = JSON.parse(this.response).c
  var data3 = JSON.parse(this.response).h
  var data4 = JSON.parse(this.response).l
  //console.log(data)
  if(request.status >= 200 && request.status < 400){
    data1.forEach(results => {
      //console.log("data1")
      //console.log(data1)
      
    });
    data2.forEach(results2 => {
     // console.log("data2")
      //console.log(data2)

    })
    for( i = 0; i < 365; i++){
      arrC.push([data1[i], data2[i], data3[i], data4[i]])
    }
    //console.log(arrC)
  }else{
    console.log("error")
  }
}
*/

//request.send()