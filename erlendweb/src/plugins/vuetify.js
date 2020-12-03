import Vue from 'vue';
import Vuetify from 'vuetify/lib';


Vue.use(Vuetify);

// Color Palette:
const vuetify = new Vuetify({
    theme: {
        themes: {
            font: {
                family: 'Roboto'
            },
            light: {
                // Eerie black aka dark blue
                primary: '#011627',
                // Prune red
                secondary: '#e71d36',
                // Orange
                anchor: '#F28701',
                // Maximum blue green  
                accent: '#2ec4b6'
            },
            dark: {
                primary: '#e71d36',
                secondary: '#E4A346',
                anchor: '#2ec4b6',
            },
        },
    },
})

export default vuetify