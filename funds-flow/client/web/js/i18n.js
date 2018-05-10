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

var defaultLanguage = languages[0];

function updateContent() {
    localize = locI18next.init(i18next);
    localize('.menu');
    // localize('.contextMenu');
}

var i18n = {
    loadLanguage: function(language) {
        i18next.use(i18nextXHRBackend).init({
            lng: language,
            fallbackLng: defaultLanguage.lng,
            backend: {
                loadPath: '/locales/{{lng}}/{{ns}}.json'
            }
        }, function(err, t) {
            updateContent();
        });
    }
}
