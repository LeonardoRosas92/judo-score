<template>
  <div 
    class="rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border-2 border-black   w-11/12 py-1" 
    :class="styles">
    <h1 class="block text-2xl">Competidor {{color}}</h1>
    <div class="flex justify-evenly">
      <div>
        <p class="text-2xl">Ippon</p>
        <ScrollPicker :options="options" v-model="ScoreIppon" />
      </div>
      <div>
        <p class="text-2xl">Wazari</p>
        <ScrollPicker :options="options" v-model="ScoreWazari" />
      </div>
      <div>
        <p class="text-2xl">Shido</p>
        <ScrollPicker :options="options" v-model="ScorePenalty" />
      </div>
    </div>
  </div>
</template>

<script>
import ScrollPicker from 'vue3-scroll-picker';
//const exampleOptions = [[{label: "0",value: 0},{label: "1",value: 1}]];
export default {
    components:{ScrollPicker},
    props:{
        color: {
            type: String,
            required: true
        }
    },
    data(){
        return{
            options : [[{label: "0",value: 0},{label: "1",value: 1}]],
            ScoreIppon: [],
            ScoreWazari: [],
            ScorePenalty: [],
        }
    },
    computed:{
        styles(){
            return this.color === 'Azul' ? 'bg-blue-900 text-white' : 'bg-white-900 text-blue-600'
        }
    }
};
</script>

<style lang="scss" scoped>
.pad-bottom-overlay,.pad-top-overlay {
    display: none;
}
.scroll-picker-container{
    height: 50px;
}

</style>