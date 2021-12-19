<template>
  <div :style="{ 'font-size': size }">bbbbbb</div>
  <k-select @change-size="onChangeSize" />
  <k-button @click="showDrawer">aaa</k-button>
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
  methods: {},
};
</script>

<style scoped>
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
</style>
