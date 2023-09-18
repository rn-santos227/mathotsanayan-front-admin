<template>
  <v-app id="inspire">
    <HeaderComponent :title="title" />
    <NavigationComponent />
    <v-main app>
      <router-view />
    </v-main>
    <LoadingComponent v-bind:activate="authModule.isLoading" />
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthModule } from "./store";

import HeaderComponent from "./components/HeaderComponent.vue";
import NavigationComponent from "./components/NavigationComponent.vue";
import LoadingComponent from "./components/dialogs/LoadingComponent.vue";

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

.v-input__control {
  background-color: #fffde7;
}

.v-data-table-header__content > span {
  font-weight: bolder;
}
</style>
