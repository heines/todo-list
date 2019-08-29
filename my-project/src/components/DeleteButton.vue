<template lang="pug">
  div(@click="deleteContent(index)") delete
</template>

<script>
export default {
  name: 'DeleteButton',
  props: [
    'index',
    'deleteContent',
  ],
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
