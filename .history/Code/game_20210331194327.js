var request = new XMLHttpRequest()
var arrC = []


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
    console.log(arrC)
  }else{
    console.log("error")
  }
}


request.send()