<template>
  <div class="">
    <Navbar />
    <div class="bg-white half-map">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div class="half-map-full mt-4">
              <RouteStops
                class="map-canvas h-100vh"
                :route_stops="this.route_stops"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="scrollbar scroll_dark h-100vh">
              <div class="property-search-field bg-white">
                <div class="property-item property-col-list mt-4">
                  <div class="card train-list">
                    <h4 class="card-header text-info">Stop Routes</h4>
                    <ul class="list-group list-group-flush">
                      <li
                        class="list-group-item"
                        v-for="(route, index) in routes"
                        v-bind:key="index"
                        @click="selectRoute(route.id)"
                      >
                        {{ route.longName }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RouteStops from "./RouteStops";
import Navbar from './Navbar'

export default {
  name: "MetroRail",
  data() {
    return {
      routes: [],
      route_stops: []
    };
  },
  components: {
    RouteStops,
    Navbar
  },
  methods: {
    selectRoute(val) {
      axios
        .get(
          "https://proserver.gometro.co.za/api/v1/rail/routes/" + val + "/stops"
        )
        .then(response => {
          this.route_stops = response.data;
        });
    }
  },
  mounted() {
    axios
      .get("https://proserver.gometro.co.za/api/v1/rail/routes")
      .then(response => {
        this.routes = response.data;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.train-list {
  overflow-y: scroll;
  height: 93vh;
  li {
    &:hover {
      background-color: darkgrey;
    }
  }
}
</style>
