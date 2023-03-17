import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    users: [],
    isLoggedIn: false,
  }),
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
  actions: {
    async fetchUsers() {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.users = data.data;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    checkLoggedInStatus() {
      if (localStorage.getItem("user")) {
        this.isLoggedIn = true;
      }
    },
  },
});
