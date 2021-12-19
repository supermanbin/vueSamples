<template>
  <button class="button">
    <slot></slot>
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
