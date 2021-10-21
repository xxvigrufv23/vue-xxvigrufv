<template>
  <div>
  <h1> Full Name : {{fullName}}</h1>
  <button type="button" @click="changeName">이름 변경</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'jaeyoun',
      lastName: 'Choi',
      fullName: 'jaeyoun choi'
    };
  },
  watch: {
    firstName() {
      this.fullName = this.firstName + ' ' + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    changeName() {
      this.firstName = 'june';
    }
  }
}
</script>

<style scoped>

</style>