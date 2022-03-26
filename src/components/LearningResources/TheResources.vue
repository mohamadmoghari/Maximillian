<template>
  <base-card>
    <base-button :mode="selectedTabModeForLearningResources"
    @click="setSelectedTab('LearningResources')"
      ><router-link to="/LearningResources">Resources</router-link></base-button
    >
    <base-button
      @click="setSelectedTab('AddResource')"
      :mode="selectedTabModeForAddResource"
      ><router-link to='/AddResource'>Add Resource</router-link></base-button
    >
  </base-card>
  <!-- <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive> -->

  <router-view></router-view>
</template>
<script>
// import AddResource from "./AddResource.vue";
// import LearningResources from "./LearningResources.vue";
export default {
  //components: { AddResource, LearningResources },
  provide() {
    return {
      resources: this.storedResources,
      AddData: this.SaveData,
      RemoveData: this.RemoveData,
    };
  },
  data() {
    return {
       selectedTab: "LearningResources",
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
  computed: {
    selectedTabModeForAddResource() {
      return this.selectedTab === "AddResource" ? "flat" : null;
    },
    selectedTabModeForLearningResources() {
      return this.selectedTab === "LearningResources" ? "flat" : null;
    },
  },
  methods: {
     setSelectedTab(tab) {
       this.selectedTab = tab;
     },
    SaveData(title, desction, link) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        desction: desction,
        link: link,
      };

      this.storedResources.unshift(newResource);
      //this.selectedTab = "LearningResources";
      this.$router.push('/LearningResources')
    },
    RemoveData(id) {
      const selectedIndex = this.storedResources.findIndex((t) => t.id == id);
      this.storedResources.splice(selectedIndex, 1);
    },
  },
};
</script>