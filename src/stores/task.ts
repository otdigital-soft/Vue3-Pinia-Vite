import { defineStore } from "pinia";
import axios from "axios";

export const useTaskStore = defineStore({
  id: "task",
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
