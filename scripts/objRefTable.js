const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.AJAX,
		C3.Plugins.HTMLElement,
		C3.Plugins.Button,
		C3.Plugins.Text,
		C3.Plugins.Keyboard,
		C3.Plugins.Arr,
		C3.Plugins.CSV,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.AJAX.Acts.Request,
		C3.Plugins.HTMLElement.Acts.SetContentCSSStyle,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.CSV.Acts.ParseCSV,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.Text.Acts.UpdateHTML,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.HTMLElement.Acts.SetContent,
		C3.Plugins.Text.Exps.AsHTML,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.ToggleBoolVar,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Button.Acts.SetVisible,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.CSV.Cnds.OnParseSuccess,
		C3.Plugins.System.Acts.SetFunctionReturnValue,
		C3.Plugins.System.Exps.replace,
		C3.Plugins.System.Exps.tokenat
	];
};
self.C3_JsPropNameTable = [
	{AJAX: 0},
	{HTML: 0},
	{上一個: 0},
	{下一個: 0},
	{內文: 0},
	{台詞: 0},
	{控制: 0},
	{時間: 0},
	{標題: 0},
	{鍵盤: 0},
	{陣列: 0},
	{CSV: 0},
	{階段: 0},
	{是否上: 0},
	{XX: 0},
	{YY: 0}
];

self.InstanceType = {
	AJAX: class extends self.IInstance {},
	HTML: class extends self.IHTMLElementInstance {},
	上一個: class extends self.IButtonInstance {},
	下一個: class extends self.IButtonInstance {},
	內文: class extends self.ITextInstance {},
	台詞: class extends self.IButtonInstance {},
	控制: class extends self.IButtonInstance {},
	時間: class extends self.ITextInstance {},
	標題: class extends self.ITextInstance {},
	鍵盤: class extends self.IInstance {},
	陣列: class extends self.IArrayInstance {},
	CSV: class extends self.IInstance {}
}