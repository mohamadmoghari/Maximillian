<template>
  <ul>
    <learning-resounce
      v-for="res in resources"
      :key="res.id"
      :subject="res.title"
      :description="res.description"
      :link="res.link"
      @deleteItem="deleteItem(res.id)"
    ></learning-resounce>
  </ul>
</template>
<script>
import LearningResounce from "./LearningResource.vue";
export default {
  inject: ["resources","RemoveData"],
  components: { LearningResounce },
  methods: {
    deleteItem(id) {
      this.RemoveData(id);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
</style>