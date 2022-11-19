<script>
import { defineComponent, ref } from "vue";

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
    value: { type: [String, Number] },
  },
  slots: ["prefix"],
  emits: ["update:value", "onChange", "pressEnter"],
  setup(props, ctx) {
    const inputCls = ref("grid-input__input");
    const labelCls = ref("grid-input__label");

    const valueChange = (e) => {
      let val = e.target.value;
      if (props.type === "number") {
        val = Number(val);
      }
      ctx.emit("update:value", val);
      ctx.emit("onChange", val);
    };

    const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
        ctx.emit("pressEnter", e);
      }
      // press down Ctrl
      if (e.keyCode === 93) {
        document.querySelector("#app").style.cursor = "ew-resize";
        inputCls.value = "grid-input__input grid-input__input--ctrl";
        labelCls.value = "grid-input__label grid-input__label--ctrl";
      }
    };

    const handleKeyUp = (e) => {
      // press up Ctrl
      if (e.keyCode === 93) {
        console.log(e);
        document.querySelector("#app").style.cursor = "default";
        inputCls.value = "grid-input__input";
        labelCls.value = "grid-input__label";
      }
    };

    const prefix = () => {
      if (ctx.slots?.prefix()) {
        return <span className={labelCls.value}>{ctx.slots?.prefix()}</span>;
      }
    };

    return () => (
      <div className="grid-input">
        <label className="grid-input-wrapper">
          {prefix()}
          <input
            value={props.value}
            className={inputCls.value}
            type={props.type}
            onInput={valueChange}
            onKeydown={handleKeyDown}
            onKeyup={handleKeyUp}
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
  &__label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 32px;
    height: 28px;

    &--ctrl {
      cursor: ew-resize;
    }
  }
  &__input {
    border: 0;
    width: 100%;
    padding: 0;
    //background: transparent;

    &:focus {
      outline: none;
    }

    &[type="number"]::-webkit-inner-spin-button {
      appearance: none;
    }

    &--ctrl {
      cursor: ew-resize;
    }
  }
}
.grid-input-wrapper {
  &:extend(.grid-input);
  align-items: center;
  &:focus-within {
    box-shadow: inset 0 0 0 2px var(--primary-color);
  }
}
</style>
