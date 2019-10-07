<template lang="pug">
  .v-button-rep(
    @click="clickAction"
    )
    slot
</template>

<script>
export default {
  name: 'ButtonReplace',
  props: [
    'clickAction'
  ]
}
</script>

<style lang="scss">
  .v-button-rep {
    flex: 1;
    height: 50px;
    background: rgb(43, 82, 136);
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin-right: 10px;
    margin-left: 10px;
    padding: 5px;
    box-sizing: border-box;
  }
</style>
