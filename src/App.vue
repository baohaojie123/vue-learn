<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="hellow vue"/>
    <ev/>
    <com :age="age" @patch="msg">
      <h3 slot="b"> 我要加东西</h3>
      <h2 slot="a">我要加东西</h2>
    </com>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './components/n'
import com from './components/com'
import ev from './components/events'
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
    HelloWorld,
    ev,
    com
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
