import "material-design-icons-iconfont/dist/material-design-icons.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { pinia } from "./store";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    icons: {
      iconfont: "md",
    },
  },
});

createApp(App).use(pinia).use(router).use(vuetify).mount("#app");
