<template>
    <div class="b">page b
        {{$store.state.count.count}}
         <button type="button" name="button" @click="add">增加</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods:{
      ...mapActions('count',['add'])
  }
}
</script>

<style scoped>

</style>