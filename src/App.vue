<template>
  <v-app id="inspire">
    <HeaderComponent v-bind:title="title" />
    <v-main app>
      <router-view />
    </v-main>
    <v-overlay :opacity="0.75" :value="isLoading">
      <v-progress-circular indeterminate width="16" size="128">
        Loading
      </v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";

const title = ref<string>("Mathotsanayan Admin");

let isLoading = ref<boolean>(false);
</script>
