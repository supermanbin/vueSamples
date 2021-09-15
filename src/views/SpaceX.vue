<template>
  <h1>SpaceX</h1>
  <a-list :data-source="allRockets" :loading="loading">
    <template #renderItem="{ item }">
      <a-list-item v-if="item.details">
        <a-list-item-meta :description="item.details">
          <!-- <template #title>
            {{ item.title }}
          </template> -->
        </a-list-item-meta>
        <!-- <template #extra>
          <img width="272" alt="logo" :src="item.flickr_images[0]" />
        </template> -->
      </a-list-item>
    </template>
  </a-list>
</template>

<script>
import { getLanches } from "@/services/index.js";
import { ref, onMounted } from "vue";

export default {
  setup() {
    let allRockets = ref([]);
    let loading = ref(true);
    const getAllRockets = async () => {
      const response = await getLanches();
      loading.value = false;
      allRockets.value = response.data;
      console.log("allRockets=======>", allRockets);
    };

    onMounted(getAllRockets);

    return {
      loading,
      allRockets,
      getAllRockets,
    };
  },
};
</script>
