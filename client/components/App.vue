<template>
  <div class="container-fluid" id="app">
    To get started, choose a location
    <ul>
      <li v-for="city in cities">
          <router-link :to="{ name: `city`, params: {location: city.name} }">{{city.name | capitalize}}</router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    cities() {
      return this.$store.state.cities
    }
  },
  ready () {},
  attached () {},
  methods: {},
  components: {}
}
</script>



<style>
body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}
</style>
