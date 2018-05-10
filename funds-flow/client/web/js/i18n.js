function updateContent() {
    localize = locI18next.init(i18next);
    localize('.menu');
    // localize('.contextMenu');
}

var i18n = {
    loadLanguage: function(language) {
        i18next.use(i18nextXHRBackend).init({
            lng: language,
            fallbackLng: 'en',
            backend: {
                loadPath: '/locales/{{lng}}/{{ns}}.json'
            }
        }, function(err, t) {
            updateContent();
        });
    }
}
