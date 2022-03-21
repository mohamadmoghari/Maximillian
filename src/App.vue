<template>
<the-header title="Remember Me"></the-header>
  <learning-resounces :resources=storedResources></learning-resounces>
</template>

<script>
import LearningResounces from './components/LearningResources/LearningResources.vue';
import TheHeader from './components/Layout/TheHeader.vue'
export default {
  components: { LearningResounces ,TheHeader},
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
*{
  margin: 0;
  padding:0;
}
</style>