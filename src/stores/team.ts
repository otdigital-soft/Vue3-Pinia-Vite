import { defineStore } from "pinia";
import axios from "axios";

export const useTeamStore = defineStore({
  id: "team",
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
