<template>
  <fullscreen v-model="fullscreen">
    <div class="h-screen w-screen relative">
      <button @click="toggle" class="absolute top-2 left-0 lg:top-5 xl:top-5 2xl:top-8" >
        <span v-if="!fullscreen" class="material-icons fullscreen">fullscreen</span>
        <span v-else class="material-icons fullscreen">fullscreen_exit</span>
      </button>
      <NavBar />
      <MainContent />
      
    </div>
  </fullscreen>
</template>

<script>
import NavBar from "../components/NavHeader.vue";
import MainContent from "../components/MainContent.vue";
export default {
  name: "HomeView",
  components: { NavBar, MainContent },
  data() {
    return {
      fullscreen: false
    }
  },
  methods: {
    toggle () {
      this.fullscreen = !this.fullscreen
    },
  }
};
</script>

