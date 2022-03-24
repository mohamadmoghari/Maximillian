<template>
<the-header title="Remember Me"></the-header>
<the-resources></the-resources>
</template>

<script>
import TheResources from'./components/LearningResources/TheResources.vue'
import TheHeader from './components/Layout/TheHeader.vue'

export default {
  components: { TheHeader,TheResources},
};
</script>
<style>
*{
  margin: 0;
  padding:0;
}
</style>