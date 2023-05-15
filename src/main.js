import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";

import { registerGlobalComponents } from "./components/globalComponents";

const app = createApp(App);

registerGlobalComponents(app);

app.mount("#app");
