<template lang="pug">
  div
    ul(v-for="item in items")
      ListContent(:item="item")
</template>

<script>
import ListContent from './ListContent';
export default {
  name: 'List',
  data () {
    return {
      items: ['test', 'test2'],
    }
  },
  components: {
    ListContent,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
