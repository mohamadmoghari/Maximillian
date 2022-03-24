<template>
<teleport to="body">
  <base-dialog title="Some things is missing" v-if="formIsValid === false"
  @close='confirmErrorDialog'>
    <template #default>
      <p>some eletem not fill</p>
      <p>you should fill all input text</p>
    </template>
    <template #action>
      <base-button @click="confirmErrorDialog" mode="">OK</base-button>
    </template>
  </base-dialog>
  </teleport>
  <form @submit.prevent="submitData">
    <base-card>
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" ref="inputTitle" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea rows="3" id="description" ref="inputDescription" />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" ref="inputLink" />
      </div>
      <base-button type="submit" mode="">Add</base-button>
    </base-card>
  </form>
</template>

<script>
export default {
  inject: ["AddData"],
  data() {
    return {
      formIsValid: true,
    };
  },
  methods: {
    submitData() {
      const title = this.$refs.inputTitle.value;
      const description = this.$refs.inputDescription.value;
      const link = this.$refs.inputLink.value;
      if (
        title.trim() === "" ||
        description.trim() === "" ||
        link.trim() === ""
      ) {
        this.formIsValid = false;
        return;
      }

      this.AddData(title, description, link);
    },
    confirmErrorDialog() {
      this.formIsValid = true;
    },
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input,
textarea {
  width: 100%;
  margin-bottom: 0.75rem;
  border-radius: 5px;
  border: 1px solid navy;
  color: black;
  font-size: 2rem;
}

input:focus,
textarea:focus {
  background-color: rgba(0, 0, 150, 0.2);
  outline: none;
  border: 1px solid navy;
  color: black;
}
.form-control {
  margin-bottom: 0.3rem;
}
</style>>