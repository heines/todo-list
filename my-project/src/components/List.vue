<template lang="pug">
  div
    div.v-input
      input(v-model="newContent")
      div.v-add(@click="addContent") add
    ul(v-for="(item, index) in items")
      div.v-ul__list
        div.v-ul__list-check
          CheckRound
          ListContent(
            :item="item"
            )
        div.v-delete(@click="deleteContent" :index="index") delete
</template>

<script>
import ListContent from './ListContent';
import CheckRound from './CheckRound';
export default {
  name: 'List',
  data () {
    return {
      items: [],
      newContent: '',
      checkedList: {},
    }
  },
  components: {
    ListContent,
    CheckRound,
  },
  created: function() {
    this.items = JSON.parse(localStorage.getItem("items"));
    if(!this.items) {
      this.items = [];
    }
  },
  methods: {
    addContent: function() {
      if(this.newContent !== '') {
        this.items.push(this.newContent);
        this.setLocalStrage();
      }
    },
    deleteContent: function(index) {
      this.items.splice(index, 1);
      this.setLocalStrage();
    },
    setLocalStrage: function() {
      localStorage.setItem('items', JSON.stringify(this.items));
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .v-input {
    display: flex;
    margin-left: 1em;
  }
  .v-ul {
    &__list {
      display: flex;
      width: 500px;
      justify-content: space-between;
      &-check {
        display: flex;
      }
    }
  }
  .v-delete {
    cursor: pointer;
  }
  .v-add {
    cursor: pointer;
  }
</style>
