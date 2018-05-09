var signinPage = {
    name: 'signin',

    onLoad: function() {
        loader.css('css/page/sign.css');
    },

    onInit: function() {
        menus.switchMenu(signMenus, 'signin');

        var form = document.createElement('div');
        form.innerText = 'SignIn Form';
        utils.showNewContent(form, 'signForm');
    }
};

pages.register(signinPage);
