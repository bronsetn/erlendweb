import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'


Vue.use(Vuetify);

// Color Palette:
// https: //vuetifyjs.com/en/styles/colors/#material-colors
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
                primary: colors.purple.lighten5, // #F3E5F5
                secondary: colors.purple.lighten2, // #7B1FA2
                tertiary:  colors.purple.darken4,
              // For buttons and such
              accent: colors.amber.darken3,
              // For a tags and links
              anchor: colors.amber.darken2,
            },
            dark: {
                primary: colors.purple.darken4, // #4A148C
                secondary: colors.purple.darken2, // #7B1FA2
                tertiary: colors.purple.lighten5,
                // For buttons and such
                accent: colors.amber.accent2,
                // For a tags and links
                anchor: colors.amber.lighten2,
            },
        },
    },
})
export default vuetify