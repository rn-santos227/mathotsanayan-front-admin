<template>
  <div v-if="authModule.isAuthenticated">
    <v-navigation-drawer v-model="drawer" :rail="mini" permanent>
      <v-list-item
        title="ADMIN NAVIGATION"
        :subtitle="authModule.admin?.email"
        nav
      >
        <template v-slot:append>
          <v-btn
            color="purple-darken-3"
            size="small"
            variant="text"
            :icon="mini ? 'mdi-chevron-right' : 'mdi-chevron-left'"
            @click.stop="mini = !mini"
          ></v-btn>
        </template>
      </v-list-item>
      <v-divider />
      <v-list density="compact" nav>
        <template v-for="(route, key_1) in routesItem" :key="key_1">
          <v-list-item
            v-if="route.children.length <= 0"
            :class="{ 'my-active-class': isActive(route.route) }"
            :to="route.route"
            :prepend-icon="route.icon"
            :title="route.text"
          ></v-list-item>
          <v-list-group v-else :key="key_1" :value="route.text">
            <template v-slot:activator="{ props }">
              <v-list-item
                v-bind="props"
                :prepend-icon="route.icon"
                :title="route.text"
              ></v-list-item>
            </template>
            <v-list-item
              v-for="(child, key_2) in route.children"
              :class="{ 'my-active-class': isActive(child.route) }"
              :key="key_2"
              :title="child.text"
              :prepend-icon="mini ? child.icon : ''"
              :append-icon="child.icon"
              :to="child.route"
            >
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthModule } from "@/store";
import { useRoute } from "vue-router";
import routesItem from "@/helpers/drawer";

const router = useRoute();
const drawer = ref<boolean>(true);
const mini = ref<boolean>(false);

const authModule = useAuthModule();
const isActive = (route: string) => {
  return router.path === route;
};
</script>

<style scoped>
.my-active-class {
  background-color: #6a1b9a;
  color: #ffffff;
}
</style>
