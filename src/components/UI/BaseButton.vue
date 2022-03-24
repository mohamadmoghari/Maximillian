<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    // type: {
    //   type: String,
    //   //required:true
    // },
    mode: {
      type: String,
      //required:true
    },
  }, //['type', 'mode'],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  background-color: indigo;
  color: white;
  text-align: center;
}

.flat {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  background-color: inherit;
  outline: none;
  color: black;
  border:none;
}
.flat:hover {
  color: white;
  cursor: pointer;
  background-color: blueviolet;
  opacity: 0.5;
  border:2px solid navy;
}
</style>