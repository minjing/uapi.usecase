var signMenus = [{
    name: 'signin',
    page: 'signin',
    i18nkey: 'menu.signin'
}, {
    name: 'signup',
    page: 'signup',
    i18nkey: 'menu.signup'
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
        // var navItems = document.getElementsByClassName('navItem');
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
        if (pageName === 'signin') {
            loader.js(basePath + 'signin.js', function() {
                pages.load('signin');
            });
        } else if (pageName === 'signup') {
            loader.js(basePath + 'signup.js', function() {
                pages.load('signup');
            });
        }
    }
}

// function renderMenu(menus, currentMenu) {
//     var nav = document.getElementsByClassName('nav')[0];
//     nav.innerHTML = '';
//     for (var i = 0; i < menus.length; i++) {
//         var menuItem = document.createElement('li');
//         var menu = menus[i];
//         menuItem.setAttribute('name', menu.name);
//         menuItem.setAttribute('data-i18n', menu.i18nkey);
//
//         nav.appendChild(menuItem);
//     }
//     switchMenu(menus, currentMenu);
// }
//
// function switchMenu(menus, toMenuName) {
//     var navItems = document.getElementsByClassName('nav')[0].getElementsByTagName('li');
//     // var navItems = document.getElementsByClassName('navItem');
//     for (var i = 0; i < navItems.length; i++) {
//         var menu = navItems[i];
//         menu.className = 'navItem';
//         if (menu.getAttribute('name') === toMenuName) {
//             menu.className += ' navItemCurrent';
//             menu.removeEventListener('click', onMenuClick);
//         } else {
//             menu.className += ' navLink';
//             menu.addEventListener('click', onMenuClick);
//         }
//     }
// }
//
// function onMenuClick(event) {
//     var basePath = 'js/page/';
//     var pageName = this.getAttribute('name');
//     if (pageName === 'signin') {
//         loader.js(basePath + 'signin.js', function() {
//             pages.load('signin');
//         });
//     } else if (pageName === 'signup') {
//         loader.js(basePath + 'signup.js', function() {
//             pages.load('signup');
//         });
//     }
// }
