<script>
import { defineComponent } from "vue";
const GridItem = defineComponent({
  name: "GridItem",
  props: {
    icon: {
      type: String,
      default: "",
    },
    gridStart: {
      type: Number,
    },
    gridEnd: {
      type: Number,
    },
  },
  setup(props) {
    return () => (
      <div className="grid-item">
        <span>
          <font-awesome-icon icon={props.icon} class="icon" />
        </span>
      </div>
    );
  },
});
export default GridItem;
</script>

<style lang="less" scoped>
.icon {
  color: var(--unit-color);
  font-size: 12px;
  &--10 {
    font-size: 10px;
  }
}
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
