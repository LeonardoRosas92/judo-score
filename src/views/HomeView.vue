<template>
  <fullscreen v-model="fullscreen">
    <div class="h-screen w-screen bg-gray-400 relative">
      <button @click="toggle" class="absolute top-2 left-0 lg:top-5" >
        <span class="material-icons fullscreen">fullscreen</span>
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

<style lang="scss" scoped>
/* .fullscreen{
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
} */
</style>
