<template>
    <ul>
    <LearningResounce
      v-for="res in resources"
      :key="res.id"
      :subject="res.title"
      :description="res.description"
      :link="res.link"
    ></LearningResounce>
  </ul>
</template>
<script>
import LearningResounce from './LearningResource.vue'
export default {
    props:['resources'],
    components:{LearningResounce}

}
</script>

<style scoped>
ul{
    list-style: none;
}
</style>