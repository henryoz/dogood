<template>
  <div>
    <h1>{{ $route.params.location | capitalize }}</h1>
    <p>
      {{ city.information }}
    </p>
    <div>
      <h2>How do you want to help out?</h2>
    </div>
    <div v-for="item in city.items">
      <h3>{{item.desc}}</h3>
      <ul>
        <li v-for="link in item.links">
          <a v-bind:href="link.url" target="_blank">{{link.name}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    city() {
      const cities = this.$store.state.cities
      const match = x => { if (x.name === this.$route.params.location) {
        return x
      } }
      const filtered = cities.filter(match)
      return filtered[0]
    }
  },
}
</script>
