var pages = {
    _pageMap: new Map(),

    register: function(page) {
        var name = page.name;
        this._pageMap.set(page.name, page);
    },

    load: function(name) {
        var page = this._pageMap.get(name);
        page.onLoad();
        page.onInit();
    },

    loadPage: function(pageName, pageJs) {
        loader.js(pageJs, function() {
            pages.load(pageName);
        });
    }
}
