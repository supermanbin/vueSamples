<template>
  <button class="button">
    你好
    <slot></slot>
    哈哈
  </button>
</template>
<script>
export default {
  name: "kButton",
  setup() {},
};
</script>
<style scope>
.button {
  padding: 10px;
}
</style>
