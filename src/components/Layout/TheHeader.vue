<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
header {
  width: 100%;
  min-height: 5rem;
  background-color: brown;
  display: flex;
  justify-content: center;
  align-items: center;
}
header h1 {
  color: white;
}
</style>