import Vue from "vue";
import Vuetify from "vuetify/lib";
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify);
 
export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: "#1aff1a",
            primary_whiten: "#475282",
            background: "#F7F9FC",
            white: "#FFFFFF",
            white_darken: "#F9F9F9",
            grey: "#95989A",
            grey_whiten: "#C9C9C9",
            orange: "#FF8C69",
            pink: "#ED5199",
            purple: "#FF5A87",
            red: "#ff0000"
          }
        }
    }
});
