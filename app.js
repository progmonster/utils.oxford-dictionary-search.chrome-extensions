function run() {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response) {
			var phrase = response.data.trim().replace(/\s+/g, "+");

			console.log("phrase: " + phrase);

			var queryUrl = "http://www.oxforddictionaries.com/search/all/?direct=1&multi=1&q=" + phrase;

			chrome.tabs.create({url: queryUrl});
		});
	});
}

var id = chrome.contextMenus.create({"title": "Search in Oxford Dictionary", "contexts": ["selection"], "onclick": run});

// todo deploy to web store
// todo push to remote git.
