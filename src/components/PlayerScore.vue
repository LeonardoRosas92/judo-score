<template>
  <div 
    class="rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border-2 border-black w-full py-1 md:py-0.5 font-bold drop-shadow-lg shadow-black " 
    :class="[isAzul ? 'bg-blue-900 text-white' : 'bg-white text-blue-600']">
    <!-- <h1 class="block text-xl font-bold lg:text-5xl xl:text-6xl 2xl:text-6xl ">
        Competidor <span v-if="isAzul">Azul</span><span v-if="!isAzul">Blanco</span>
    </h1> -->
    <div class="flex justify-evenly py-5">
      <div>
        <p class="text-xl lg:text-3xl xl:text-6xl 2xl:text-7xl tracking-wide">Ippon</p>
        <div class="contenedor">
            <ScrollPicker :options="optionsIppon" v-model="ScoreIppon" 
            class="score"
        />
        </div>
      </div>
      <div>
        <p class="text-xl lg:text-3xl xl:text-6xl 2xl:text-7xl tracking-wide">Wazari</p>
        <div class="contenedor">
            <ScrollPicker :options="optionsWazari" v-model="ScoreWazari" 
            class="score"
            />
        </div>
      </div>
      <div>
        <p class="text-xl lg:text-3xl xl:text-6xl 2xl:text-7xl tracking-wide">Shido</p>
        <div class="contenedor">
            <ScrollPicker :options="optionsPenalti" v-model="ScoreShido" 
            class="score"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollPicker from 'vue3-scroll-picker';
import { mapGetters,mapActions } from 'vuex';
export default {
    components:{ScrollPicker},
    props:{
        isAzul:{
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            optionsIppon : [[{label: "0",value: 0},{label: "1",value: 1}]],
            optionsWazari : [[{label: "0",value: 0},{label: "1",value: 1},{label: "2",value: 2}]],
            optionsPenalti : [[{label: "0",value: 0},{label: "1",value: 1},{label: "2",value: 2},{label: "3",value: 3}]],
            ScoreIppon: [],
            ScoreWazari: [],
            ScoreShido: [],
        }
    },
    methods:{
        ...mapActions(['setIpponAzul','setWazariAzul','setShidoAzul','setIpponBlanco','setWazariBlanco','setShidoBlanco','resetTimer','setTimer','setTiempoPlay','setOsaekomiAzulPlay','setOsaekomiBlancoPlay','setTimempoSeleccionado','decrementTimer','incrementTimer','setOsaekomiAzul','decrementOzaekomiAzul','setOsaekomiBlanco','decrementOzaekomiBlanco']),
    },
    computed:{
        ...mapGetters(['GET_IPPON_AZUL','GET_WAZARI_AZUL','GET_SHIDO_AZUL','GET_IPPON_BLANCO','GET_WAZARI_BLANCO','GET_SHIDO_BLANCO','GET_TIEMPO_SELECCIONADO','GET_TIMER','GET_TIMER_PLAY','GET_OSAEKOMI_AZUL','GET_OSAEKOMI_AZUL_PLAY','GET_OSAEKOMI_BLANCO_PLAY','GET_OSAEKOMI_BLANCO']),
    },
    watch:{
        ScoreIppon(ippon){
            this.isAzul ? this.setIpponAzul(ippon[0]) : this.setIpponBlanco(ippon[0]);
        },
        ScoreWazari(wazari){
            this.isAzul ? this.setWazariAzul(wazari[0]) : this.setWazariBlanco(wazari[0]);
        },
        ScoreShido(shido){
            this.isAzul ? this.setShidoAzul(shido[0]) : this.setShidoBlanco(shido[0]);
        },
        GET_IPPON_AZUL(ippon){
            if (this.isAzul) {
                this.ScoreIppon[0] = ippon
            }
        },
        GET_WAZARI_AZUL(wazari){
            if (this.isAzul) {
                this.ScoreWazari[0] = wazari
            }
        },
        GET_IPPON_BLANCO(ippon){
            if (!this.isAzul) {
                this.ScoreIppon[0] = ippon
            }
        },
        GET_WAZARI_BLANCO(wazari){
            if (!this.isAzul) {
                this.ScoreWazari[0] = wazari
            }
        },
        GET_SHIDO_AZUL(shido){
            if(this.isAzul){
                this.ScoreShido[0] = shido
            }
        },
        GET_SHIDO_BLANCO(shido){
            if(!this.isAzul){
                this.ScoreShido[0] = shido
            }
        }
    }
};
</script>

<style lang="scss">
.pad-bottom-overlay,.pad-top-overlay {
    display: none;
    
}

.contenedor{
    height: 40px;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    .score{
        position: absolute;
        top: -55px;
    }
    .row-option-custom{
        font-size:40px;
    }
}


@media (min-width: 768px) {
    .active-row-option{
        font-size: 70px !important;
    }
    .contenedor{
        height: 60px;
        .score{
            position: absolute;
            top: -45px;
        }
        .row-option-custom{
            font-size:50px;
        }
    }
}

@media (min-width: 1024px) {
    .active-row-option{
        font-size: 160px !important;
    }
    .column-container{
        height: 230px;
    }
    .contenedor{
        height: 160px;
        .score{
            position: absolute;
            top: -45px;
        }
        .row-option-custom{
            font-size:170px;
        }
    }
}

@media (min-width: 1500px) {
    .active-row-option{
        font-size: 100px !important;
        height: 350px;
    }
    .column-container{
        height: 220px;
    }
    .contenedor{
        height: 200px;
        .score{
            position: absolute;
            top: -55spx;
        }
        .row-option-custom{
            font-size:180px;
        }
    }
}
</style>