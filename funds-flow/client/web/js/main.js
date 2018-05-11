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
    request: function() {
        return new XMLHttpRequest();
    },

    showNewContent: function(content, commonStyle, callback) {
        var main = document.getElementById('main');
        var oldform = main.getElementsByTagName('div');
        if (oldform.length > 0) {
            oldform[0].className = commonStyle + ' fade-out';
            setTimeout(function() {
                main.innerHTML = '';
                main.innerHTML = content;
                if (callback) {
                    callback();
                }
            }, 450)
        } else {
            main.innerHTML = content;
            if (callback) {
                callback();
            }
        }
    },

    getTop: function(element) {
        var top = element.offsetTop;
        if (element.offsetParent != null) {
            top += this.getTop(element.offsetParent);
        }
        return top;
    },

    getLeft: function(element) {
        var left = element.offsetLeft;
        if (element.offsetParent != null) {
            left += this.getLeft(element.offsetParent);
        }
        return left;
    },

    loadTemplate: function(path, callback) {
        var tempLoader = document.getElementById('templateLoader');
        templateLoader.onload = callback;
        templateLoader.src = path;
    }
};

menus.renderMenu(signMenus, menus.signin.name);
shortcuts.renderShutcut(null, context.currentLanguage.name);

document.getElementsByTagName('body')[0].addEventListener('click', function(event) {
    contextMenu.hideMenu();
});
