<template>
  <div class="container" @click="$emit('close')">
    <dialog class="dialog">
      <slot name="header">
        <header>
          <h3>{{ title }}</h3>
        </header>
      </slot>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="action">
          <base-button @click="closeDialog">close</base-button>
        </slot>
      </menu>
    </dialog>
  </div>
</template>
<script>
export default {
  emits: ["close"],
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  methods: {
    closeDialog() {
      this.emit("close");
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  background-color: blueviolet;
  min-height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

section {
  padding-top: 2rem;
  text-align: center;
  min-height: 10rem;
}

.dialog {
  width: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 15px;
  border: 2px solid black;
  overflow: hidden;
}
.container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
menu {
  margin-bottom: 1rem;
}
</style>