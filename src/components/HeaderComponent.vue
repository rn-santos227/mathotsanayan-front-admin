<template>
  <v-app-bar color="purple-darken-3" dark elevation="1" app>
    <v-toolbar-title class="text-h5 font-weight-bold">
      {{ props.title }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="authModule.isAuthenticated" class="mr-10">
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            density="compact"
            icon="mdi-account-circle-outline"
            size="x-large"
          >
          </v-btn>
        </template>
        <v-list density="compact" color="primary" variant="plain">
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-key"></v-icon>
            </template>
            <v-list-item-title>Change Password</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <template v-slot:prepend>
              <v-icon icon="mdi-logout-variant"></v-icon>
            </template>
            <v-list-item-title @click.prevent="logout()">
              Logout
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useAuthModule } from "@/store";
import { useRouter } from "vue-router";

const router = useRouter();

const authModule = useAuthModule();
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const logout = async () => {
  await authModule.logout();
  if (!authModule.isAuthenticated) {
    router.push("/login");
  }
};
</script>
