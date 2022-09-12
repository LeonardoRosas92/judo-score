<template>
  <main class="text-center mx-auto flex flex-col gap-5 items-center">
    <div class="mt-1">
      <p class="text-3xl block">Score</p>
    </div>
    <PlayerScore color="Azul" />
    <PlayerScore color="Blanco" />
  </main>
</template>

<script>
import PlayerScore from '@/components/PlayerScore.vue';
export default {
    components: {PlayerScore}
};
</script>

<style lang="scss">
main {
  background-image: url("../assets/Judo.webp");
  background-size: cover;
  background-size: 130% 100%;
  background-position: center;
  background-repeat: no-repeat;
  height: calc(100vh - 10%);
}
</style>