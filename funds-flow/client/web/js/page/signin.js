var signinPage = {
    name: 'signin',
    template: 'fragment/signin.html',

    onLoad: function() {
        loader.css('css/page/sign.css');
    },

    onInit: function() {
        menus.switchMenu(signMenus, 'signin');
        utils.loadTemplate(this.template, this.render)
    },

    render: function() {
        var tempLoader = document.getElementById('templateLoader');
        var root = tempLoader.contentDocument.getElementById('root');
        var render = template.compile(root.innerHTML);
        var html = render({});
        utils.showNewContent(html, 'signForm');
    }
};

pages.register(signinPage);
