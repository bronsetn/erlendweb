import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// Tutorial used to set up multilanguage support: https://www.youtube.com/watch?v=CFGjn3yKMNc
// Documentation: https://kazupon.github.io/vue-i18n/started.html

function loadLocaleMessages() {
    const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    const messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    return messages
}

export default new VueI18n({
    locale: 'no',
    fallbackLocale: 'no',
    messages: loadLocaleMessages()
})