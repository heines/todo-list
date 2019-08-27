<template lang="pug">
  div
    input(v-model="newContent")
    div new ? {{ newContent }}
    div(@click="addContent") add
    ul(v-for="(item, index) in items")
      div.v-ul-list
        div.v-ul-check(@click="checkContent(index)")
        ListContent(
          :item="item"
          )
        div(@click="deleteContent(index)") delete
</template>

<script>
import ListContent from './ListContent';
export default {
  name: 'List',
  data () {
    return {
      items: ['test', 'test2'],
      newContent: '',
    }
  },
  components: {
    ListContent,
  },
  methods: {
    addContent: function() {
      if(this.newContent !== '') {
        this.items.push(this.newContent);
      }
    },
    deleteContent: function(index) {
      this.items.splice(index, 1);
    },
    checkContent: function(index) {

    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .v-ul {
    &-list {
      display: flex;
    }
    &-check {
      
    }
  }
</style>
