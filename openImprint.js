function openImprint (tab){

	browser.tabs.executeScript({file : "/findImprint.js"});


}


browser.browserAction.onClicked.addListener(openImprint);
	