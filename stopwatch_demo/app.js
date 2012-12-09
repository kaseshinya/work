if(Ti.version < 1.8){
	alert('このアプリケーションはTitanium Mobile SDK 1.8以上を対象としています。');
}
else{
	//index.jsの呼び出し
	(function(){
		var self = require('index');
		new self().open();
	})();
}