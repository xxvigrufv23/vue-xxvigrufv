<template>
<select v-model="selectedValue" @change="changeSelect">
  <option value="seoul">seoul</option>
  <option value="daejeon">daejeon</option>
  <option value="busan">busan</option>
</select>
</template>
<script>
export default {

  data() {
    return {
      selectedValue: ''
    };
  },
  methods: {
    changeSelect() {
      alert(this.selectedValue);
    }
  }
}
</script>

<style scoped>

</style>