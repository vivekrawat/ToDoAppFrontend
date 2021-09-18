import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
              secondary: '#00BFFF'
          },
          dark: {
              secondary: '#454545'
          }
        }
      }
});
