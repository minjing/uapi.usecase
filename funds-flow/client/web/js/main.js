// var mask = document.getElementById('mask');
// var loginWin = document.getElementById('login');
// var bt = document.getElementById('bt');
// var closeBt = document.getElementById('close');

// bt.onclick = function() {
//     mask.style.display = 'block';
//     loginWin.style.display = 'block';
// }

// closeBt.onclick = function() {
//     mask.style.display = 'none';
//     loginWin.style.display = 'none';
// }

/**
 * 1. Send request to server to fetch user information.
 * 2. Show sign in window if user information is empty.
 * 3. Clear main area and show default window when user sign in success.
 * 4. Clear main area and show sign up window if user select sign up action.
 */

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

if (currentPage == null) {
    loader.js('js/page/signin.js');
}

function toPage(page) {
    var basePath = 'js/page/';
    if (page === 'signin') {
        loader.js(basePath + 'signin.js', function() {
            signin.onLoad();
        });
    } else if (page === 'signup') {
        loader.js(basePath + 'signup.js', function() {
            signup.onLoad();
        });
    }
}

var page = {
    onLoad: function() {}
}
