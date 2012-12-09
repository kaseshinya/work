//TitaniumSDKのversionをチェックする
if (Ti.version < 1.8 ) {
	alert('このアプリケーションはTitanium Mobile SDK 1.8以上を対象としています。');
}

(function() {
	//deviceのOS,version,ディスプレイサイズをチェックする
	//*今回端末ごとにファイルを分割しないので、この部分は省いても大丈夫です。
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//win1を呼び出す
	var Window = require('win1');
	new Window().open();
})();

<html>
	head
	
	body
</html>