var signMenus = [{
    name: 'signin',
    i18nkey: 'menu.signin',
    js: 'signin.js'
}, {
    name: 'signup',
    i18nkey: 'menu.signup',
    js: 'signup.js'
}]

var menus = {
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
                menu.removeEventListener('click', this.onMenuClick);
            } else {
                menu.className += ' navLink';
                menu.addEventListener('click', this.onMenuClick);
            }
        }
    },

    onMenuClick: function(event) {
        var basePath = 'js/page/';
        var pageName = this.getAttribute('name');
        for (var i = 0; i < signMenus.length; i++) {
            if (pageName === signMenus[i].name) {
                loader.js(basePath + signMenus[i].js, function() {
                    pages.load(signMenus[i].name);
                });
                break;
            }
        }
    }
}
