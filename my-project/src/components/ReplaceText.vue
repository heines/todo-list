<template lang="pug">
  div.v-replace
    textarea(
      v-model="inputText"
      placeholder="変換したい文字列を入力してください"
      )
    ButtonReplace(:clickAction="replaceText")
      | 全角数字を半角数字に変換
    textarea(
      v-model="outputText"
      placeholder="変換後の文字列が表示されます"
      )
</template>

<script>
import ButtonReplace from './ButtonReplace';
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
  },
  methods: {
    replaceText: function() {
      this.outputText = this.inputText.replace(/[０-９]/g, (s) => {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
      });
    }
  }
}
</script>

<style lang="scss">
  @import '../css/foundation/_mixin-utils.scss';
  @import '../css/foundation/_variables.scss';
  .v-replace {
    display: flex;
    align-items: center;
    @include l-mobile {
      flex-direction: column;
    }
    textarea {
      height: 50vh;
      width: 40%;
      display: block;
      font-size: 20px;
      padding: 10px;
      box-sizing: border-box;
      @include l-mobile {
        flex-direction: column;
        height: 30vh;
        width: 90%;
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
</style>
