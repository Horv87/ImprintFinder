var x = document.links;
var len = x.length;
for (var i = 0; i < len; i++){
var regEx = /Impressum|Imprint/g;

	if (regEx.test(x[i].text)){
		x[i].click();
	}
}
