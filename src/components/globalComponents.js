import WebsiteSPA from "./WebsiteSPA.vue";
import Modal from "./Modal.vue";

export function registerGlobalComponents(app) {
  app.component("WebsiteSPA", WebsiteSPA);
  app.component("Modal", Modal);
}
