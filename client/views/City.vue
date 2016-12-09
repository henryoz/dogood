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
      <router-link :to="{ name: 'topic', params: { city, topic: item.topic } }">{{ item.topic }}</router-link>
      <!-- TODO: for each item topic, set up a new router link to go to the next level. Probably easiest to add a topic id and get to it that way -->
      <!-- TODO: this will actually be EASIER to manage with a working back end and solid crud. Sigh. -->
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
