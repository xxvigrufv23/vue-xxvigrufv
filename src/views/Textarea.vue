<template>
  <div>
    <textarea v-model="message"></textarea>
  </div>
</template>

<script>
export default {
    data() {
      return {
        message: "여러 줄 입력 가능합니다."
      };
    }
}
</script>

<style scoped>

</style>