var signupPage = {
    name: 'signup',
    css: 'fragment/sign.css',
    template: 'fragment/signup/signup.html',

    onLoad: function() {
        loader.css(signupPage.css);
    },

    onInit: function() {
        // menus.switchMenu(signMenus, this.name);
        utils.loadTemplate(this.template, this.render)
    },

    render: function() {
        var tempLoader = document.getElementById('templateLoader');
        var root = tempLoader.contentDocument.getElementById('root');
        var render = template.compile(root.innerHTML);
        var html = render({});
        utils.showNewContent(html, 'signForm', function() {
            i18n.loadLanguage(context.currentLanguage);
        });
    }
};

pages.register(signupPage);
