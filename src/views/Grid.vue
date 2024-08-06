<template>
  <div :style="{ 'font-size': size }">bbbbbb</div>
  <k-select @change-size="onChangeSize" />
  <k-button @click="showDrawer">aaa</k-button>

  <ul class="grid">
    <li @click="liClick">
      <p>You can use curly braces to add text to element</p>
    </li>
    <li @click="liClick">
      <p>
        Note that {text} is used and parsed as a separate element (like, div, p
        etc.) but has a special meaning when written right after element. For
        example, a{click} and a>{click} will produce the same output, but
        a{click}+b{here} and a>{click}+b{here} won’t
      </p>
    </li>
    <li @click="liClick">
      <p>
        In second example the element is placed inside element. And that’s the
        difference: when {text} is written right after element, it doesn’t
        change parent context. Here’s more complex example showing why it is
        important
      </p>
    </li>
    <li @click="liClick">
      <p>
        In this example, to write Click here to continue inside &lt;p&gt;
        element we have explicitly move down the tree with > operator after p,
        but in case of a element we don’t have to, since we need &lt;a&gt;
        element with here word only, without changing parent context.
      </p>
    </li>
  </ul>

  <div class="anchor-target">fasdfads</div>

  <a-drawer
    title="Drawer aaaa"
    :visible="drawerVisible"
    :width="500"
    maskClosable
    @close="
      () => {
        drawerVisible = false;
      }
    "
  >
    <div class="collapse">
      <div class="collapse-item">
        <div class="collapse-item__title">collapse title</div>
        <div class="collapse-item__body">collapse content</div>
      </div>
      <div class="collapse-item">
        <div class="collapse-item__title">collapse title</div>
        <div class="collapse-item__body">collapse content</div>
      </div>
      <div class="collapse-item">
        <div class="collapse-item__title">collapse title</div>
        <div class="collapse-item__body">collapse content</div>
      </div>
    </div>
  </a-drawer>
</template>

<script>
// @ is an alias to /src
import { ref } from "vue";
import kSelect from "@/components/kSelect.vue";
import kButton from "@/components/kButton";

export default {
  name: "Grid",
  components: { kSelect, kButton },
  created() {},
  mounted() {},
  setup() {
    const size = ref("12px");
    const onChangeSize = (c) => {
      size.value = c;
    };

    const drawerVisible = ref(false);

    const showDrawer = () => {
      drawerVisible.value = true;
    };

    return { size, drawerVisible, onChangeSize, showDrawer };
  },
  methods: {
    liClick(e) {
      console.log(e.target.getBoundingClientRect());
      // const { target } = e;
      // const rect = target.getBoundingClientRect();
      // target.style.setProperty("--top", rect.top);
      // target.style.setProperty("--bottom", rect.bottom);
      // target.style.setProperty("--left", rect.left);
      // target.style.setProperty("--right", rect.right);
    },
  },
};
</script>

<style>
.collapse {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.collapse-item {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.collapse-item__title {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #000;
  background: #efefef;
}
.collapse-item__body {
  flex: 1;
  max-height: 100px;
  overflow-y: auto;
}

.grid {
  list-style: none;
  margin: 30px 0;
  padding: 0;
  display: grid;
  grid-template-columns: 300px 300px;
  grid-gap: 20px;
  position: relative;
  z-index: 2;
  max-height: 70vh;
  place-items: center;

  li {
    padding: 20px;
    p {
      margin: 0;
    }
  }
}

li:nth-of-type(1) {
  anchor-name: --anchor1;
}
li:nth-of-type(2) {
  anchor-name: --anchor2;
}
li:nth-of-type(3) p {
  anchor-name: --anchor3;
}
li:nth-of-type(4) p {
  anchor-name: --anchor4;
}

:root {
  --color-a: rgba(255, 0, 0, 1);
  --haha: --anchor1;
}

.grid:has(li:nth-of-type(1):hover) {
  --haha: --anchor1;
}
.grid:has(li:nth-of-type(2):hover) {
  --haha: --anchor2;
  --color-a: blue;
}
.grid:has(li:nth-of-type(3):hover) {
  --haha: --anchor3;
}
.grid:has(li:nth-of-type(4):hover) {
  --haha: --anchor4;
}
.anchor-target {
  color: var(--color-a);
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  //z-index: -1;
  position-anchor: var(--haha);
  inset: anchor(top) anchor(right) anchor(bottom) anchor(left);
  transition: inset 0.3s 1s;
}
</style>
