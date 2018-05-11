var languages = [{
    name: 'en-US',
    i18key: 'shortcut.lan.en_US',
    img: 'img/country/us.png',
    lng: 'en_US'
},{
    name: 'zh-CN',
    i18key: 'shortcut.lan.zh_CN',
    img: 'img/country/cn.png',
    lng: 'zh_CN'
}];

// function updateContent() {
//     localize = locI18next.init(i18next);
//     localize('.menu');
//     localize('.main');
// }

var i18n = {
    defaultLanguage: languages[0],

    loadLanguage: function(language) {
        if (language == null) {
            language = i18n.defaultLanguage;
        }
        i18next.use(i18nextXHRBackend).init({
            lng: language.lng,
            fallbackLng: this.defaultLanguage.lng,
            backend: {
                loadPath: '/locales/{{lng}}/{{ns}}.json'
            }
        }, function(err, t) {
            i18n.updateContent();
        });
    },

    updateContent: function() {
        localize = locI18next.init(i18next);
        localize('.menu');
        localize('.main');
    }
}
