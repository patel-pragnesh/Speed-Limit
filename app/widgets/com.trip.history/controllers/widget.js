if ($.args.index === 0) {
} else{
	$.row.children[0].remove($.row.children[0].children[0])
}

$.date.text = $.args.date;
$.time.text = $.args.time.toUpperCase();
$.type.text = $.args.tripType;
$.image.image = $.args.image;
