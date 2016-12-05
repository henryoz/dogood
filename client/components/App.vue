<template>
  <div class="container-fluid" id="app">
    To get started, choose a location
    <ul>
      <router-link :to="{ name: `home` }">Start Over</router-link>
      <li v-for="city in cities">
          <router-link :to="{ name: `city`, params: {location: city.name} }">{{city.name | capitalize}}</router-link>
      </li>
    </ul>

    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
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
.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
  transform: translateX(-100%);
}
.slide-fade-enter {
  transform: translateX(100%);
}
</style>
