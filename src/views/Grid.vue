<template>
  <div :style="{ 'font-size': size }">bbbbbb</div>
  <k-select @change-size="onChangeSize" />
  <k-button @click="showDrawer">aaa</k-button>

  <ul class="grid-li">
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

  <div class="anchor-target"></div>

  <div class="scroll-wrapper">
    <div class="scroll-item">
      <h3 data-splitting data-scroll>Using NPM</h3>
      <div class="grid" data-scroll>
        <div>
          Import Splitting from the package and call it. The CSS imports may
          vary depending on your bundler.
        </div>
        <div>
          Import Splitting from the package and call it. The CSS imports may
          vary depending on your bundler.
        </div>
      </div>
    </div>
    <div class="scroll-item">
      <h3 data-splitting data-scroll>Using a CDN</h3>
      <div class="grid">
        <div>
          CDN use is only recommended for demos / experiments on platforms like
          CodePen. For production use, bundle Splitting using the NPM package
          with Webpack or your preferred code bundler.
        </div>
        <div>
          CDN use is only recommended for demos / experiments on platforms like
          CodePen. For production use, bundle Splitting using the NPM package
          with Webpack or your preferred code bundler.
        </div>
      </div>
    </div>
    <div class="scroll-item">
      <h3 data-splitting data-scroll>Recommended Styles</h3>
      <div class="grid">
        <div>
          Included in the package are two small stylesheets of recommended CSS
          that will make text and grid based effects much easier. These styles
          are non-essential, but provide a lot of value.
        </div>
        <div>
          Included in the package are two small stylesheets of recommended CSS
          that will make text and grid based effects much easier. These styles
          are non-essential, but provide a lot of value.
        </div>
      </div>
    </div>
    <div class="scroll-item">
      <h3 data-splitting data-scroll>Browser Support</h3>
      <div class="grid">
        <div>
          Splitting should be thought of as a progressive enhancer. The basic
          functions work in any halfway decent browser (IE11+). Browsers that
          support CSS Variables ( ~85% of the current browser market share )
          will have the best experience. Browsers without CSS Variable support
          can still have a nice experience with at least some animation, but
          features like index-based staggering may not be feasible without
          JavaScript.
        </div>
        <div>
          Plugins are the heart of Splitting, each performing a specific split
          on the targeted element(s). Some plugins have dependencies that will
          automatically run when called. For example chars will automatically
          split by words to prevent issues with text wrapping.
        </div>
      </div>
    </div>
    <div class="scroll-item">
      <h3 data-splitting data-scroll>Plugins</h3>
      <div class="grid">
        <div>
          Plugins are the heart of Splitting, each performing a specific split
          on the targeted element(s). Some plugins have dependencies that will
          automatically run when called. For example chars will automatically
          split by words to prevent issues with text wrapping.
        </div>
        <div>
          Splitting should be thought of as a progressive enhancer. The basic
          functions work in any halfway decent browser (IE11+). Browsers that
          support CSS Variables ( ~85% of the current browser market share )
          will have the best experience. Browsers without CSS Variable support
          can still have a nice experience with at least some animation, but
          features like index-based staggering may not be feasible without
          JavaScript.
        </div>
      </div>
    </div>
    <div class="scroll-item">
      <h3 data-splitting data-scroll>words</h3>
      <div class="grid">
        <div>
          The words plugin splits an element's text into separate words,
          wrapping each in a &lt;span&gt; populated with CSS variables and data
          attributes.
        </div>
      </div>
    </div>
  </div>

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
import ScrollOut from "scroll-out";
import Splitting from "splitting";
import kSelect from "@/components/kSelect.vue";
import kButton from "@/components/kButton";

import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

export default {
  name: "Grid",
  components: { kSelect, kButton },
  created() {},
  mounted() {
    ScrollOut();
    Splitting({
      target: "[data-splitting]",
      by: "words", // splitting的类型：chars | words | lines
      key: "", // 给css variables添加的前缀
    });
    Splitting({
      target: ".grid",
      by: "items",
      match: "div",
    });
  },
  setup() {
    const size = ref("12px");
    const onChangeSize = (c) => {
      size.value = c;
    };

    const drawerVisible = ref(false);

    const showDrawer = () => {
      drawerVisible.value = true;
    };

    // https://picsum.photos/  获取随机图片站点

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

.grid,
.grid-li {
  list-style: none;
  position: relative;
  margin: 20px 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 300px);
  grid-auto-rows: 200px;
  z-index: 2;
  max-height: 70vh;
  //place-items: center;

  li {
    position: relative;
    p {
      margin: 0;
      padding: 20px;
    }

    /*&::before {
      position: absolute;
      content: "";
      inset: 0 0 0 0;
      background-size: 20px 20px;
      border-radius: 20px;
      background-image: linear-gradient(
          to top,
          rgba(0, 0, 0, 0.3) 1px,
          transparent 1px
        ),
        linear-gradient(to left, rgba(0, 0, 0, 0.3) 1px, transparent 1px);
    }
    &::after {
      position: absolute;
      content: "";
      background: linear-gradient(
        45deg,
        rgba(255, 255, 255, 1) 50%,
        transparent
      );
      inset: 0 0 0 0;
    }*/
  }
}
:root {
  --haha: --anchor1;
  --active: 0;
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

:root:has(li:nth-of-type(1):hover) {
  --haha: --anchor1;
  --active: 1;
}
:root:has(li:nth-of-type(2):hover) {
  --haha: --anchor2;
  --active: 1;
}
:root:has(li:nth-of-type(3):hover) {
  --haha: --anchor3;
  --active: 1;
}
:root:has(li:nth-of-type(4):hover) {
  --haha: --anchor4;
  --active: 1;
}
.anchor-target {
  position: absolute;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  //z-index: -1;
  position-anchor: var(--haha);
  inset: anchor(top) anchor(right) anchor(bottom) anchor(left);
  //top: anchor(top);
  //right: anchor(right);
  //bottom: anchor(bottom);
  //left: anchor(left);
  transition: inset 0.3s, opacity 0.3s;
  border-radius: 8px;
  opacity: var(--active);
}

.scroll-wrapper {
  display: grid;
  grid-gap: 30px;
  width: 800px;
}
h3 {
  margin-bottom: 0;
}
.scroll-item {
  height: 400px;
}
.scroll-item h3 {
  font-size: 20px;
  font-weight: 500;
}
[data-scroll] {
  //overflow: hidden;
}
[data-scroll] .char,
[data-scroll] .word {
  transition: opacity ease 0.5s, transform ease 0.6s;
  transition-delay: calc(0.3s * var(--word-index) / var(--word-total));
}
[data-scroll] .char {
  transition-delay: calc(0.3s * var(--char-index) / var(--char-total));
}
[data-scroll="in"] .char,
[data-scroll="in"] .word {
  opacity: 1;
  transform: translateY(0);
  /* animation: 0.6s ease-in calc(0.2s + (0.04s * var(--char-index))) forwards
  //scrollWord;
  //animation-delay: calc(0.2s + (0.04s * var(--char-index)))*/
}
[data-scroll="out"] .char,
[data-scroll="out"] .word {
  opacity: 0;
  transform: translateY(100%);
  /* animation: 0.6s ease-in calc(0.2s + (0.04s * var(--char-index))) forwards
  //scrollWord;
  //animation-delay: calc(0.2s + (0.04s * var(--char-index)))*/
}
</style>
