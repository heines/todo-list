<template lang="pug">
  div
    div.v-input
      input.v-input(
        v-model="newContent"
        @keydown.enter="addContentKey"
        )
      div.v-add(@click="addContent") add
    ul(v-for="(item, index) in items")
      div.v-ul__list
        div.v-ul__list-check
          .v-check(
            @click="checkContent(index)"
            :class="{ 'checked' : getCheckStatus(index) }"
            )
          ListContent(
            :item="item"
            )
        div.v-delete(@click="deleteContent(index)") delete
</template>

<script>
import ListContent from './ListContent';
export default {
  name: 'List',
  data () {
    return {
      items: [],
      checked: [],
      newContent: '',
      checkedList: {},
    }
  },
  components: {
    ListContent,
  },
  created: function() {
    this.items = JSON.parse(localStorage.getItem("items"));
    this.checked = JSON.parse(localStorage.getItem("checked"));
    if(!this.items) {
      this.items = [];
    }
    if(!this.checked) {
      this.checked = [];
    }
  },
  methods: {
    addContent: function() {
      if(this.newContent !== '') {
        this.items.push(this.newContent);
        this.checked.push(false);
        this.setLocalStrage();
      }
    },
    addContentKey: function(e) {
      if(e.keyCode === 13) {
        this.addContent();
      }
    },
    deleteContent: function(index) {
      this.items.splice(index, 1);
      this.checked.splice(index, 1);
      this.setLocalStrage();
    },
    checkContent: function(index) {
      if(this.checked[index]) {
        this.checked.splice(index, 1, false);
      } else {
        this.checked.splice(index, 1, true);
      }
      this.setLocalStrage();
    },
    setLocalStrage: function() {
      localStorage.setItem('items', JSON.stringify(this.items));
      localStorage.setItem('checked', JSON.stringify(this.checked));
    },
  },
  computed: {
    getCheckStatus: function() {
      return (index) => {
        return this.checked[index];
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../css/foundation/_mixin-utils.scss';
  @import '../css/foundation/_variables.scss';
  .v-input {
    display: flex;
    margin-left: 1em;
    margin-right: 1em;
    @include fontSet(20, 25, 1.2);
    @include l-more-than-mobile {
      width: 50%;
    }
    @include l-mobile {
      width: 80%;
    }
  }
  .v-ul {
    &__list {
      display: flex;
      max-width: 500px;
      justify-content: space-between;
      &-check {
        display: flex;
      }
    }
  }
  .v-delete {
    cursor: pointer;
    margin-right: 1em;
  }
  .v-add {
    cursor: pointer;
  }
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
