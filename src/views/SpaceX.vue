<template>
  <h1>SpaceX</h1>
  <a-list :data-source="allRockets">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta :description="item.description"> </a-list-item-meta>
        <template #extra>
          <img width="272" alt="logo" :src="item.flickr_images[0]" />
        </template>
      </a-list-item>
    </template>
  </a-list>
</template>

<script>
import baseAxios from "@/httpClient/http.js";
import { ref, onMounted } from "vue";

export default {
  setup() {
    let allRockets = ref([]);
    const getAllRockets = async () => {
      const response = await baseAxios.get("/v4/rockets");
      console.log(response);
      allRockets.value = response.data;
      console.log("allRockets=======>", allRockets);
    };

    onMounted(getAllRockets);

    return {
      allRockets,
      getAllRockets,
    };
  },
  watch: {
    data: "getAllRockets",
  },
};
</script>
