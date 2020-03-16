<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-info">WC Metrorail Routes</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <div class="card train-list">
          <h4 class="card-header text-info">Metrorail Routes</h4>
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
      <div class="col-9">
        <div class="card">
          <div class="card-header">
            <h4 class="text-info">Routes Stops</h4>
          </div>
          <RouteStops class="card-body" :route_stops="this.route_stops" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import RouteStops from './RouteStops'

export default {
  name: "MetroRail",
  data() {
    return {
      routes: [],
      route_stops: []
    };
  },
  components: {
    RouteStops
  },
  methods:{
    selectRoute(val) {
      axios.get('https://proserver.gometro.co.za/api/v1/rail/routes/'+ val +'/stops')
          .then(response => {
            this.route_stops = response.data
          })
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
  height: 95vh;
  li {
    &:hover {
      background-color: darkgrey;
    }
  }
}
</style>
