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
                primary: '#710117',
                secondary: '#54627B',
                anchor: '#ECD5BB',
            },
        },
    },
})

export default vuetify