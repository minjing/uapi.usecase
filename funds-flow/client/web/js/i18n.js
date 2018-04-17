i18next.use(i18nextXHRBackend).init({
    lng: 'en',
    fallbackLng: 'en',
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
}, function(err, t) {
    updateContent();
});

function updateContent() {
    localize = locI18next.init(i18next);
    localize('.menu');
}
