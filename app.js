function run() {
	console.log("oxford_debug: clicked");

	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response) {
			var word = response.data;

			var queryUrl = "http://www.oxforddictionaries.com/definition/american_english/" + word + "?q=" + word;

			chrome.tabs.create({url: queryUrl});
		});
	});
}

var id = chrome.contextMenus.create({"title": "Search in Oxford's Dictionary", "contexts": ["selection"], "onclick": run});

console.log("oxford_debug: menu_item_id=" + id);

// todo make app icon blue
// fix app icon not shown in extension list
// todo correct menu_item and app title. Correct description
// todo deploy to web store
// todo push to remote git.
// todo new version: show dictionary page as popup modal window with appropriate size. Close this window by ESC and close button.
