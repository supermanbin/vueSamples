<template>
  <div class="right-panel">
    <div class="grid-wrapper grid-wrapper--hasbord">
      <div class="grid-container">
        <div class="grid-item">
          <span><font-awesome-icon icon="fas fa-align-left" class="icon" /></span>
        </div>
        <div class="grid-item">
          <span><font-awesome-icon icon="fas fa-align-right" class="icon" /></span>
        </div>
        <div class="grid-item">
          <span><font-awesome-icon icon="fas fa-align-justify" class="icon" /></span>
        </div>
        <div class="grid-item">
          <span><font-awesome-icon icon="fas fa-align-center" class="icon" /></span>
        </div>
      </div>
    </div>
    <div class="grid-wrapper grid-wrapper--hasbord">
      <div class="grid-container">
        <div class="grid-item grid-item--nobg grid-item--end11">
          <label class="position">
            <span class="position__unit"><font-awesome-icon icon="fas fa-x" class="icon icon--10" /></span>
            <input class="position__number" type="text" v-model="position.x">
          </label>
        </div>
        <div class="grid-item grid-item--nobg grid-item--start12">
          <label class="position">
            <span class="position__unit"><font-awesome-icon icon="fas fa-y" class="icon icon--10" /></span>
            <input class="position__number" type="text" v-model="position.y">
          </label>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-item grid-item--nobg grid-item--end11">
          <label class="position">
            <span class="position__unit"><font-awesome-icon icon="fas fa-w" class="icon icon--10" /></span>
            <input class="position__number" type="text" v-model="position.width">
          </label>
        </div>
        <div class="grid-item grid-item--nobg grid-item--start12">
          <label class="position">
            <span class="position__unit"><font-awesome-icon icon="fas fa-h" class="icon icon--10" /></span>
            <input class="position__number" type="text" v-model="position.height">
          </label>
        </div>
        <div class="grid-item grid-item--end">
          <span><font-awesome-icon icon="fas fa-link-slash" class="icon" /></span>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-item grid-item--nobg grid-item--end11">
          <label class="position">
            <span class="position__unit"><font-awesome-icon icon="fas fa-r" class="icon icon--10" /></span>
            <input class="position__number" type="text" v-model="position.rotation">
          </label>
        </div>
        <div class="grid-item grid-item--nobg grid-item--start12">
          <label class="position">
            <span class="position__unit"><font-awesome-icon icon="fas fa-c" class="icon icon--10" /></span>
            <input class="position__number" type="text" v-model="position.corner">
          </label>
        </div>
        <div class="grid-item grid-item--end">
          <span><font-awesome-icon icon="fas fa-expand" class="icon" /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";

export default {
  name: "Grid",
  setup() {
    const position = ref({
      width: 0,
      height: 0,
      x: 0,
      y: 0,
      rotation: "0º",
      corner: 0,
    });

    return {
      position,
    };
  },
};
</script>

<style scoped>
:global(:root) {
  --primary-color: #4091F7;
  --unit-color: #A6ABC9;
  --font-size-11: 11px;
  --bord-color: #F2F2F2;
}
.icon {
  color: var(--unit-color);
  font-size: 12px;
}
.icon--10 {
  font-size: 10px;
}
.right-panel {
  position: absolute;
  right: 0;
  top: 64px;
  width: 240px;
  height: calc(100vh - 64px);
  background: #fff;
}
.grid-wrapper {
  padding: 8px 0;
}
.grid-wrapper--hasbord {
  border-bottom: 1px solid #ededed;
}
.grid-container {
  padding: 2px 8px;
  display: grid;
  grid-template-columns: repeat(28, 8px);
  grid-template-rows: 32px;
}
.grid-item {
  display: flex;
  grid-column-end: span 4;
  align-items: center;
  justify-content: center;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
.grid-item:hover {
  background: aliceblue;
}
.grid-item--end11 {
  grid-column-end: span 11;
}
.grid-item--nobg:hover {
  background: transparent;
}
.grid-item--start12 {
  grid-column-start: 13;
  grid-column-end: span 11;
  width: 100%;
}
.grid-item--end {
  grid-column-start: 25;
  grid-column-end: span 4;
}
.position {
  display: flex;
  align-items: center;
}
.position:hover {
  box-shadow: 0 0 0 1px var(--bord-color);
}
.position:focus-within {
  box-shadow: 0 0 0 2px var(--primary-color);
}
.position__unit {
  flex: 0 0 32px;
  width: 32px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  color: var(--unit-color);
  font-size: var(--font-size-11);
  cursor: ew-resize;
}
.position__number {
  width: 100%;
  flex: 1;
  background: transparent;
  border: none;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
}
.position__number:focus {
  outline: none;
}
</style>
