<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-html="msg1" :id="id"></div>
    <div class="" v-if="see">
      {{number + 1}}
    </div>
    <p v-else>1111</p>
    <div v-n="4"></div>
    <p>本来有{{money}},借出了{{a}},还剩{{b}}</p>
    <div :class="[a1,a2]">style</div>
    <div :class="{test3:a3}">style</div>
    <div :class="obj">style</div>
    <ul>
      <li v-for="(item,index) in list" :key="item">
        {{item}},{{index}}
      </li>
    </ul>
    <ul>
      <template v-for="item in list">
        <li :key="item+1">hello</li>
        <li :key="item">{{item}}</li>
      </template>

    </ul>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    // data为函数的原因，多实例共享函数
    data () {
      return {
          msg1: '<span style="color:red">baohaojie</span>',
          id: '001',
          see: false,
          number: 1,
          money:100,
          a:1,
          a1:"test1",
          a2:"test2",
          a3:true,
          obj:{
            test4:true
          },
          list:['a','b','c','d']
      }
    },
  computed:{
    b:function () {
      return this.money - this.a
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
