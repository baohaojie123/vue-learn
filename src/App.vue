<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="hellow vue"/>-->
    <ev/>
    <com :age="age" @patch="msg">
      <h3 slot="b"> 我要加东西</h3>
      <h2 slot="a">我要加东西</h2>
    </com>
    <!--<Vuexx></Vuexx>-->
    <pagea></pagea>
    <pageb></pageb>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import './components/n'
import com from './components/com'
import ev from './components/events'
// import Vuexx from './components/vuex'
import pagea from './components/a'
import pageb from './components/b'
export default {
  name: 'app',
  data() {
    return {
      age:118
    }
  },
  methods:{
    msg:function (ag) {
     this.age++
      window.console.log(ag)
    }
  },
  components: {
    // HelloWorld,
    ev,
    com,
    // Vuexx,
    pagea,
    pageb
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
