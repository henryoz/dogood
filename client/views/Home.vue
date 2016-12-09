<template>
  <div class="page">
    <p>
      Choose a city
    </p>
    <li v-for="city in cities">
        <router-link :to="{ name: `city`, params: {location: city.name} }">{{city.name | capitalize}}</router-link>
    </li>
  </div>
</template>

<script>
export default {
  computed: {
    cities() {
      return this.$store.state.cities
    }
  },
}
</script>
