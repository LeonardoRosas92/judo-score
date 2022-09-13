<template>
  <main class="text-center mx-auto flex flex-col gap-1 items-center">
    <div class="mt-1">
      <p class="text-3xl block">Score</p>
    </div>
    <div class="w-full flex flex-col items-center gap-1 px-1 md:flex-row">
        <PlayerScore color="Azul" />
        <PlayerScore color="Blanco" />
    </div>
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
  height: calc(100vh - 11%);
}
</style>