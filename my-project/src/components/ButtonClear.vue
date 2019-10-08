<template lang="pug">
  .v-button-clear(
    @click="clickAction"
    )
    slot
</template>

<script>
export default {
  name: 'ButtonClear',
  props: [
    'clickAction'
  ]
}
</script>

<style lang="scss">
  @import '../css/foundation/_mixin-utils.scss';
  @import '../css/foundation/_variables.scss';
  .v-button-clear {
    flex: 1;
    height: 50px;
    background: $color-delete;
    color: $color-text;
    font-weight: bold;
    cursor: pointer;
    margin: 10px;
    padding: 5px;
    box-sizing: border-box;
    @include l-tablet-and-mobile {
      flex: auto;
      height: auto;
      width: 150px;
    }
  }
</style>
