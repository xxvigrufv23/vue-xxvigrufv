<template>
    <div>
      <input type="text" v-model="valueModel" id="usa"/>
    </div>
</template>

<script>
  export default {
      data() {
        return {
          valueModel: 'USA'
        };
      }
  }
</script>

<style scoped>
#usa {
  width: 300px;
  border-color: aqua;
}
</style>