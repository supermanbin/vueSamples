<script>
import { defineComponent } from "vue";
const Grid = defineComponent({
  name: "Grid",
  props: {
    hasBottomBorder: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const wrapperClass = props.hasBottomBorder
      ? "grid-wrapper grid-wrapper--hasbord"
      : "grid-wrapper";
    let slot;
    if (slots.default && slots.default()) {
      slot = slots.default().filter((item) => {
        return item.type.name && item.type.name === "GridItem";
      });
    }
    return () => {
      return (
        <div className={wrapperClass}>
          <div className="grid-container">{slot}</div>
        </div>
      );
    };
  },
});

export default Grid;
</script>

<style scoped lang="less">
.grid-wrapper {
  &--hasbord {
    border-bottom: 1px solid #ededed;
  }
}
.grid-container {
  padding: 2px var(--unit-size);
  display: grid;
  grid-template-columns: repeat(28, var(--unit-size));
  grid-template-rows: 32px;
}
</style>
