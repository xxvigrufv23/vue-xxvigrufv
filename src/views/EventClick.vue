<template>
  <div>
    <button type="button" @click="one(), two()">Click</button>
    <button type="button" @click="three(), four()">korea</button>
    <p>The counter is : {{counter}}</p>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     counter : 0
  //   }
  // },
  methods: {
    one() {
      alert('one');
    },
    two() {
      alert('second');
    },
    three() {
      alert('third');
    },
    four() {
      alert('firth')
    }
  }
}
</script>

<style scoped>

</style>