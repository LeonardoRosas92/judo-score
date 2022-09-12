<template>
  <div class="h-screen bg-gray-400">
    <NavBar />
    <MainContent />
  </div>
</template>

<script>
import NavBar from "../components/NavHeader.vue";
import MainContent from "../components/MainContent.vue";
export default {
  name: "HomeView",
  components: { NavBar, MainContent },
};
</script>
