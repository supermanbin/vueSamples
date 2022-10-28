<script>
import { defineComponent } from "vue";

const GridInput = defineComponent({
  name: "GridInput",
  props: {
    type: {
      type: String,
      default: "text",
      validate(type) {
        return ["text", "number"].includes(type);
      },
    },
    modelVal: { type: String },
  },
  slots: ["prefix"],
  emits: ["update:value", "on-change"],
  setup(props, ctx) {
    console.log(props, ctx);
    const valueChange = () => {};

    return () => (
      <div className="grid-input">
        <label className="grid-input-wrapper">
          <span className="grid-input--label">
            {ctx.slots.prefix && ctx.slots.prefix()}
          </span>
          {ctx.slots.default && ctx.slots.default()}
          <input
            value={props.modelVal}
            className="grid-input--input"
            type={props.type}
            onChange={valueChange}
          />
        </label>
      </div>
    );
  },
});

export default GridInput;
</script>

<style scoped lang="less">
.grid-input {
  display: flex;
  width: 100%;
  &--label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 32px;
    height: 28px;
  }
  &--input {
    border: 0;
    width: 100%;
    padding: 0;

    &:focus {
      outline: none;
    }

    &[type="number"]::-webkit-inner-spin-button {
      appearance: none;
    }
  }
}
.grid-input-wrapper {
  &:extend(.grid-input);
  align-items: center;
  &:focus-within {
    box-shadow: 0 0 0 2px var(--primary-color);
  }
}
</style>
