<template>
  <teleport to="body">
    <base-dialog
      title="delete item"
      v-if="userWantToDelete"
      @close="closeDialog"
    >
      <template #default>
        <p>Are you delete this item?</p>
      </template>
      <template #action>
        <base-button @click="userConfirm">yes</base-button>
        <base-button @click="userWantToDelete = false">no</base-button>
      </template>
    </base-dialog>
  </teleport>
  <li>
    <base-card>
      <header>
        <h3>{{ subject }}</h3>
        <base-button mode="flat" type="button" @click="userDelete"
          >Delete</base-button
        >
      </header>
      <p>{{ description }}</p>
      <nav><a :href="link">View Resource</a></nav>
    </base-card>
  </li>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";
export default {
  components: { BaseCard },
  emits: ["deleteItem"],
  props: {
    subject: { type: String },
    description: { type: String },
    link: { type: String },
  },
  data() {
    return {
      userWantToDelete: false,
    };
  },
  methods: {
    userDelete() {
      this.userWantToDelete = true;
    },
    userConfirm() {
      this.$emit("deleteItem");
      this.userWantToDelete = false;
    },
    closeDialog()
    {
      this.userWantToDelete = false
    }
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
}

header {
  display: flex;
  justify-content: space-between;
}

a {
  color: orange;
  text-decoration: none;
}
a:hover {
  color: blueviolet;
  font-weight: bolder;
}
</style>