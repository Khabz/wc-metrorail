<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-info">WC Metrorail Routes</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-6 train-list">
        <div class="card" style="width: 18rem;">
          <ul class="list-group list-group-flush" v-for="route in routes" v-bind:key="route.id">
            <li class="list-group-item">{{route.longName}}</li>
          </ul>
        </div>
      </div>
      <div class="col-6">
        <h2 class="text-center">Right</h2>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "MetroRail",
  data() {
    return {
      routes: []
    }
  },
  mounted() {
    axios.get('https://proserver.gometro.co.za/api/v1/rail/routes')
        .then(response => {
          this.routes = response.data
        })
  },
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
