<template>
  <v-container class="fill-height" fluid>
    <v-card width="35%" class="ma-auto">
      <v-card-title class="text-h6 mb-4">
        Mathotsanayan Admin Login
      </v-card-title>
      <v-card-text class="text--primary">
        <v-text-field
          v-model="login.email"
          label="Email"
          density="compact"
          variant="outlined"
        />
        <v-text-field
          v-model="login.password"
          label="Password"
          density="compact"
          variant="outlined"
          append-icon="md-checkbox-marked-circle"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
        />
      </v-card-text>
      <v-card-actions class="text-right">
        <v-btn block variant="elevated" color="yellow-accent-4"> Login </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Login from "@/types/Login";

const login = ref<Login>({
  email: "",
  password: "",
});

const show = ref<boolean>(false);
</script>
