var signMenus = [{
    name: 'signin',
    i18nkey: 'menu.signin',
    js: 'fragment/signin/signin.js'
}, {
    name: 'signup',
    i18nkey: 'menu.signup',
    js: 'fragment/signup/signup.js'
}]

var menus = {
    signin: signMenus[0],
    signup: signMenus[1],

    /**
     * menus: which menus will be rendered
     * currentMenu: Which menus is selected after menus is rendered
     */
    renderMenu: function(menus, currentMenu) {
        var nav = document.getElementsByClassName('nav')[0];
        nav.innerHTML = '';
        for (var i = 0; i < menus.length; i++) {
            var menuItem = document.createElement('li');
            var menu = menus[i];
            menuItem.setAttribute('name', menu.name);
            menuItem.setAttribute('data-i18n', menu.i18nkey);

            nav.appendChild(menuItem);
        }
        this.switchMenu(menus, currentMenu);
    },

    switchMenu: function(menus, toMenuName) {
        var navItems = document.getElementsByClassName('nav')[0].getElementsByTagName('li');
        for (var i = 0; i < navItems.length; i++) {
            var menu = navItems[i];
            menu.className = 'navItem';
            if (menu.getAttribute('name') === toMenuName) {
                menu.className += ' navItemCurrent';
                menu.removeEventListener('click', this.onSignMenuClick);
            } else {
                menu.className += ' navLink';
                menu.addEventListener('click', this.onSignMenuClick);
            }
        }
        this.toPage(toMenuName);
    },

    toPage: function(pageName) {
        for (var i = 0; i < signMenus.length; i++) {
            if (pageName === signMenus[i].name) {
                pages.loadPage(signMenus[i].name, signMenus[i].js);
                break;
            }
        }
    },

    onSignMenuClick: function(event) {
        var pageName = this.getAttribute('name');
        menus.switchMenu(signMenus, pageName);
    }
}

var contextMenu = {
    showMenu: function(element) {
        var ctxMenu = document.getElementById('contextMenu');

        var x = utils.getLeft(element) - (ctxMenu.offsetWidth - element.offsetWidth) / 2;
        var y = utils.getTop(element) + element.offsetHeight + 10;

        ctxMenu.style.top = y + 'px';
        ctxMenu.style.left = x + 'px';
        ctxMenu.style.visibility = 'visible';
    },

    hideMenu: function() {
        var ctxMenu = document.getElementById('contextMenu');
        ctxMenu.style.top = '-1000px';
        ctxMenu.style.left = '-1000px';
        ctxMenu.style.visibility = 'hidden';
    }
}
