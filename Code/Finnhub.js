

/*

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c141bbv48v6s4a2e21v0"
const finnhubClient = new finnhub.DefaultApi()

*/

var x = new XMLHttpRequest();
x.onload = function(e){ console.log(JSON.parse(e.currentTarget.response));  }


x.open("GET", "https://finnhub.io/api/v1/forex/candle?symbol=OANDA:EUR_USD&resolution=D&from=1572651390&to=1575243390&token=c141bbv48v6s4a2e21v0");
x.send();


/*
Sample Output:
[
  {
    "description": "IC MARKETS Euro vs US Dollar EURUSD",
    "displaySymbol": "EUR/USD",
    "symbol": "IC MARKETS:1"
  },
  {
    "description": "IC MARKETS Australian vs US Dollar AUDUSD",
    "displaySymbol": "AUD/USD",
    "symbol": "IC MARKETS:5"
  },
  {
    "description": "IC MARKETS British Pound vs US Dollar GBPUSD",
    "displaySymbol": "GBP/USD",
    "symbol": "IC MARKETS:2"
  }]

*/
/*

//forex Candles
const request = require('request');

request('https://finnhub.io/api/v1/forex/candle?symbol=OANDA:EUR_USD&resolution=D&from=1572651390&to=1575243390&token=c141bbv48v6s4a2e21v0', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});

/* Example
{"c":[1.1127,1.10701,1.10655,1.10489,1.10146,1.10325,1.10078,1.10054,1.10194,1.10479,1.10683,1.10776,1.10716,1.10579,1.10162,1.10067,1.1021,1.09983,1.10059,1.10159,1.10784],
"h":[1.11749,1.11397,1.10923,1.10912,1.10549,1.10425,1.10379,1.10198,1.10271,1.10564,1.10894,1.10834,1.10808,1.10965,1.10863,1.10316,1.1025,1.10234,1.10175,1.10278,1.10889],
"l":[1.11242,1.10631,1.10638,1.10353,1.10146,1.10152,1.10019,1.09948,1.09885,1.1014,1.10457,1.10621,1.10524,1.10516,1.10138,1.10029,1.10057,1.09918,1.09958,1.09806,1.10023],
"o":[1.11674,1.1127,1.10737,1.10655,1.10483,1.10215,1.10325,1.10081,1.10013,1.10199,1.10477,1.10705,1.10766,1.10713,1.10566,1.10156,1.10114,1.10202,1.09994,1.10051,1.10228],
"s":"ok","t":[1572818400,1572904800,1572991200,1573077600,1573164000,1573423200,1573509600,1573596000,1573682400,1573768800,1574028000,1574114400,1574200800,1574287200,1574373600,1574632800,1574719200,1574805600,1574892000,1574978400,1575237600],
"v":[46494,60926,46621,69028,46822,31994,44108,46795,44539,36153,39113,34391,47213,44356,49441,40379,40476,40904,23875,36521,47505]}

Response Attributes:

o
List of open prices for returned candles.

h
List of high prices for returned candles.

l
List of low prices for returned candles.

c
List of close prices for returned candles.

v
List of volume data for returned candles.

t
List of timestamp for returned candles.

s
Status of the response. This field can either be ok or no_data.*/
/*

//cryptoSymbols
const request = require('request');

request('https://finnhub.io/api/v1/crypto/symbol?exchange=binance&token=c141bbv48v6s4a2e21v0', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});
/*SAMPLE Response
[
  {
    "description": "Binance ETHBTC",
    "displaySymbol": "ETH/BTC",
    "symbol": "ETHBTC"
  },
  {
    "description": "Binance LTCBTC",
    "displaySymbol": "LTC/BTC",
    "symbol": "BINANCE:LTCBTC"
  },
  {
    "description": "Binance BNBBTC",
    "displaySymbol": "BNB/BTC",
    "symbol": "BINANCE:BNBBTC"
  }]
*/
/*
//Crypto Candles
const request = require('request');

request('https://finnhub.io/api/v1/crypto/candle?symbol=BINANCE:BTCUSDT&resolution=D&from=1572651390&to=1575243390&token=c141bbv48v6s4a2e21v0', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  console.log(body.url);
  console.log(body.explanation);
});

/*SAMPLE Response

{
  "c": [
    1.10713,
    1.10288,
    1.10397,
    1.10182
  ],
  "h": [
    1.1074,
    1.10751,
    1.10729,
    1.10595
  ],
  "l": [
    1.09897,
    1.1013,
    1.10223,
    1.10101
  ],
  "o": [
    1.0996,
    1.107,
    1.10269,
    1.10398
  ],
  "s": "ok",
  "t": [
    1568667600,
    1568754000,
    1568840400,
    1568926800
  ],
  "v": [
    75789,
    75883,
    73485,
    5138
  ]
}
*/



/*

// Stock candles
finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, {}, (error, data, response) => {
    console.log(data)
});

//Company News
finnhubClient.companyNews("AAPL", "2020-01-01", "2020-05-01", (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log(data)
    }
});

// Investor Ownership
let optsLimit = {'limit': 10};
finnhubClient.investorsOwnership("AAPL", optsLimit, (error, data, response) => {
    console.log(data)
});

//Aggregate Indicator
finnhubClient.aggregateIndicator("AAPL", "D", (error, data, response) => {
    console.log(data)
});

// Basic financials
finnhubClient.companyBasicFinancials("AAPL", "margin", (error, data, response) => {
    console.log(data)
});

// Company earnings
finnhubClient.companyEarnings("AAPL", {'limit': 10}, (error, data, response) => {
    console.log(data)
});

// Company EPS estimates
finnhubClient.companyEpsEstimates("AAPL", {}, (error, data, response) => {
    console.log(data)
});

// Company executive
finnhubClient.companyExecutive("AAPL", (error, data, response) => {
    console.log(data)
});

// Company peers
finnhubClient.companyPeers("AAPL", (error, data, response) => {
    console.log(data)
});

// Company profile
finnhubClient.companyProfile({'symbol': 'AAPL'}, (error, data, response) => {
    console.log(data)
});
finnhubClient.companyProfile({'isin': 'US0378331005'}, (error, data, response) => {
    console.log(data)
});
finnhubClient.companyProfile({'cusip': '037833100'}, (error, data, response) => {
    console.log(data)
});

//Company profile2
finnhubClient.companyProfile2({'symbol': 'AAPL'}, (error, data, response) => {
    console.log(data)
});

// Revenue Estimates
finnhubClient.companyRevenueEstimates("AAPL", {}, (error, data, response) => {
    console.log(data)
});

// List country
finnhubClient.country((error, data, response) => {
    console.log(data)
});

// Covid-19
finnhubClient.covid19((error, data, response) => {
    console.log(data)
});

// Crypto candles
finnhubClient.cryptoCandles("BINANCE:BTCUSDT", "D", 1590988249, 1591852249, (error, data, response) => {
    console.log(data)
});

// Crypto exchanges
finnhubClient.cryptoExchanges((error, data, response) => {
    console.log(data)
});

//Crypto symbols
finnhubClient.cryptoSymbols("BINANCE", (error, data, response) => {
    console.log(data)
});

// Earnings calendar
finnhubClient.earningsCalendar({"from": "2020-06-01", "to": "2020-06-30"}, (error, data, response) => {
    console.log(data)
});

// Economic code
finnhubClient.economicCode((error, data, response) => {
    console.log(data)
});

// Economic data
finnhubClient.economicData("MA-USA-656880", (error, data, response) => {
    console.log(data)
});

// Filings
finnhubClient.filings({"symbol": "AAPL"}, (error, data, response) => {
    console.log(data)
});

//Financials
finnhubClient.financials("AAPL", "ic", "annual", (error, data, response) => {
    console.log(data)
});

// Financials Reported
finnhubClient.financialsReported({"symbol": "AAPL"}, (error, data, response) => {
    console.log(data)
});

// Forex candles
finnhubClient.forexCandles("OANDA:EUR_USD", "D", 1590988249, 1591852249, (error, data, response) => {
    console.log(data)
});

// Forex exchanges
finnhubClient.forexExchanges((error, data, response) => {
    console.log(data)
});

// Forex rates
finnhubClient.forexRates({"base": "USD"}, (error, data, response) => {
    console.log(data)
});

// Forex symbols
finnhubClient.forexSymbols("OANDA", (error, data, response) => {
    console.log(data)
});

//Fund ownership
finnhubClient.fundOwnership("AAPL", {'limit': 10}, (error, data, response) => {
    console.log(data)
});

// General news
finnhubClient.generalNews("general", {}, (error, data, response) => {
    console.log(data)
});

// Ipo calendar
finnhubClient.ipoCalendar("2020-01-01", "2020-06-15", (error, data, response) => {
    console.log(data)
});

//Major development
finnhubClient.majorDevelopments("AAPL", {}, (error, data, response) => {
    console.log(data)
});

// News sentiment
finnhubClient.newsSentiment("AAPL", (error, data, response) => {
    console.log(data)
});

// Pattern recognition
finnhubClient.patternRecognition("AAPL", "D", (error, data, response) => {
    console.log(data)
});

// Price target
finnhubClient.priceTarget("AAPL", (error, data, response) => {
    console.log(data)
});

//Quote
finnhubClient.quote("AAPL", (error, data, response) => {
    console.log(data)
});

// Recommendation trends
finnhubClient.recommendationTrends("AAPL", (error, data, response) => {
    console.log(data)
});

// Stock dividends
finnhubClient.stockDividends("KO", "2019-01-01", "2020-06-30", (error, data, response) => {
    console.log(data)
});

// Splits
finnhubClient.stockSplits("AAPL", "2000-01-01", "2020-06-15", (error, data, response) => {
    console.log(data)
});

// Stock symbols
finnhubClient.stockSymbols("US", (error, data, response) => {
    console.log(data)
});

// Support resistance
finnhubClient.supportResistance("AAPL", "D", (error, data, response) => {
    console.log(data)
});

// Technical indicator
finnhubClient.technicalIndicator("AAPL", "D", 1580988249, 1591852249, "macd", {}, (error, data, response) => {
    console.log(data)
});

// Transcripts
finnhubClient.transcripts("AAPL_162777", (error, data, response) => {
    console.log(data)
});

// Transcripts list
finnhubClient.transcriptsList("AAPL", (error, data, response) => {
    console.log(data)
});

// Upgrade/downgrade
finnhubClient.upgradeDowngrade({"symbol": "AAPL"}, (error, data, response) => {
    console.log(data)
});

// Tick Data
api.stockTick("AAPL", "2020-03-25", 500, 0, (error, data, response) => {
    console.error(data);
});

// Indices Constituents
api.indicesConstituents("^GSPC", (error, data, response) => {
    console.error(data);
});

// Indices Historical Constituents
api.indicesHistoricalConstituents("^GSPC", (error, data, response) => {
    console.error(data);
});

// ETFs Profile
api.etfsProfile('SPY', (error, data, response) => {
    console.error(data);
});

// ETFs Holdings
api.etfsHoldings('SPY', (error, data, response) => {
    console.error(data);
});

// ETFs Industry Exposure
api.etfsIndustryExposure('SPY', (error, data, response) => {
    console.error(data);
});

// ETFs Country Exposure
api.etfsCountryExposure('SPY', (error, data, response) => {
    console.error(data);
});


//PLOTLY
Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL High',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.High'),
  line: {color: '#17BECF'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL Low',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.Low'),
  line: {color: '#7F7F7F'}
}

var data = [trace1,trace2];

var layout = {
  title: 'Time Series with Rangeslider',
  xaxis: {
    autorange: true,
    range: ['2015-02-17', '2017-02-16'],
    rangeselector: {buttons: [
        {
          count: 1,
          label: '1m',
          step: 'month',
          stepmode: 'backward'
        },
        {
          count: 6,
          label: '6m',
          step: 'month',
          stepmode: 'backward'
        },
        {step: 'all'}
      ]},
    rangeslider: {range: ['2015-02-17', '2017-02-16']},
    type: 'date'
  },
  yaxis: {
    autorange: true,
    range: [86.8700008333, 138.870004167],
    type: 'linear'
  }
};

Plotly.newPlot('myDiv', data, layout);
})
*/
