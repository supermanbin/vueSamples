<template>
  <div class="right-panel">
    <div class="grid-wrapper grid-wrapper--hasbord">
      <div class="grid-container">
        <div class="grid-item">
          <span><font-awesome-icon icon="fas fa-align-left" /></span>
        </div>
        <div class="grid-item">
          <span><font-awesome-icon icon="fas fa-align-right" /></span>
        </div>
        <div class="grid-item">
          <span><font-awesome-icon icon="fas fa-align-justify" /></span>
        </div>
        <div class="grid-item">
          <span><font-awesome-icon icon="fas fa-align-center" /></span>
        </div>
      </div>
    </div>
    <div class="grid-wrapper">
      <div class="grid-container">
        <div class="grid-item grid-item--nobg grid-item--end11">
          <label class="position">
            <span class="position__unit">X</span>
            <input class="position__number" type="text">
          </label>
        </div>
        <div class="grid-item grid-item--nobg grid-item--start12">
          <label class="position">
            <span class="position__unit">Y</span>
            <input class="position__number" type="text">
          </label>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-item grid-item--nobg grid-item--end11">
          <label class="position">
            <span class="position__unit">W</span>
            <input class="position__number" type="text">
          </label>
        </div>
        <div class="grid-item grid-item--nobg grid-item--start12">
          <label class="position">
            <span class="position__unit">H</span>
            <input class="position__number" type="text">
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Grid",
  components: {},
  created() {},
  mounted() {},
};
</script>

<style scoped>
:global(:root)
 {
  --primary-color: #4091F7;
  --unit-color: #A6ABC9;
  --font-size-11: 11px;
  --bord-color: #F2F2F2;
}
.right-panel {
  position: absolute;
  right: 0;
  top: 64px;
  width: 260px;
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
  grid-column-end: 24;
}
.position {
  display: flex;
  align-items: center;
}
.position:hover {
  box-shadow: inset 0 0 0 1px var(--bord-color);
}
.position:focus-within {
  box-shadow: inset 0 0 0 2px var(--primary-color);
}
.position__unit {
  flex: 0 0 32px;
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  color: var(--unit-color);
  font-size: var(--font-size-11);
}
.position__number {
  width: 100%;
  flex: 1;
  background: transparent;
  border: none;
  height: 32px;
}
.position__number:focus {
  outline: none;
}
</style>
