<template>
    <div class="row map">
        <l-map :zoom="zoom" :center="center" style="height: 95vh">
            <l-tile-layer :url="url" 
             :attribution="attribution"></l-tile-layer>
            <l-marker 
                v-for="(route_stop, index) in route_stops" :key="index"
                :lat-lng="latLng(route_stop.lat, route_stop.lon)">
            </l-marker>
        </l-map>
    </div>
</template>

<script>

import L from 'leaflet';
//import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

export default {
    name: 'RouteStops',
    props: {
        route_stops: Array
    },
    data() {
        return {
            zoom: 13,
            center: L.latLng(-34.0000, 20.0000),
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            url: 'https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=7190c84edff8484ca26ba9d06421b0ea',
            marker: L.latLng(-34.0000, 20.0000)
        }
    },
    methods: {
        latLng: function(lat, lng) {
            return L.latLng(lat, lng)
        }
    },
}
</script>

<style lang="scss" scoped>
    .map {
        height: 95vh
    }
<style>