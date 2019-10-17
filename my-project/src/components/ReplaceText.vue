<template lang="pug">
  .v-replace
    textarea(
      v-model="inputText"
      placeholder="変換したい文字列を入力してください"
      )
    .v-replace__button
      ButtonReplace(:clickAction="replaceText")
        | 全角数字を半角数字に変換
      ButtonReplace(:clickAction="replaceAToSpan")
        | aタグをspanタグに変換
      ButtonReplace(:clickAction="replaceNameToId")
        | nameをidに変換
      ButtonClear(:clickAction="clearText")
        | Clear
    textarea(
      v-model="outputText"
      placeholder="変換後の文字列が表示されます"
      )
</template>

<script>
import ButtonReplace from './ButtonReplace';
import ButtonClear from './ButtonClear';
export default {
  name: 'ReplaceText',
  data () {
    return {
      inputText: '',
      outputText: ''
    }
  },
  components: {
    ButtonReplace,
    ButtonClear,
  },
  methods: {
    replaceText: function() {
      if(this.outputText == '') {
        this.outputText = this.inputText;
      }
      this.outputText = this.outputText.replace(/[０-９]/g, (s) => {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
      });
    },
    clearText: function() {
      this.inputText = '';
      this.outputText = '';
    },
    clickMethod: function() {
      console.log("copy!");
    },
    replaceAToSpan: function() {
      if(this.outputText == '') {
        this.outputText = this.inputText;
      }
      this.outputText = this.outputText.replace(/\<a /g, (s) => {
        return s = '<span ';
      }).replace(/\<\/a\>/g, (s) => {
        return s = '</span>';
      });
    },
    replaceNameToId: function () {
      if(this.outputText == '') {
        this.outputText = this.inputText;
      }
      this.outputText = this.outputText.replace(/ name="/g, (s) => {
        return s = ' id="';
      });
    },
  }
}
</script>

<style lang="scss">
  @import '../css/foundation/_mixin-utils.scss';
  @import '../css/foundation/_variables.scss';
  .v-replace {
    display: flex;
    justify-content: center;
    align-items: center;
    @include l-tablet-and-mobile {
      flex-direction: column;
    }
    textarea {
      height: 50vh;
      min-width: 35%;
      display: block;
      font-size: 20px;
      padding: 10px;
      box-sizing: border-box;
      @include l-tablet-and-mobile {
        flex-direction: column;
        height: 30vh;
        width: 90%;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
    &__button {
      display: flex;
      flex-direction: column;
      @include l-tablet-and-mobile {
        flex-direction: row;
      }
    }
  }
</style>
