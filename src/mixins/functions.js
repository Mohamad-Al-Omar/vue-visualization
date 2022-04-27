import Vue from "vue";
const functions = {
  methods: {
    test() {
      console.log("test from mixins");
    },
    extractNumbersFromString(str) {
      return str.replace(/\D+/g, "");
    },
  },
};
Vue.mixin(functions);
// export default functions;
