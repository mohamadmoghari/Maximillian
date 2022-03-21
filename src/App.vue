<template>
  <LearningResounces :resources=storedResources></LearningResounces>
</template>

<script>
import LearningResounces from './components/LearningResources/LearningResources.vue';
export default {
  components: { LearningResounces },
  data() {
    return {
      storedResources: [
        {
          id: "official-guid",
          title: "official Guid",
          description: "the official vue js documentaion",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "google Guid",
          description: "the official google documentaion",
          link: "https://google.com",
        },
      ],
    };
  },
};
</script>
<style>
body{
  margin-left: 1rem;
  margin-right:1rem
}
</style>