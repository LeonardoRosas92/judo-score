<template>
  <main class="text-center flex flex-col justify-evenly items-center gap-y-0.5 px-1 py-1">
    <div>
      <p class="text-2xl block font-bold lg:text-4xl xl:text-5xl  2xl:text-6xl">Puntuación</p>
    </div>
    <div class="w-full grid  justify-items-center gap-1 grid-cols-1 md:grid-cols-2">
        <PlayerScore />
        <PlayerScore isAzul/>
    </div>
    <div class="w-full flex justify-evenly">
        <div class="form-check flex items-center">
            <input class="form-check-input appearance-none rounded-full h-4 w-4 2xl:h-6 2xl:w-6 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" v-model="seconds" value=120 checked :disabled=isDisable>
            <label class="form-check-label inline-block text-gray-800 text-md lg:text-2xl xl:text-3xl 2xl:text-5xl" for="flexRadioDefault1">
                Infantil
            </label>
        </div>
        <div class="form-check flex items-center">
            <input class="form-check-input appearance-none rounded-full h-4 w-4 2xl:h-6 2xl:w-6 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="seconds" value=180 :disabled=isDisable>
            <label class="form-check-label inline-block text-gray-800 text-md lg:text-2xl xl:text-3xl 2xl:text-5xl" for="flexRadioDefault2">
                Sub-15
            </label>
        </div>
        <div class="form-check flex items-center">
            <input class="form-check-input appearance-none rounded-full h-4 w-4 2xl:h-6 2xl:w-6 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" v-model="seconds" value=240 :disabled=isDisable>
            <label class="form-check-label inline-block text-gray-800 text-md lg:text-2xl xl:text-3xl 2xl:text-5xl" for="flexRadioDefault2">
                Mayores
            </label>
        </div>
        </div>
    <div class="w-full grid grid-cols-1 md:grid-cols-12 place-items-center gap-y-1 gap-x-1">
        <TimerComponent title="Osaekomi" isOsaekomi class="order-1 md:col-span-3 md:order-1"/>
        <TimerComponent title="Tiempo" isTimer class="order-2 md:col-span-6 md:order-2 " @disableSelect="disableSelect"/>
        <TimerComponent title="Osaekomi" isOsaekomi isAzul class="order-3 md:col-span-3 md:order-3"/>
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
    height: calc(100% - 40px)
}


@media (min-width: 768px) {
    main {
        height: calc(100% - 60px)
    }
}
@media (min-width: 768px) {
    main {
        height: calc(100% - 80px)
    }
}
@media (min-width: 1250px) {
    main {
        height: calc(100% - 90px)
    }
}
</style>