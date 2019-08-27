<template lang="pug">
  li {{ item }}
</template>

<script>
export default {
  name: 'ListContent',
  data: function() {
    return {

    };
  },
  props: {
    item : String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    display: block;
    margin: 0 10px;
    text-align: left;
    color: rgb(43, 56, 83);
  }
</style>
