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
                primary: '#BDC9EF',
                secondary: colors.shades.white,
                tertiary: '#080E21',
                // For buttons and such
                accent: colors.amber.darken4,
                // For a tags and links, not usable inline
                anchor: colors.amber.darken4,
                // Computed propery in app main checks this value
                background: '#BDC9EF',

            },
            // https://coolors.co/010b14-fdfffc-2ec4b6-e71d36-ff9f1c
            dark: {
                primary: '#040711',
                secondary: '#080E21',
                tertiary: '#FDFFFC',
                // For buttons and such
                accent: colors.amber.lighten2,
                // For a tags and links, not usable inline
                anchor: colors.amber.lighten2,
                // Computed propery in ap main checks this value
                background: '#040711',

            },
        },
    },
})
export default vuetify