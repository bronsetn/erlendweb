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
                primary: colors.grey.lighten4,
                secondary: colors.grey.lighten4,
                tertiary: '#010B14',
                // For buttons and such
                accent: colors.amber.darken4, // #263238
                // For a tags and links
                anchor: '#CC7700',
                // Computed propery in app main checks this value
                background: '#ECF5FE',

            },
            // https://coolors.co/010b14-fdfffc-2ec4b6-e71d36-ff9f1c
            dark: {
                primary: colors.shades.black, // #263238
                secondary: '#010B14',
                tertiary: '#FDFFFC',
                // For buttons and such
                accent: colors.amber.accent2,
                // For a tags and links
                anchor: '#FF9F1C',
                // Computed propery in ap main checks this value
                background: colors.shades.black,

            },
        },
    },
})
export default vuetify