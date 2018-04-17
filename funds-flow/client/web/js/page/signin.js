var signinPage = {
    name: 'signin',

    onLoad: function() {
        loader.css('css/page/sign.css');
    },

    onInit: function() {
        switchMenu(signMenus, 'signin');

        var main = document.getElementById('main');
        main.innerHTML = '';
        var form = document.createElement('div');
        form.className = 'box';
        form.innerText = 'Signin Form';
        main.appendChild(form);
    }
};

pages.register(signinPage);
