chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if (request.method == "getSelection") {
		console.log("oxford_debug: selection=" + window.getSelection().toString());

		sendResponse({data: window.getSelection().toString()});
	} else {
		sendResponse({});
	}
});