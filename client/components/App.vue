<template>
  <div class="container-fluid" id="app">

    To get started, choose a location
    <ul>
      <router-link :to="{ name: `home` }">Start Over</router-link>
    </ul>

    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>



<style>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  transform: translateX(-100%);
}
.slide-fade-enter {
  transform: translateX(100%);
}
</style>
