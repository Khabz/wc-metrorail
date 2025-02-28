import Vue from 'vue'
import App from './App.vue'
import { Icon } from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

//import 'leaflet/dist/leaflet.css';
import './assets/scss/main.scss'

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')