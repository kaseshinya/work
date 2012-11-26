//メインの処理の記載(CommonJSスタイル）
function win1(){
	var win = Ti.UI.createWindow({
		title: 'テスト',
		backgroundColor: '#ddd',
		navBarHidden: true,
		barColor: '#111',
	});
	//Text field(name)の作成
	var Textfield1 = Titanium.UI.createTextField({
		hintText: 'ユーザーID (半角英数字)',
		color: '#222',
		height: '50dp',
		width: '230dp',
		top: '135dp',
		textAlign:'left',
		value: '',
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
		keyboardType: Ti.UI.KEYBOARD_URL,
		returnKeyType: Ti.UI.RETURNKEY_DONE,
	});
	
	//Text field(password)の作成
	var Textfield2 = Titanium.UI.createTextField({
		hintText: 'パスワード',
		color: '#222',
		height: '50dp',
		width: '230dp',
		top: '190dp',
		textAlign:'left',
		value: '',
		returnKeyType:Ti.UI.RETURNKEY_DONE,
		clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ONFOCUS,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		passwordMask: true,
	});
	
	//Label(説明)の作成
	var Label1 = Ti.UI.createLabel({
		text:'>>パスワードを忘れた場合はコチラ',
		top: '250dp',
		width: '280dp',
		height:Ti.UI.SIZE,
		color:'#000',
		textAlign:'right',
		font:{fontSize:'12dp',fontFamily:'HiraKakuProN-W3'},
		zindex:1
	});
	
	//Button(login)の作成
	var button1 = Titanium.UI.createButton({
		title:'ログイン',
		height: '50dp',
		width: '200dp',
		top: '320dp',
		style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
	});
	
	//Button2(register)の作成
	var button2 = Titanium.UI.createButton({
		title:'新規登録',
		height: '50dp',
		width: '200dp',
		top: '380dp',
		style: Ti.UI.iPhone.SystemButtonStyle.BORDERED,
	});

	//各入力項目を表示する
	win.add(Textfield1);
	win.add(Textfield2);
	win.add(Label1);
	win.add(button1);
	win.add(button2);

	//Button Event(register)の設定　
	button1.addEventListener('click',function(){
		var alertDialog = Titanium.UI.createAlertDialog({
			title: 'アラート',
			message: '新規登録を押しました',
			buttonNames: ['OK']
		}).show();
		return;
	});
	win.addEventListener('click',function(){
		Textfield1.blur();
		Textfield2.blur();
	});
	win.open({transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
}
module.exports = win1;