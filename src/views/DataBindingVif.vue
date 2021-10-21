<template>
  <div>
    <h1 v-if="type=='A'">A그룹</h1>
    <h1 v-else-if="type=='B'">B그룹</h1>
    <h1 v-else>C그룹</h1>
  </div>
</template>

<script>
export default {
  data(){
    return {
      type: 'D'
    };
  }
}
</script>

<style scoped>

</style>