import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

// Palette:
// https://www.canva.com/colors/color-palettes/lake-view/

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
                // Maximum blue green
                anchor: '#2ec4b6',
            },
        },
    },
})

export default vuetify