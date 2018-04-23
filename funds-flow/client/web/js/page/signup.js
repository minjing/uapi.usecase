var signupPage = {
    name: 'signup',

    onLoad: function() {
        loader.css('css/page/sign.css');
    },

    onInit: function() {
        switchMenu(signMenus, 'signup');

        var main = document.getElementById('main');
        main.innerHTML = '';
        var form = document.createElement('div');
        form.className = 'signForm fade-in';
        form.innerText = 'Signup form';
        main.appendChild(form);
    }
};

pages.register(signupPage);
