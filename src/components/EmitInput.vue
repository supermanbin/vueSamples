<template>
  <input v-model="text" type="text" placeholder="please input new value" />
  {{ text }}
  <button @click="clickHandler">click</button>
</template>

<script>
// import { ref } from "vue";

export default {
  name: "EmitInput",
  // setup() {
  //   const text = ref("");
  //   return {
  //     text,
  //   };
  // },
  data() {
    return {
      text: "",
    };
  },
  watch: {
    text: {
      handler(v) {
        console.log(v);
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    clickHandler() {
      console.log(this.text);
    },
  },
};
</script>
