import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

// Palette:
// https://www.canva.com/colors/color-palettes/lake-view/

const vuetify = new Vuetify({
    theme: {
        themes: {
            font: {
                family: 'Libre Baskerville'
            },
            light: {
                // Crimson
                primary: '#710117',
                // Beige
                secondary: '#ECD5BB',
                // Blue grey
                anchor: '#54627B',
            },
        },
    },
})

export default vuetify