function run() {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response) {
			var phrase = response.data.trim().replace(/\s+/g, "+");

			console.log("phrase: " + phrase);

			var queryUrl = "https://en.oxforddictionaries.com/definition/us/" + phrase;

			chrome.tabs.create({url: queryUrl});
		});
	});
}

chrome.contextMenus.create({"title": "Search in Oxford Dictionary", "contexts": ["selection"], "onclick": run});
