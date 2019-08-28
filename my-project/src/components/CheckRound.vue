<template lang="pug">
  .v-check(
    @click="checkContent"
    :class="{ 'checked' : isChecked }"
    )
</template>

<script>
export default {
  name: 'CheckRound',
  data: function() {
    return {
      isChecked: false,
    };
  },
  methods: {
    checkContent: function() {
      if(this.isChecked) {
        this.isChecked = false;
      } else {
        this.isChecked = true;
      }
    }
  }
}
</script>

<style lang="scss">
  .v-check {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid rgb(43, 82, 136);
    cursor: pointer;
    &.checked {
      background-color: rgb(43, 82, 136);
    }
  }
</style>
