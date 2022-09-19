import { createStore } from 'vuex'

export default createStore({
  state: {
    Azul:{
      ippon : 0 ,
      wazari : 0,
      shido : 0
    },
    Blanco:{
      ippon : 0 ,
      wazari : 0,
      shido : 0
    },
    TiempoSeleccionado:120,
    Tiempo : 0,
    TiempoPlay: false,
    OsaekomiAzul: 20,
    OsaekomiAzulPlay: false,
    OsaekomiBlanco: 20,
    OsaekomiBlancoPlay: false,
    Golden_Score: false
  },
  getters: {
    GET_WINNER(state){
      const Azul = (state.Azul.ippon*10) + state.Azul.wazari;
      const Blanco = (state.Blanco.ippon*10) + state.Blanco.wazari;
      if (Azul > Blanco) {
        return 'Azul'
      }else if (Azul < Blanco) {
        return 'Blanco'
      }
      return null;
    },
    GET_GOLDEN_SCORE(state){
      return state.Golden_Score;
    },
    GET_IPPON_AZUL(state){
      return state.Azul.ippon
    },
    GET_WAZARI_AZUL(state){
      return state.Azul.wazari
    },
    GET_SHIDO_AZUL(state){
      return state.Azul.shido
    },
    GET_IPPON_BLANCO(state){
      return state.Blanco.ippon
    },
    GET_WAZARI_BLANCO(state){
      return state.Blanco.wazari
    },
    GET_SHIDO_BLANCO(state){
      return state.Blanco.shido
    },
    GET_TIEMPO_SELECCIONADO(state){
      return state.TiempoSeleccionado;
    },
    GET_TIMER(state){
      return state.Tiempo;
    },
    GET_TIMER_PLAY(state){
      return state.TiempoPlay;
    },
    GET_OSAEKOMI_AZUL(state){
      return state.OsaekomiAzul;
    },
    GET_OSAEKOMI_AZUL_PLAY(state){
      return state.OsaekomiAzulPlay;
    },
    GET_OSAEKOMI_BLANCO_PLAY(state){
      return state.OsaekomiBlancoPlay;
    },
    GET_OSAEKOMI_BLANCO(state){
      return state.OsaekomiBlanco;
    }
  },
  mutations: {
    SET_GOLDEN_SCORE(state){
      state.Golden_Score = !state.Golden_Score
    },
    SET_IPPON_AZUL(state, ippon){
      state.Azul.ippon = ippon
    },
    SET_WAZARI_AZUL(state, wazari){
      state.Azul.wazari = wazari
      if (wazari == 2) {
        state.Azul.ippon = 1
      }else{
        state.Azul.ippon = 0
      }
    },
    SET_SHIDO_AZUL(state, shido){
      state.Azul.shido = shido
      shido === 3 ? state.Blanco.ippon = 1 : state.Blanco.ippon = 0
    },
    SET_IPPON_BLANCO(state, ippon){
      state.Blanco.ippon = ippon
    },
    SET_WAZARI_BLANCO(state, wazari){
      state.Blanco.wazari = wazari
      if (wazari == 2) {
        state.Blanco.ippon = 1
      }else{
        state.Blanco.ippon = 0
      }
    },
    SET_SHIDO_BLANCO(state, shido){
      state.Blanco.shido = shido
      shido === 3 ? state.Azul.ippon = 1 : state.Azul.ippon = 0
    },
    SET_TIMER(state, segundos){
      state.Tiempo = segundos
    },
    SET_TIEMPO_SELECCIONADO(state, segundos){
      state.TiempoSeleccionado = segundos;
      state.Tiempo = segundos;
    },
    SET_TIMER_PLAY(state){
      state.TiempoPlay = !state.TiempoPlay;
    },
    SET_OSAEKOMI_AZUL_PLAY(state){
      state.OsaekomiAzulPlay = !state.OsaekomiAzulPlay;
    },
    SET_OSAEKOMI_BLANCO_PLAY(state){
      state.OsaekomiBlancoPlay = !state.OsaekomiBlancoPlay;
    },
    SET_OSAEKOMI_AZUL(state /*,segundos */){
      //state.OsaekomiAzul = segundos;
      if (state.Azul.wazari === 1) {
        state.OsaekomiAzul = 10
      }else{
        state.OsaekomiAzul = 20
      }
    },
    SET_OSAEKOMI_BLANCO(state/* ,segundos */){
      if (state.Blanco.wazari === 1) {
        state.OsaekomiBlanco = 10
      }else{
        state.OsaekomiBlanco = 20
      }
    },
    DECREMENT_TIMER(state){
      state.Tiempo--;
    },
    INCREMENT_TIMER(state){
      state.Tiempo++;
    },
    RESET_TIMER(state){
      state.Tiempo = state.TiempoSeleccionado;
      state.Azul.ippon = 0;
      state.Azul.wazari = 0;
      state.Azul.shido = 0;
      state.Blanco.ippon = 0;
      state.Blanco.wazari = 0;
      state.Blanco.shido = 0;
      state.OsaekomiAzul = 20;
      state.OsaekomiBlanco = 20;
      state.OsaekomiAzulPlay = false;
      state.OsaekomiBlancoPlay = false;
      state.TiempoPlay = false;
      state.Golden_Score = false;
    },
    DECREMENT_OZAEKOMI_AZUL(state){
      state.OsaekomiAzul--;
    },
    DECREMENT_OZAEKOMI_BLANCO(state){
      state.OsaekomiBlanco--;
    }
  },
  actions: {
    setGoldenScore({commit}){
      commit('SET_GOLDEN_SCORE')
    },
    setIpponAzul({commit}, ippon){
      commit('SET_IPPON_AZUL', ippon)
    },
    setWazariAzul({commit}, wazari){
      commit('SET_WAZARI_AZUL', wazari)
      commit('SET_OSAEKOMI_AZUL')
    },
    setShidoAzul({commit}, shido){
      commit('SET_SHIDO_AZUL', shido)
    },
    setIpponBlanco({commit}, ippon){
      commit('SET_IPPON_BLANCO', ippon)
    },
    setWazariBlanco({commit}, wazari){
      commit('SET_WAZARI_BLANCO', wazari)
      commit('SET_OSAEKOMI_BLANCO')
    },
    setShidoBlanco({commit}, shido){
      commit('SET_SHIDO_BLANCO', shido)
    },
    resetTimer({commit}){
      commit('RESET_TIMER');
    },
    setTimer({commit}, segundos){
      commit('SET_TIMER', segundos)
    },
    setTiempoPlay({commit}){
      commit('SET_TIMER_PLAY')
    },
    setOsaekomiAzulPlay({commit}){
      commit('SET_OSAEKOMI_AZUL_PLAY')
    },
    setOsaekomiBlancoPlay({commit}){
      commit('SET_OSAEKOMI_BLANCO_PLAY')
    },
    setTimempoSeleccionado({commit}, segundos){
      commit('SET_TIEMPO_SELECCIONADO', segundos)
    },
    decrementTimer({commit}){
      commit('DECREMENT_TIMER')
    },
    incrementTimer({commit}){
      commit('INCREMENT_TIMER')
    },
    setOsaekomiAzul({commit}, segundos){
      commit('SET_OSAEKOMI_AZUL',segundos)
    },
    decrementOzaekomiAzul({commit}){
      commit('DECREMENT_OZAEKOMI_AZUL')
    },
    setOsaekomiBlanco({commit}, segundos){
      commit('SET_OSAEKOMI_BLANCO',segundos)
    },
    decrementOzaekomiBlanco({commit}){
      commit('DECREMENT_OZAEKOMI_BLANCO')
    },
  },
})
