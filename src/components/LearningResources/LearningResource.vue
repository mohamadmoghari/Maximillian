<template>
    <li>
        <base-card>
        <header>
            <h3>{{subject}}</h3>
            <base-button mode="flat"  type="button">Delete</base-button>
        </header>
        <p>{{description}}</p>
        <nav><a :href="link">View Resource</a></nav>
        </base-card>
    </li>
</template>

<script>
export default {
  props: {
    subject: { type: String },
    description: { type: String },
    link: { type: String },
  },
};
</script>

<style scoped>
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