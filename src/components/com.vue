<template>
    <div class="com">
        child components
        <slot name="b"></slot>
        {{name}} {{ age }}
        <!--<button type="button" name="button" @click="$emit('patch')">发送到父组件</button>-->
        <button type="button" name="button" @click="msg">发送到父组件</button>
        <slot name="a"></slot>
    </div>
</template>

<script>
export default {
  props:{
    age: {
      type: Number,
      default:1
    }
  },
  data () {
    return {
      name: 'com'
    }
  },
  methods:{
    msg:function () {
      this.$emit('patch',34)
    }
  }
}
</script>

<style scoped>

</style>