<template>
  <div 
  class="rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border-2 border-black w-full flex flex-col justify-center lg:py-2" 
  :class="[isAzul ? 'bg-blue-900 text-white' : 'bg-white-900 text-blue-600']">
    <h1 :class="[isOsaekomi ? 'text-xl lg:text-3xl xl:text-5xl 2xl:text-7xl':'text-3xl lg:text-6xl xl:text-7xl 2xl:text-9xl']">{{title}}</h1>
    <div class="flex flex-row-reverse justify-center gap-x-2">
        <h2 v-if="isOsaekomi" :class="[isOsaekomi ? 'text-3xl lg:text-5xl 2xl:text-8xl':'']">{{formatOsaekomi}}</h2>
        <h2 v-else class="text-6xl lg:text-8xl xl:text-8xl font-bold">{{formatTime}}</h2>
        <div v-if="showButtons" class="flex items-center">
            <button v-if="showPlay" class="flex justify-center items-center p-1" @click="play">
                <span class="material-icons" :class="[isOsaekomi ? '2xl:text-4xl' : 'text-4xl lg:text-5xl 2xl:text-7xl']" >play_circle</span>
            </button>
            <button v-if="showPause" class="flex justify-center items-center p-1" @click="pause">
                <span class="material-icons" :class="[isOsaekomi ? '2xl:text-4xl' : 'text-4xl lg:text-5xl 2xl:text-7xl']">pause_circle</span>
            </button>
            <button v-if="showRestart" class="flex justify-center items-center p-1" @click="restart">
                <span class="material-icons" :class="[isOsaekomi ? '2xl:text-4xl' : 'text-4xl lg:text-5xl 2xl:text-7xl']">replay_circle_filled</span>
            </button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    props:{
        title:{
            type: String,
            required: true
        },
        isTimer:{
            type: Boolean,
            default: false
        },
        isOsaekomi:{
            type: Boolean,
            default: false
        },
        isAzul:{
            type: Boolean,
            default: false
        },
        seconds:{
            type: Number,
            default:0
        }
    },
    data(){
        return{
            time: 0,
            showPlay: true,
            showPause: false,
            showRestart: false,
            interval : null,
            showButtons: true,
            start: false,
        }
    }
    ,
    methods:{
        ...mapActions(['setIpponAzul','setWazariAzul','setShidoAzul','setIpponBlanco','setWazariBlanco','setShidoBlanco','resetTimer','setTimer','setTiempoPlay','setOsaekomiAzulPlay','setOsaekomiBlancoPlay','setTimempoSeleccionado','decrementTimer','incrementTimer','setOsaekomiAzul','decrementOzaekomiAzul','setOsaekomiBlanco','decrementOzaekomiBlanco']),
        //Funcion iniciar Timer
        startTimer(){
            this.start = true;
            this.$emit('disableSelect');
            this.interval = setInterval(this.counterTimer,1000);
        },
        startTimerOsaekomiAzul(){
            this.start = true;
            this.interval = setInterval(this.counterOsaekomiAzul,1000);
        },
        startTimerOsaekomiBlanco(){
            this.start = true;
            this.interval = setInterval(this.counterOsaekomiBlanco,1000);
        },
        counterTimer(){
            console.log(this.GET_TIMER);
            if(this.GET_TIMER_PLAY){
                this.decrementTimer();
                if (this.GET_TIMER === 0) {
                    this.setTiempoPlay(); // FALSE
                    this.showPlay = false;
                    this.showPause = false;
                    this.showRestart = true;
                }
            }else{
                if (this.GET_TIMER === 0 || this.GET_IPPON_AZUL === 1 || this.GET_IPPON_BLANCO === 1) {
                    this.showRestart = true;
                    this.showPlay = false;
                }else{
                    this.showRestart = false;
                    this.showPlay = true;
                }
                this.showPause = false;
            }
        },
        counterOsaekomiAzul(){
            //clearInterval(this.interval);
            if(this.GET_OSAEKOMI_AZUL_PLAY){ //TRUE
                //Timer Osaekomi Azul 
                this.decrementOzaekomiAzul();
                if (this.GET_OSAEKOMI_AZUL === 0){
                    this.GET_OSAEKOMI_AZUL_PLAY ? this.setOsaekomiAzulPlay() : ''; // TRUE -> FALSE
                    this.GET_TIMER_PLAY ? this.setTiempoPlay() : ''; // TRUE -> FALSE
                    this.GET_WAZARI_AZUL === 1 ? this.setWazariAzul(2) : ''; 
                    this.GET_WAZARI_AZUL === 2 ? this.setIpponAzul(1) : '';
                    this.showPlay = false;
                    this.showPause = false;
                    this.showRestart = true;
                }else if(this.GET_OSAEKOMI_AZUL === 10){
                    this.setWazariAzul(1);
                }
            }else{
                this.showPlay = false;
                this.showPause = false;
                this.showRestart = true;
            }
        },
        counterOsaekomiBlanco(){
            //clearInterval(this.interval);
            if(this.GET_OSAEKOMI_BLANCO_PLAY){ //TRUE
                // Timer Osaekomi Blanco
                this.decrementOzaekomiBlanco();
                if (this.GET_OSAEKOMI_BLANCO === 0){
                    this.GET_OSAEKOMI_BLANCO_PLAY ? this.setOsaekomiBlancoPlay() : ''; // TRUE -> FALSE
                    this.GET_TIMER_PLAY ? this.setTiempoPlay() : ''; //TRUE -> FALSE
                    this.GET_WAZARI_BLANCO === 1 ? this.setWazariBlanco(2) : ''; 
                    this.GET_WAZARI_BLANCO === 2 ? this.setIpponBlanco(1) : '';
                    this.showPlay = false;
                    this.showPause = false;
                    this.showRestart = true;
                }else if(this.GET_OSAEKOMI_BLANCO === 10){
                    this.setWazariBlanco(1);
                }
            }else{
                this.showPlay = false;
                this.showPause = false;
                this.showRestart = true;
            }
        },
        //Funcion para Iniciar Timer y para continuar cuando este en Pausa
        play(){
            //Valida si es primera vez que se da play para no ejecutar otro timer
            if(!this.start){
                //Validamos que si el timer es osaekomi
                if(this.isOsaekomi){
                    //Si el timer principal se esta ejectuando, se puede iniciar el osaekomi
                    if (this.GET_TIMER_PLAY) {
                        this.isAzul ? this.startTimerOsaekomiAzul() : this.startTimerOsaekomiBlanco(); 
                        //Modificamos en el state el valor del timer osaekomi a true 
                        this.isAzul ? this.setOsaekomiAzulPlay() : this.setOsaekomiBlancoPlay(); //FALSE - TRUE
                        //Ocultamos los botones de Play y Restart - Mostramos boton de Pausa
                        this.botonesPlay();
                    }
                }else{ //Si es timer normal
                    this.startTimer();
                    //Modificamos en el state el valor del timer principal a true 
                    this.setTiempoPlay(); //FALSE - TRUE
                    //Ocultamos los botones de Play y Restart - Mostramos boton de Pausa
                    this.botonesPlay();
                }
            }else{
                this.setTiempoPlay();
                //Ocultamos los botones de Play y Restart - Mostramos boton de Pausa
                this.botonesPlay();
            }
        },
        botonesPlay(){
            //Ocultamos los botones de Play y Restart - Mostramos boton de Pausa
            this.showPlay = false;
            this.showPause = true;
            this.showRestart = false;
        },
        //Funcion para pausar el timer 
        pause(){
            this.showPause = false;
            //Si es Osaekomi pausa el Timer
            if (this.isOsaekomi) {
                this.showPlay = false;
                this.showRestart = true;
                this.isAzul ? 
                    (this.GET_OSAEKOMI_AZUL_PLAY ? this.setOsaekomiAzulPlay() : '') : // TRUE -> FALSE
                    (this.GET_OSAEKOMI_BLANCO_PLAY ? this.setOsaekomiBlancoPlay() : '') //TRUE -> FALSE
            }else{ //Si no pausa el Timer principal
                this.showPlay = true;
                this.showRestart = false;
                this.GET_TIMER_PLAY ? this.setTiempoPlay() : ''; // TRUE -> FALSE
                //Si hay un timer Osaekomi lo pausamos
                if(this.GET_OSAEKOMI_AZUL_PLAY){
                    this.setOsaekomiAzulPlay(); //FALSE
                }
                if(this.GET_OSAEKOMI_BLANCO_PLAY){
                    this.setOsaekomiBlancoPlay(); //FALSE
                }
            }
        },
        restart(){
            clearInterval(this.interval);
            this.$emit('disableSelect');
            if(this.isOsaekomi){
                this.isAzul ? this.setTimeOsaekomiAzul() : this.setTimeOsaekomiBlanco()
            }else{
                this.resetTimer();
                this.setTiempoPlay()?this.setTiempoPlay():'';
            }
            this.start = false;
            this.showPlay = true;
            this.showPause = false;
            this.showRestart = false;
        },
        setTimeOsaekomiAzul(){
            /* if (this.GET_WAZARI_AZUL === 1) {
                this.setOsaekomiAzul(10);
            }else {
                this.setOsaekomiAzul(20);
            } */
            this.setOsaekomiAzul();
        },
        setTimeOsaekomiBlanco(){
            this.setOsaekomiBlanco();
        },
    },
    unmounted(){
        clearInterval(this.interval)
    },
    computed:{
        ...mapGetters(['GET_IPPON_AZUL','GET_WAZARI_AZUL','GET_SHIDO_AZUL','GET_IPPON_BLANCO','GET_WAZARI_BLANCO','GET_SHIDO_BLANCO','GET_TIEMPO_SELECCIONADO','GET_TIMER','GET_TIMER_PLAY','GET_OSAEKOMI_AZUL','GET_OSAEKOMI_AZUL_PLAY','GET_OSAEKOMI_BLANCO_PLAY','GET_OSAEKOMI_BLANCO']),
        formatOsaekomi(){
            const time = this.isAzul ? this.GET_OSAEKOMI_AZUL : this.GET_OSAEKOMI_BLANCO;
            const sec = time < 10 ? `00:0${time}` : `00:${time}`;
            return sec;
        },
        formatTime(){
            const time = this.GET_TIMER;
            let min = Math.floor(time/60);
            let sec = time%60;
            if (min<10) {
                min = `0${min}`;
            }
            if(sec<10){
                sec= `0${sec}`;
            }
            return `${min}:${sec}`;
        }
    },
    watch:{
        GET_IPPON_AZUL(ippon){
            if (ippon === 1 && this.GET_TIMER_PLAY) {
                this.setTiempoPlay(); // TRUE -> FALSE
            }
        },
        GET_IPPON_BLANCO(ippon){
            if (ippon === 1 && this.GET_TIMER_PLAY) {
                this.setTiempoPlay(); // TRUE -> FALSE
            }
        }
    }
}
</script>

<style>

</style>