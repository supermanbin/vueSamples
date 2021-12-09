<template>
  <div :style="{ 'font-size': color }">bbbbbb</div>
  <k-select @change-size="onChangeSize" />
  <k-button>aaa</k-button>
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
    const color = ref("12px");
    const onChangeSize = (c) => {
      color.value = c;
    };
    return { color, onChangeSize };
  },
  methods: {},
};
</script>
