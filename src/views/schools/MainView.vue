<template>
  <v-container class="base fill-height" fluid>
    <v-card class="ma-4" width="100%" height="95%">
      <v-card
        class="rounded-0 rounded-t mb-3 py-2"
        color="purple-darken-3"
        variant="flat"
      >
        <v-card-title>
          <v-row>
            <v-col>
              <span class="text-h5 font-weight-bold"> Schools Manager </span>
            </v-col>
            <v-col class="d-flex">
              <v-spacer />
              <CreateViewVue />
            </v-col>
          </v-row>
        </v-card-title>
      </v-card>
      <v-card-text>
        <TableViewVue />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import CreateViewVue from "./CreateView.vue";
import TableViewVue from "./TableView.vue";
</script>
