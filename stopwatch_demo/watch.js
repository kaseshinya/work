var win = Ti.UI.currentWindow;

//カラーパレットの作成
var pblack = '#3e3a39';
var pblue = '#73c1bb';
var pred = '#f29d9b';
var startFlag = 0;
var timeMsec = 0;

var sview = Titanium.UI.createScrollView({
	contentHeight: 'auto',
	top:'0dp',
	bottom: '0dp',
	left:'0dp',
	width: Ti.UI.FILL,
	backgroundColor:'#fff',
	showVerticalScrollIndicator: true,
});
win.add(sview);

//Label(日付)の作成
var clockLabel = Ti.UI.createLabel({
	text: 'ストップウォッチ',
	top:'100dp',
	//left:'10dp',
	width:'300dp',
	height: Ti.UI.Fill,
	color:pblue,
	font:{fontSize:'25dp',fontFamily:'HiraKakuProN-W6'},
	textAlign:'center'
});

//Label(時間)の作成
var timeLabel = Ti.UI.createLabel({
	text: '00:00.00',
	top:'200dp',
	//left:'10dp',
	width:'300dp',
	height: Ti.UI.Fill,
	color:'#000',
	font:{fontSize:'25dp',fontFamily:'HiraKakuProN-W6'},
	textAlign:'center'
});

var button1 = Ti.UI.createButton({
	backgroundColor:'#ccc',
	color: '#000',
	title:'スタート',
	backgroundSelectedColor:'#fff',
	font:{fontSize:'20dp'},
	top:'300dp',
	width: '300dp',
	borderColor: '#000',
	borderRadius: 3,
	borderWidth: 1,
});
var button2 = Ti.UI.createButton({
	backgroundColor:'#ccc',
	color: '#000',
	title:'リセット',
	backgroundSelectedColor:'#fff',
	font:{fontSize:'20dp'},
	top:'350dp',
	width: '300dp',
	borderColor: '#000',
	borderRadius: 3,
	borderWidth: 1,
});

sview.add(clockLabel);
sview.add(timeLabel);
sview.add(button1);
sview.add(button2);

button1.addEventListener('click',function(e){
	if(startFlag === 0){
		startWatch();
		e.source.title = "ストップ";
	}
	else{
		stopWatch();
		e.source.title = "スタート";
	}
});

button2.addEventListener('click',function(e){
	if(startFlag === 0){
		timeLabel.text = '00:00.00';
		timeMsec = 0;
	}
	else{
		alert('動いている間はリセットできません')
	}
});

var interval;
function startWatch(){
	interval = setInterval(function(){
		
		timeMsec += 10;
		time = new Date(timeMsec);
		var min = time.getMinutes();
		if(min < 10){min = '0' + min;}
		var sec = time.getSeconds();
		if(sec < 10){sec = '0' + sec;}		
		var msec = time.getMilliseconds();
		//msec = msec.substr(0, 2);
		ptime = min + ':' + sec + ':' + msec;
		timeLabel.text = ptime;
	}, 10);
	startFlag = 1;
}

function stopWatch(){
	clearInterval(interval);
	startFlag = 0;
}