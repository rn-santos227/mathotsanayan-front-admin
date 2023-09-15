<template>
  <v-app id="inspire">
    <HeaderComponent v-bind:title="title" />
    <NavigationComponent />
    <v-main app>
      <router-view />
    </v-main>
    <v-overlay :opacity="0.75" :value="authModule.isLoading">
      <v-progress-circular indeterminate width="16" size="128">
        Loading
      </v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import NavigationComponent from "./components/NavigationComponent.vue";
import { useAuthModule } from "./store";

const authModule = useAuthModule();
const title = ref<string>("Mathotsanayan Admin");

async function fetchUserData() {
  try {
    await authModule.fetchUserData();
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchUserData();
</script>

<style>
.base {
  background-color: #fffde7;
}
</style>
