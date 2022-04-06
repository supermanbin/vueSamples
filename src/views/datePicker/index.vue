<template>
  <DatePicker v-model="range" mode="date" isRange :columns="2" :step="1" />
  <ul>
    <li v-for="item in lists" :key="item.number">{{ item.number }}</li>
  </ul>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    let range = ref({
      start: new Date(2022, 2, 20),
      end: new Date(2022, 3, 2),
    });

    let lists = ref([]);

    const gerneratorList = () => {
      for (let index = 1; index <= 10; index++) {
        const maskStr = "00000000";
        const endIndex = maskStr.length - index.toString().length;
        lists.value.push({
          number: maskStr.substring(0, endIndex) + index,
        });
      }
    };

    onMounted(gerneratorList);

    return { range, lists, gerneratorList };
  },
};
</script>
