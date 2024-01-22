<template>
  <v-card variant="flat">
    <v-row class="mt-1">
      <v-spacer />
      <v-text-field
        class="mr-4"
        v-model="search"
        label="Search Student"
        density="compact"
        variant="outlined"
      />
    </v-row>
  </v-card>
  <v-divider />
  <v-data-table
    class="w-100"
    :search="search"
    :items="accounts"
    :headers="headers"
    :loading="useAccountsModule().isTableLoading"
    item-value="id"
  >
    <template v-slot:item="{ item }">
      <tr>
        <td class="text-left">
          {{ item.email }}
        </td>
        <td class="text-left">
          {{ item.type_name }}
        </td>
        <td class="text-left">
          {{ getOwnerName(item.owner) }}
        </td>
        <td>
          <v-btn block color="purple-darken-3" variant="outlined">
            <v-icon size="large">mdi-dots-horizontal</v-icon>
            <v-menu activator="parent">
              <v-list density="compact" variant="plain">
                <PasswordView v-bind:acount="item" />
              </v-list>
            </v-menu>
          </v-btn>
        </td>
      </tr>
    </template>
  </v-data-table>
  <SuccessDialogComponent ref="success" />
  <ErrorDialogComponent ref="error" />
  <LoadingDialogComponent v-bind:activate="useAccountsModule().isLoading" />
</template>

<script setup lang="ts">
import { computed, onMounted, provide, ref } from "vue";
import { useAccountsModule } from "@/store";
import { getOwnerName } from "@/helpers/instance";

import PasswordView from "./PasswordView.vue";

import SuccessDialogComponent from "@/components/dialogs/SuccessDialogComponent.vue";
import ErrorDialogComponent from "@/components/dialogs/ErrorDialogComponent.vue";
import LoadingDialogComponent from "@/components/dialogs/LoadingDialogComponent.vue";

import Account from "@/types/Account";
import headers from "@/helpers/headers/header_accounts";

const success = ref({
  show: (message: string) => {
    return message;
  },
});

const error = ref({
  show: (message: string) => {
    return message;
  },
});

const search = ref<string>("");
const accountModule = useAccountsModule();
const accounts = computed<Account[]>(() => accountModule.getAccounts);

onMounted(async () => {
  await useAccountsModule().read();
});

provide("success", success);
provide("error", error);
</script>
