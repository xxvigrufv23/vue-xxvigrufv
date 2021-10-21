<template>
  <div>
    <label><input type="radio" v-bind:value="radioValue1" v-model="picked">서울</label>
    <label><input type="radio" v-bind:value="radioValue2" v-model="picked">대전</label>
    <label><input type="radio" v-bind:value="radioValue3" v-model="picked">대구</label>
    <label><input type="radio" v-bind:value="radioValue4" v-model="picked">부산</label>
    <br>
    <span> 선택한 지역: {{ picked }}</span>

  </div>
</template>

<script>
export default {
    data() {
        return {
              picked: '',
              radioValue1: '서울',
              radioValue2: '대전',
              radioValue3: '대구',
              radioValue4: '부산',
        };
    }
}
</script>

<style scoped>

</style>