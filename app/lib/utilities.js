function underline(_label, _word) {
	var text = _label.getText();
	var attr = Titanium.UI.createAttributedString({
		text : text,
		attributes : [{
			type : Ti.UI.ATTRIBUTE_UNDERLINES_STYLE,
			value : Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE,
			range : [text.indexOf(_word), _word.length]
		}]
	});
	_label.setAttributedString(attr);
};
exports.underline = underline;

function underlineAndColor(_label, _word, _color) {
	var text = _label.getText();
	var attr = Titanium.UI.createAttributedString({
		text : text,
		attributes : [{
			type : Ti.UI.ATTRIBUTE_UNDERLINES_STYLE,
			value : Ti.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE,
			range : [text.indexOf(_word), _word.length]
		}, {
			type : Ti.UI.ATTRIBUTE_FOREGROUND_COLOR,
			value : _color,
			range : [text.indexOf(_word), _word.length]
		}]
	});
	_label.setAttributedString(attr);
};
exports.underlineAndColor = underlineAndColor;

function color(_label, _word, _color) {
	var text = _label.getText();
	var attr = Titanium.UI.createAttributedString({
		text : text,
		attributes : [{
			type : Ti.UI.ATTRIBUTE_FOREGROUND_COLOR,
			value : _color,
			range : [text.indexOf(_word), _word.length]
		}]
	});
	_label.setAttributedString(attr);
};
exports.color = color;

function bold(_label, _word, _fontFamily, _fontSize) {
	var text = _label.getText();
	var attr = Titanium.UI.createAttributedString({
		text : text,
		attributes : [{
			type : Ti.UI.ATTRIBUTE_FONT,
			value : {
				fontSize : _fontSize,
				fontFamily : _fontFamily
			},
			range : [text.indexOf(_word), _word.length]
		}]
	});
	_label.setAttributedString(attr);
};
exports.bold = bold;
