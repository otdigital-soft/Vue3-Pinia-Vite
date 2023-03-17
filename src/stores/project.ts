import { defineStore } from "pinia";
import axios from "axios";

export const useProjectStore = defineStore({
  id: "project",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
