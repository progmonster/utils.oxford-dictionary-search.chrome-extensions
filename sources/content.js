chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (request.method == "getSelection") {
		var selection = window.getSelection().toString()

		console.log("selected: " + selection);

		sendResponse({data: selection});
	} else {
		console.log("selected empty");

		sendResponse({});
	}
});