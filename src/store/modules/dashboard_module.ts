import Dashboard from "@/interfaces/Dashboard";
import GraphPie from "@/interfaces/GraphPie";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useDashboardModule = defineStore("dashboard", {
  state: () => ({
    isLoading: false as boolean,
    dashboard: {} as Dashboard,
    graphPie: {} as GraphPie,
  }),

  actions: {
    setDashboard(dashboard: Dashboard): void {
      this.dashboard = dashboard;
    },

    setGraphPie(graphPie: GraphPie): void {
      this.graphPie = graphPie;
    },

    async read() {
      const response = await authenticatedFetch(api.DASHBOARD.READ);
      const data = await response.json();
      const { dashboard } = data;
      this.setDashboard(dashboard);
    },

    async ratio() {
      const response = await authenticatedFetch(api.DASHBOARD.RATIO);
      const data = await response.json();
      const { graph } = data;
      this.setGraphPie(graph);
    },
  },

  getters: {
    getDashboard(): Dashboard {
      return this.dashboard;
    },
  },
});
