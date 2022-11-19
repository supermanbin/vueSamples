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
        <grid-input
          v-model:value="position.x"
          type="number"
          @onChange="changeHandle"
        >
          <template #prefix>
            <font-awesome-icon icon="fas fa-x" class="icon icon--10" />
          </template>
        </grid-input>
      </grid-item>
      <grid-item :grid-start="13" :grid-end="11" :has-background="false">
        <grid-input
          type="number"
          v-model:value="position.y"
          @onChange="changeHandle"
        >
          <template #prefix>
            <font-awesome-icon icon="fas fa-y" class="icon icon--10" />
          </template>
        </grid-input>
      </grid-item>
    </grid>
    <grid>
      <grid-item :grid-end="11" :has-background="false">
        <grid-input
          type="number"
          v-model:value="position.width"
          @onChange="changeHandle"
          @pressEnter="
            handlePressEnter($CONSTANTS.SHAPE_PROPERTY.WIDTH, $event)
          "
        >
          <template #prefix>
            <font-awesome-icon icon="fas fa-w" class="icon icon--10" />
          </template>
        </grid-input>
      </grid-item>
      <grid-item :grid-start="13" :grid-end="11" :has-background="false">
        <grid-input
          type="number"
          v-model:value="position.height"
          @onChange="changeHandle"
          @pressEnter="
            handlePressEnter($CONSTANTS.SHAPE_PROPERTY.HEIGHT, $event)
          "
        >
          <template #prefix>
            <font-awesome-icon icon="fas fa-h" class="icon icon--10" />
          </template>
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
      x: 0,
      y: 0,
      rotation: "0º",
      corner: "0",
    });

    const isOpenEye = ref(true);
    const isLink = ref(false);
    const widthAndHeightRatio = ref(1);

    return {
      position,
      isOpenEye,
      isLink,
      widthAndHeightRatio,
    };
  },
  methods: {
    openAndCloseEye() {
      this.isOpenEye = !this.isOpenEye;
    },
    change(e) {
      console.log(e.target.value);
    },
    linkAndUnlink() {
      this.isLink = !this.isLink;

      if (this.isLink && this.position.height) {
        if (!this.position.width) {
          this.widthAndHeightRatio = 1;
        }
        this.widthAndHeightRatio = this.position.width / this.position.height;
      }
    },
    changeHandle(val) {
      console.log(val);
      // if (this.isLink) {
      // }
    },
    handlePressEnter(type) {
      if (!this.isLink) return;
      // 根据长高比算出高度
      if (
        type === this.$CONSTANTS.SHAPE_PROPERTY.WIDTH &&
        this.position.width
      ) {
        this.position.height = this.position.width / this.widthAndHeightRatio;
      }

      // 根据长高比算出宽度
      if (
        type === this.$CONSTANTS.SHAPE_PROPERTY.HEIGHT &&
        this.position.height
      ) {
        this.position.width = this.position.height * this.widthAndHeightRatio;
      }
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
