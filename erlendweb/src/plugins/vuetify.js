import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

// Color Palette:
// https: //vuetifyjs.com/en/styles/colors/#material-colors
import colors from 'vuetify/lib/util/colors'

const vuetify = new Vuetify({
    theme: {
        options: {
            customProperties: true
        },

        dark: true,

        themes: {
            font: {
                family: 'Roboto'
            },
            light: {
                primary: colors.grey.lighten4, // #F5F5F5
                secondary: colors.blueGrey.lighten2,
                tertiary: colors.blueGrey.darken4,
                // For buttons and such
                accent: colors.amber.darken4, // #263238
                // For a tags and links
                anchor: colors.amber.darken4,
                // Computed propery in ap main checks this value
                background: colors.blueGrey.lighten4,

            },
            dark: {
                primary: colors.blueGrey.darken4, // #263238
                secondary: colors.blueGrey.darken2,
                tertiary: colors.blue.lighten5, // #ECEFF1
                // For buttons and such
                accent: colors.amber.accent2,
                // For a tags and links
                anchor: colors.amber.lighten2,
                // Computed propery in ap main checks this value
                background: colors.blueGrey.accent4,

            },
        },
    },
})
export default vuetify