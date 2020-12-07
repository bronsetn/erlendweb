import Vue from 'vue';
import Vuetify from 'vuetify/lib';


Vue.use(Vuetify);

// Color Palette:
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
                // whiteish
                primary: '#fdfefc',
                // Prune red
                secondary: '#e71d36',
                // Orange
                anchor: '#F28701',
                // whiteish
                accent: '#fdfefc'
            },
            dark: {
                // Eerie black aka dark blue
                primary: '#011627',
                // Prune red
                secondary: '#fdfefc',
                // Orange
                anchor: '#f29e35',
                // Maximum blue green  
                accent: '#2ec4b6',


            },
        },
    },
})

export default vuetify