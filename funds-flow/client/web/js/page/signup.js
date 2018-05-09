var signupPage = {
    name: 'signup',

    onLoad: function() {
        loader.css('css/page/sign.css');
    },

    onInit: function() {
        menus.switchMenu(signMenus, 'signup');

        var form = document.createElement('div');
        form.innerText = 'SignUp Form';
        utils.showNewContent(form, 'signForm');
    }
};

pages.register(signupPage);
