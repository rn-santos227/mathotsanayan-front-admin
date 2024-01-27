<template>
  <v-card class="ma-4" elevation="3">
    <v-card-title>
      <span class="text-h6 font-weight-bold text-purple">
        Modules Passing-Failure Table
      </span>
    </v-card-title>
    <v-divider />
    <div>
      <v-table>
        <thead>
          <tr>
            <th>Module Name</th>
            <th>Passed</th>
            <th>Failed</th>
            <th>Passing Rate</th>
          </tr>
        </thead>
        <tbody></tbody>
      </v-table>
    </div>
  </v-card>
</template>

<script setup lang="ts"></script>
