<template>
  <main class="text-center mx-auto flex flex-col gap-1 items-center justify-evenly lg:justify-evenly">
    <div>
      <p class="text-2xl block font-bold lg:text-5xl">Puntuación</p>
    </div>
    <div class="w-full grid  justify-items-center gap-1 lg:gap-3 transition-[width] duration-150 ease-in-out grid-cols-1 md:grid-cols-2">
        <PlayerScore />
        <PlayerScore isAzul/>
    </div>
    <div class="grid grid-cols-3">
        <div class="form-check">
            <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="seconds" value=120 checked :disabled=isDisable>
            <label class="form-check-label inline-block text-gray-800 text-xs" for="flexRadioDefault1">
                Infantil
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="seconds" value=180 :disabled=isDisable>
            <label class="form-check-label inline-block text-gray-800 text-xs" for="flexRadioDefault2">
                Juvenil
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="seconds" value=240 :disabled=isDisable>
            <label class="form-check-label inline-block text-gray-800 text-xs" for="flexRadioDefault2">
                Mayores
            </label>
        </div>
        </div>
    <div class="w-full grid grid-cols-1 md:grid-cols-12 justify-items-center gap-1">
        <TimerComponent title="Osaekomi" isOsaekomi class="col-span-3"/>
        <TimerComponent title="Tiempo" isTimer class="col-span-6" @disableSelect="disableSelect"/>
        <TimerComponent title="Osaekomi" isOsaekomi isAzul class="col-span-3"/>
    </div>
  </main>
</template>

<script>
import PlayerScore from '@/components/PlayerScore.vue';
import TimerComponent from '@/components/TimerComponent.vue';
import { mapGetters,mapActions } from 'vuex';
export default {
    components: {PlayerScore,TimerComponent},
    data(){
        return{
            seconds: 120,
            isDisable: false,
            winnerAzul: false,
            winnerBlanco: false,
            winner: false
        }
    },
    methods:{
        ...mapActions(['setTimempoSeleccionado']),
        disableSelect(){
            this.isDisable = !this.isDisable;
        }
    },
    mounted(){
        this.setTimempoSeleccionado(parseInt(this.seconds))
    },
    computed:{
        ...mapGetters([]),
    },
    watch:{
        seconds(){
            this.setTimempoSeleccionado(parseInt(this.seconds))
        }
    }
};
</script>

<style lang="scss">
main {
    background-image: url("../assets/Judo.webp");
    background-size: cover;
    background-size: 130% 100%;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%
}
</style>