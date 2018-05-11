var signinPage = {
    name: 'signin',
    template: 'fragment/signin.html',

    onLoad: function() {
        loader.css('css/page/sign.css');
    },

    onInit: function() {
        utils.loadTemplate(this.template, this.render)
    },

    render: function() {
        var tempLoader = document.getElementById('templateLoader');
        var root = tempLoader.contentDocument.getElementById('root');
        var render = template.compile(root.innerHTML);
        var html = render({});
        utils.showNewContent(html, 'signForm', function() {
            var btnReset = document.getElementById('reset');
            btnReset.addEventListener('click', signinPage.onReset);
            var btnSignup = document.getElementById('toSignUp');
            btnSignup.addEventListener('click', function() {
                menus.switchMenu(signMenus, 'signup');
            });
            var btnSubmit = document.getElementById('submit');
            btnSubmit.addEventListener('click', signinPage.onSubmit);

            i18n.loadLanguage(context.currentLanguage);
        });
    },

    onReset: function() {
        var username = document.getElementById('username');
        username.value = '';
        var pwd = document.getElementById('pwd');
        pwd.value = '';
    },

    onSubmit: function() {
        var inUsername = document.getElementById('username').value;
        var inPwd = document.getElementById('pwd').value;

        var req = utils.request();
        req.onreadystatechange = function() {
            if (req.readyState == 4) {
                alert("success!");
            }
        }
        req.open('post', context.apiPath, true);
        req.send('user=' + inUsername + '&pwd=' + inPwd);
    }
};

pages.register(signinPage);
