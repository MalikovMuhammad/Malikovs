           function valyuta(pair) {
                if (document.getElementById(pair).style.display == "none") {
                    document.getElementById(pair).style.display = "block";
                    document.getElementById(pair).innerHTML = '<div class="tradingview-widget-container"> <div class="tradingview-widget-copyright"><b style="color:black;">График '+pair+' '+ timeframe +' </b></div><div id="tradingview_'+pair+'"></div></div>';                
                    new TradingView.widget({
                        "autosize": true,
                        "symbol": "FOREXCOM:"+pair,
                        "interval": timeframe,
                        "timezone": "Asia/Bahrain",
                        "theme": "light",
                        "style": "1",
                        "locale": "ru",
                        "toolbar_bg": "#f1f3f6",
                        "enable_publishing": false,
                        "hide_legend": true,
                        "hide_top_toolbar": true,
                        "hide_side_toolbar": false,
                        "allow_symbol_change": true,
                        "save_image": false,
                        "container_id": "tradingview_"+pair
                    });    
                }            
                else {
                    document.getElementById(pair).innerHTML = '';
                    document.getElementById(pair).style.display = "none";                    
                }                
	       }
      
           function kripto(pair) {
                if (document.getElementById(pair).style.display == "none") {
                    document.getElementById(pair).style.display = "block";
                    document.getElementById(pair).innerHTML = '<div class="tradingview-widget-container"><div class="tradingview-widget-copyright"><b style="color:black;">График '+pair+' '+ timeframe +'  </b></div><div id="tradingview_'+pair+'"></div></div>';                
                    new TradingView.widget({
                        "autosize": true,
                        "symbol": "BINANCE:"+pair,
                        "interval": timeframe,
                        "timezone": "Asia/Bahrain",
                        "theme": "light",
                        "style": "1",
                        "locale": "ru",
                        "toolbar_bg": "#f1f3f6",
                        "enable_publishing": false,
                        "hide_legend": true,
                        "hide_top_toolbar": true,
                        "hide_side_toolbar": false,
                        "allow_symbol_change": true,
                        "save_image": false,
                        "container_id": "tradingview_"+pair
                    });    
                }            
                else {
                    document.getElementById(pair).innerHTML = '';
                    document.getElementById(pair).style.display = "none";                    
                }                
	       }       
           
    //Изменение ширины графиков
    function setChartWidth(){
        var width = document.getElementById('chartWidth').value;
        document.getElementById('ChartWidthInfo').innerHTML = width+'px';
		
        document.getElementById('EURUSD').style.width = width; 
        document.getElementById('GBPUSD').style.width = width;
        document.getElementById('AUDUSD').style.width = width;
        document.getElementById('NZDUSD').style.width = width;
        document.getElementById('USDCAD').style.width = width;
        document.getElementById('USDCHF').style.width = width;
        document.getElementById('USDJPY').style.width = width;
        
        document.getElementById('EURGBP').style.width = width;
        document.getElementById('EURAUD').style.width = width;
        document.getElementById('EURNZD').style.width = width;
        document.getElementById('EURCAD').style.width = width;
        document.getElementById('EURCHF').style.width = width;
        document.getElementById('EURJPY').style.width = width;
        
        document.getElementById('GBPAUD').style.width = width;
        document.getElementById('GBPNZD').style.width = width;
        document.getElementById('GBPCAD').style.width = width;
        document.getElementById('GBPCHF').style.width = width;
        document.getElementById('GBPJPY').style.width = width;
        
        document.getElementById('AUDNZD').style.width = width;
        document.getElementById('AUDCAD').style.width = width;
        document.getElementById('AUDCHF').style.width = width;
        document.getElementById('AUDJPY').style.width = width;
        
        document.getElementById('NZDCAD').style.width = width;
        document.getElementById('NZDCHF').style.width = width;
        document.getElementById('NZDJPY').style.width = width;
        
        document.getElementById('CADCHF').style.width = width;
        document.getElementById('CADJPY').style.width = width;
        
        document.getElementById('CHFJPY').style.width = width;
        
        document.getElementById('BTCUSDT').style.width = width;
        document.getElementById('BCHUSDT').style.width = width;
        document.getElementById('ETHUSDT').style.width = width;
        document.getElementById('ETCUSDT').style.width = width;
        document.getElementById('LTCUSDT').style.width = width;
        document.getElementById('XRPUSDT').style.width = width;
        document.getElementById('EOSUSDT').style.width = width;
        document.getElementById('BNBUSDT').style.width = width;
        document.getElementById('SOLUSDT').style.width = width;
        document.getElementById('ADAUSDT').style.width = width;
        
        document.getElementById('LUNAUSDT').style.width = width;
        document.getElementById('GALAUSDT').style.width = width;
        document.getElementById('TRXUSDT').style.width = width;
        document.getElementById('DOTUSDT').style.width = width;
        document.getElementById('MATICUSDT').style.width = width;
        document.getElementById('SANDUSDT').style.width = width;
        document.getElementById('MANAUSDT').style.width = width;
        document.getElementById('FTMUSDT').style.width = width;
        document.getElementById('LINKUSDT').style.width = width;
        document.getElementById('DOGEUSDT').style.width = width;
        
        document.getElementById('ATOMUSDT').style.width = width;
        document.getElementById('XLMUSDT').style.width = width;
        document.getElementById('NEOUSDT').style.width = width;
        document.getElementById('FILUSDT').style.width = width;
        document.getElementById('UNIUSDT').style.width = width;
        document.getElementById('AXSUSDT').style.width = width;
        document.getElementById('ZECUSDT').style.width = width;
        document.getElementById('XMRUSDT').style.width = width;
        document.getElementById('DASHUSDT').style.width = width;
        document.getElementById('EGLDUSDT').style.width = width;
        
        document.getElementById('WAVESUSDT').style.width = width;
        document.getElementById('AAVEUSDT').style.width = width;
        document.getElementById('XTZUSDT').style.width = width;
        document.getElementById('FLOWUSDT').style.width = width;
        
    }
    
    //Изменение высоты графиков
    function setChartHeight(){
        var height = document.getElementById('chartHeight').value;
        document.getElementById('ChartHeightInfo').innerHTML = height+'px';
		
        document.getElementById('EURUSD').style.height = height;
        document.getElementById('GBPUSD').style.height = height;
        document.getElementById('AUDUSD').style.height = height;
        document.getElementById('NZDUSD').style.height = height;
        document.getElementById('USDCAD').style.height = height;
        document.getElementById('USDCHF').style.height = height;
        document.getElementById('USDJPY').style.height = height;
        
        document.getElementById('EURGBP').style.height = height;
        document.getElementById('EURAUD').style.height = height;
        document.getElementById('EURNZD').style.height = height;
        document.getElementById('EURCAD').style.height = height;
        document.getElementById('EURCHF').style.height = height;
        document.getElementById('EURJPY').style.height = height;
        
        document.getElementById('GBPAUD').style.height = height;
        document.getElementById('GBPNZD').style.height = height;
        document.getElementById('GBPCAD').style.height = height;
        document.getElementById('GBPCHF').style.height = height;
        document.getElementById('GBPJPY').style.height = height;
        
        document.getElementById('AUDNZD').style.height = height;
        document.getElementById('AUDCAD').style.height = height;
        document.getElementById('AUDCHF').style.height = height;
        document.getElementById('AUDJPY').style.height = height;
        
        document.getElementById('NZDCAD').style.height = height;
        document.getElementById('NZDCHF').style.height = height;
        document.getElementById('NZDJPY').style.height = height;
        
        document.getElementById('CADCHF').style.height = height;
        document.getElementById('CADJPY').style.height = height;
        
        document.getElementById('CHFJPY').style.height = height;
		
		document.getElementById('BTCUSDT').style.height = height;
        document.getElementById('BCHUSDT').style.height = height;
        document.getElementById('ETHUSDT').style.height = height;
        document.getElementById('ETCUSDT').style.height = height;
        document.getElementById('LTCUSDT').style.height = height;
        document.getElementById('XRPUSDT').style.height = height;
        document.getElementById('EOSUSDT').style.height = height;
        document.getElementById('BNBUSDT').style.height = height;
        document.getElementById('SOLUSDT').style.height = height;
        document.getElementById('ADAUSDT').style.height = height;
        
        document.getElementById('LUNAUSDT').style.height = height;
        document.getElementById('GALAUSDT').style.height = height;
        document.getElementById('TRXUSDT').style.height = height;
        document.getElementById('DOTUSDT').style.height = height;
        document.getElementById('MATICUSDT').style.height = height;
        document.getElementById('SANDUSDT').style.height = height;
        document.getElementById('MANAUSDT').style.height = height;
        document.getElementById('FTMUSDT').style.height = height;
        document.getElementById('LINKUSDT').style.height = height;
        document.getElementById('DOGEUSDT').style.height = height;
        
        document.getElementById('ATOMUSDT').style.height = height;
        document.getElementById('XLMUSDT').style.height = height;
        document.getElementById('NEOUSDT').style.height = height;
        document.getElementById('FILUSDT').style.height = height;
        document.getElementById('UNIUSDT').style.height = height;
        document.getElementById('AXSUSDT').style.height = height;
        document.getElementById('ZECUSDT').style.height = height;
        document.getElementById('XMRUSDT').style.height = height;
        document.getElementById('DASHUSDT').style.height = height;
        document.getElementById('EGLDUSDT').style.height = height;
        
        document.getElementById('WAVESUSDT').style.height = height;
        document.getElementById('AAVEUSDT').style.height = height;
        document.getElementById('XTZUSDT').style.height = height;
        document.getElementById('FLOWUSDT').style.height = height;
    }


		const kriptoPairs = ['BTCUSDT', 'BCHUSDT', 'ETHUSDT', 'ETCUSDT', 'LTCUSDT', 'XRPUSDT', 'EOSUSDT', 'BNBUSDT', 'SOLUSDT', 'ADAUSDT', 'LUNAUSDT', 'GALAUSDT', 'TRXUSDT', 'DOTUSDT', 'MATICUSDT', 'SANDUSDT', 'MANAUSDT', 'FTMUSDT', 'LINKUSDT', 'DOGEUSDT', 'ATOMUSDT', 'XLMUSDT', 'NEOUSDT', 'FILUSDT', 'UNIUSDT', 'AXSUSDT', 'ZECUSDT', 'XMRUSDT', 'DASHUSDT', 'EGLDUSDT', 'WAVESUSDT', 'AAVEUSDT', 'XTZUSDT', 'FLOWUSDT'];
		const valyutaPairs = ['EURUSD', 'GBPUSD', 'AUDUSD', 'NZDUSD', 'USDCAD', 'USDCHF', 'USDJPY', 'EURGBP', 'EURAUD', 'EURNZD', 'EURCAD', 'EURCHF', 'EURJPY', 'GBPAUD', 'GBPNZD', 'GBPCAD', 'GBPCHF', 'GBPJPY', 'AUDNZD', 'AUDCAD', 'AUDCHF', 'AUDJPY', 'NZDCAD', 'NZDCHF', 'NZDJPY', 'CADCHF', 'CADJPY', 'CHFJPY'];

		function kriptoAll(){
			kriptoPairs.forEach(element => kripto(element));
		}
		
		function valyutaAll(){
			valyutaPairs.forEach(element => valyuta(element));
		}
           
           
           
           
           
           