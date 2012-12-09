/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
}

// This is a single context application with mutliple windows in a stack
(function() {

	var tabGroup = Ti.UI.createTabGroup({
		top: '0dp',
		left: '0dp'
	});
	var app = {};
	/*
	 * @author kaseshinya
	 */
	app.ui = {};
	
	//カラー設定
	var style = {
		barColor: '#000',
		backgroundColor: '#000'
	};
	app.ui.createHowToPlayTab = function(){
		var win = Titanium.UI.createWindow({
			title:'使い方',
			barColor: style.barColor,
			backgroundColor:style.backgroundColor
		});
		var tab = Titanium.UI.createTab({
			title: '使い方',
			window: win
		});
		return tab;
	};
	
	app.ui.createStopWatchTab = function(){
		var win = Titanium.UI.createWindow({
			title: 'ストップウォッチ',
			barColor: style.barColor,
			backColor:style.backgroundColor
		});
		var tab = Titanium.UI.createTab({
			title: 'ストップウォッチ',
			window:win
		});
		var label = Ti.UI.createLabel({
			text: '00:00:00.000',
			color: 'white',
			width: 'auto',height: 'auto',
			font: {fontSize: 40, fontWeight: 'bold'}
		});
		win.add(label);
	
		var button = Ti.UI.createButton({
			title: 'Start',
			width: 150, height: 40,
			bottom: 30
		});
		win.add(button);
		
		var intervalId = null;
		
		var _startStopwatch = function(){
			label.value = '00:00:00.000';
		
			//ボタンを押したときの時間を保持する
			var startTime = new Date();
		
			//ラベルを更新する関数を定義する
			var _updateTimer = function updateTimer(){
				var UNIT_HOUR = 60 * 60 * 1000;
				var UNIT_MINUTE = 60 * 1000;
				var UNIT_SEC = 1000;
				
				//現在日付を取得して、ボタンが押したときからの経過時間を取得する
				var now = new Date();
				var diff = now.getTime() - startTime.getTime();
				
				//経過時間を整形してラベル表示に反映させる
				var hour = Math.floor(diff / UNIT_HOUR);
				var minute = Math.floor((diff - hour * UNIT_HOUR) / UNIT_MINUTE);
				var sec = Math.floor((diff - hour * UNIT_HOUR - minute * UNIT_MINUTE) / UNIT_SEC);
				var msec = Math.floor(diff % UNIT_SEC);
				label.text = ("0" + hour).slice(-2) + ":" + ("0" + minute).slice(-2) + ":" + ("0" + sec).slice(-2) + "." + ("00" + msec).slice(-3); 
			};
			//3msごとに_updateTimerを呼び出し実行する
			intervalId = setInterval(_updateTimer, 3);
			button.title = "Stop";	
		};
		var _stopStopwatch = function(){
			clearInterval(intervalId);
			button.title = "Start";
		};
		var started = false;
		button.addEventListener('click', function(){
			if (started) {
				_stopStopwatch();
				started = false;
			} else {
				_startStopwatch();
				started = true;
			}
		});
		return tab;
	};

	var tab1 = app.ui.createStopWatchTab();
	var tab2 = app.ui.createHowToPlayTab();
	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	tabGroup.open();
	
})();
