function indexWin(){
	//タブグループの作成、またタブの内容であるウィンドウは先にrequireで呼び出す
	var indexTabG = Ti.UI.createTabGroup({
		top:'0dp'
	});
	
	//Tab(read)の作成
	var tab1 = Titanium.UI.createTab({
		icon: 'lib/clock.png',
	    title:'ストップウォッチ',
		window: Ti.UI.createWindow({//new readWin({
			title: 'ストップウォッチ',
			backgroundColor: '#fff',
			navBarHidden: false,
			exitOnClose: true,
			url:'watch.js'
		})
	});	

/*
	//Tab(write)の作成
	var tab2 = Titanium.UI.createTab({
		icon: 'lib/write.png',
	    title:'小説を書く',
		window: Ti.UI.createWindow({//new writeWin({
			title: '小説を書く',
			backgroundColor: '#fff',
			color: '#fff',
			navBarHidden: true,
			exitOnClose:true,
			url:'pulltest.js'//'write.js'
		})
	});
*/
	
	//タブグループを開く
	indexTabG.addTab(tab1);
	//indexTabG.addTab(tab2);
	return indexTabG;
	//indexTabG.open({transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
}
module.exports = indexWin;
