<template>
<div>
  <input type="text" v-model="textValue" />
  <button type="button" v-bind:disabled="textValue==''">click here</button>
</div>
</template>

<script>
export default {
  data() {
    return {
      textValue: ""
    };
  }
}
</script>

<style scoped>

</style>