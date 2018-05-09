var request = new XMLHttpRequest();

var currentPage = null;

var loader = {
    js: function(path, callback) {
        if ( !path || path.length === 0) {
            throw new Error('Argument <path> is required.');
        }

        var head = document.getElementsByTagName('head')[0];
        var scripts = head.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src.indexOf(path) > 0) {
                callback();
                return;
            }
        }
        var script = document.createElement('script');
        script.src = path;
        script.type = 'text/javascript';
        head.appendChild(script);
        if (callback != null) {
            if (script.readyState) { // IE
                if (script.readyState == 'loaded' || script.readyState === 'complete') {
                    script.onreadystatechange = null;
                    callback();
                }
            } else {
                script.onload = function() {
                    callback();
                }
            }
        }
    },
    css: function(path) {
        if (!path || path.length === 0) {
            throw Error('Argument <path> is required');
        }

        var head = document.getElementsByTagName('head')[0];
        var links = head.getElementsByTagName('link');
        for (var i = 0; i < links.length; i++) {
            if (links[i].type === 'text/css' && links[i].href.indexOf(path) > 0) {
                return
            }
        }
        var link = document.createElement('link');
        link.href = path;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        head.appendChild(link);
    }
}

var utils = {
    showNewContent: function(content, commonStyle) {
        var main = document.getElementById('main');
        var oldform = main.getElementsByTagName('div');
        if (oldform.length > 0) {
            oldform[0].className = commonStyle + ' fade-out';
            setTimeout(function() {
                main.innerHTML = '';
                content.className = commonStyle + ' fade-in';
                main.appendChild(content);
            }, 450)
        } else {
            content.className = commonStyle + ' fade-in';
            main.appendChild(content);
        }
    }
}

if (currentPage == null) {
    loader.js('js/page/signin.js', function() {
        pages.load('signin');
    });
}

/**
 *
 */
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
    }
}

menus.renderMenu(signMenus, 'signin');
shortcuts.renderShutcut(null, 'en-US');
