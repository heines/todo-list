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
  @import '../css/foundation/_mixin-utils.scss';
  @import '../css/foundation/_variables.scss';
  .v-button-rep {
    flex: 1;
    height: 50px;
    background: $color-key;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    margin: 10px;
    padding: 5px;
    box-sizing: border-box;
    @include l-tablet-and-mobile {
      flex: auto;
      height: auto;
    }
  }
</style>
