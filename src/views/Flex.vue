<template>
  <div class="message">
    <div class="message__outer">
      <div class="message__avatar"></div>
      <div class="message__inner">
        <div class="message__bubble"></div>
        <div class="message__actions">aa</div>
        <div class="message__spacer"></div>
      </div>
      <div class="message__status"></div>
    </div>
  </div>
</template>

<style scoped>
.message__outer {
  display: flex;
}
.message__avatar {
  --width: 32px;
  width: var(--width);
  height: var(--width);
  border-radius: var(--width);
  background: #000;
  flex-shrink: 0;
}
.message__inner {
  flex: 1;
  background: #fff;
}
.message__status {
  width: 100px;
  background: red;
  flex-shrink: 0;
}
</style>
