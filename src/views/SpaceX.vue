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
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const allRockets = computed(() => store.state.spaceX.lanches);
    const loading = computed(() => store.state.spaceX.loading);

    const getAllRockets = () => {
      store.dispatch("spaceX/getAllLanches");
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
