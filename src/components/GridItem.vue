<script>
import { defineComponent } from "vue";
import classNames from "@/common/tools/classNames";

const GridItem = defineComponent({
  name: "GridItem",
  props: {
    gridStart: {
      type: Number,
    },
    gridEnd: {
      type: Number,
    },
    hasBackground: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    const itemCls = classNames(
      "grid-item",
      `grid-item--start${props.gridStart}`,
      `grid-item--end${props.gridEnd}`,
      {
        "grid-item--nobg": !props.hasBackground,
      }
    );
    return () => (
      <div className={itemCls}>{slots.default && slots.default()}</div>
    );
  },
});
export default GridItem;
</script>

<style lang="less" scoped>
.grid-item {
  display: flex;
  grid-column-end: span 4;
  align-items: center;
  justify-content: center;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

  //  hover
  &:hover {
    background: aliceblue;
  }
  &--nobg:hover {
    background: transparent;
  }
}
// Less each function https://lesscss.org/functions/#list-functions-each
each(range(27), {
  .grid-item--start@{index} {
    grid-column-start: (@index);
  }
});
each(range(27), {
  .grid-item--end@{index} {
    grid-column-end: span (@index);
  }
});
</style>
