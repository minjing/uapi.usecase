var signup = {
    onLoad: function() {
        var navItems = document.getElementsByClassName('navItem');
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].className = 'navItem';
            if (navItems[i].getAttribute('name') === 'signup') {
                navItems[i].className += ' navItemCurrent';
            }
        }
    }
}
