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
    value: { type: String },
  },
  slots: ["prefix"],
  emits: ["update:value", "onChange", "pressEnter"],
  setup(props, ctx) {
    console.log(props, ctx);
    const valueChange = (e) => {
      ctx.emit("update:value", e.target.value);
      ctx.emit("onChange", e.target.value);
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        ctx.emit("pressEnter", e);
      }
    };

    const prefix = () => {
      if (ctx.slots.prefix && ctx.slots.prefix()) {
        return (
          <span className="grid-input--label">
            {ctx.slots.prefix && ctx.slots.prefix()}
          </span>
        );
      }
    };

    return () => (
      <div className="grid-input">
        <label className="grid-input-wrapper">
          {prefix()}
          <input
            value={props.value}
            className="grid-input--input"
            type={props.type}
            onInput={valueChange}
            onKeydown={handleKeyDown}
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
