<template>
  <div class="right-panel">
    <grid :has-bottom-border="true">
      <grid-item>
        <font-awesome-icon icon="fas fa-align-left" class="icon icon--10" />
      </grid-item>
      <grid-item>
        <font-awesome-icon icon="fas fa-align-right" class="icon icon--10" />
      </grid-item>
      <grid-item>
        <font-awesome-icon icon="fas fa-align-justify" class="icon icon--10" />
      </grid-item>
      <grid-item>
        <font-awesome-icon icon="fas fa-align-center" class="icon icon--10" />
      </grid-item>
    </grid>
    <grid>
      <grid-item :grid-end="11" :has-background="false">
        <grid-input v-model:value="position.x" type="number">
          <font-awesome-icon icon="fas fa-x" class="icon icon--10" />
          <template #prefix>
            <strong>prefix</strong>
          </template>
        </grid-input>
      </grid-item>
      <grid-item :grid-start="13" :grid-end="11" :has-background="false">
        <grid-input type="number">
          <font-awesome-icon icon="fas fa-y" class="icon icon--10" />
        </grid-input>
      </grid-item>
    </grid>
    <grid>
      <grid-item :grid-end="11" :has-background="false">
        <grid-input type="number">
          <font-awesome-icon icon="fas fa-w" class="icon icon--10" />
        </grid-input>
      </grid-item>
      <grid-item :grid-start="13" :grid-end="11" :has-background="false">
        <grid-input
          type="number"
          v-model:value="position.x"
          @onChange="changeHandle"
          @pressEnter="handlePressEnter"
        >
          <font-awesome-icon icon="fas fa-h" class="icon icon--10" />
        </grid-input>
      </grid-item>
      <grid-item :grid-start="25" @click="linkAndUnlink">
        <font-awesome-icon
          :icon="isLink ? 'fas fa-link' : 'fas fa-link-slash'"
          class="icon icon--10"
        />
      </grid-item>
    </grid>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import Grid from "@/components/Grid";
import GridItem from "@/components/GridItem";
import GridInput from "@/components/GridInput";

export default {
  name: "Figma",
  components: { Grid, GridItem, GridInput },
  setup() {
    const position = ref({
      width: 0,
      height: 0,
      x: "0",
      y: 0,
      rotation: "0º",
      corner: 0,
    });

    const isOpenEye = ref(true);
    const isLink = ref(false);

    return {
      position,
      isOpenEye,
      isLink,
    };
  },
  methods: {
    openAndCloseEye() {
      this.isOpenEye = !this.isOpenEye;
    },
    linkAndUnlink() {
      this.isLink = !this.isLink;
    },
    changeHandle(e) {
      console.log("changeHandle:", e);
    },
    handlePressEnter(e) {
      console.log("pressEnter", e);
    },
  },
};
</script>

<style scoped lang="less">
.icon {
  color: var(--unit-color);
  font-size: 12px;
  &--10 {
    font-size: 10px;
  }
}

.right-panel {
  position: absolute;
  right: 0;
  top: 64px;
  width: 240px;
  height: calc(100vh - 64px);
  background: #fff;
}

.grid-item--end {
  grid-column-start: 25;
  grid-column-end: span 4;
}
.grid-title {
  grid-column-start: 2;
  justify-content: flex-start;
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

  &--nowidth {
    flex: 0 0 0;
  }
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
