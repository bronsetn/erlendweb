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
                accent: colors.purple.darken4, // #4A148C
                tertiary: colors.yellow.lighten1, //#FFD54F
                anchor: colors.amber.accent3, //#FF6F00
            },
            dark: {
                primary: colors.purple.darken4, // #4A148C
                secondary: colors.purple.darken2, // #7B1FA2
                accent: colors.purple.lighten5, // #F3E5F5
                tertiary: colors.amber.accent3, //#FF6F00
                anchor: colors.yellow.lighten1, //#FFD54F
            },
        },
    },
})
export default vuetify