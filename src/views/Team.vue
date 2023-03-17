<template>
  <div class="mx-auto">
    <h2 class="text-2xl font-bold text-gray-900">Team</h2>

    <div class="relative overflow-x-auto">
      <div class="p-4 flex items-center justify-between">
        <label for="table-search" class="sr-only">Search</label>
        <div class="w-full md:max-w-lg relative mt-1">
          <input
            v-model="filter"
            type="search"
            id="table-search"
            class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5"
            v-bind:placeholder="$t('Rechercher parmi les membres')"
          />
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <SearchIcon class="w-5 h-5 text-gray-500" />
          </span>
        </div>
        <button
          class="ml-5 bg-primary-500 text-white py-3 px-3 border border-primary-500 rounded-md text-sm leading-4 font-medium hover:bg-white hover:text-primary-500 min-w-max cursor-pointer"
          @click="teamModal = true"
        >
          Inviter de nouveaux membres
        </button>
      </div>
      <Modal
        v-show="teamModal"
        title="Inviter un membre"
        button="Inviter"
        @on-close="teamModal = false"
        @on-validate="addTeam"
      >
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-3">
            <input
              id="firstname"
              name="firstname"
              type="text"
              class="form-input w-full rounded"
              placeholder="Prénom"
            />
          </div>

          <div class="col-span-3">
            <input
              id="lastname"
              name="lastname"
              type="text"
              class="form-input w-full rounded"
              placeholder="Nom"
            />
          </div>

          <div class="col-span-6">
            <input
              id="email"
              name="email"
              type="email"
              class="form-input w-full rounded"
              placeholder="Email"
            />
          </div>

          <div class="col-span-3">
            <select name="priority" class="form-select rounded w-full">
              <option>Admin</option>
              <option>Utilisateur</option>
            </select>
          </div>
        </div>
      </Modal>

      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-all-search" class="sr-only"
                  >checkbox</label
                >
              </div>
            </th>
            <th scope="col" class="px-6 py-3 font-semibold">Membres</th>
            <th scope="col" class="px-6 py-3 font-semibold">Statut</th>
            <th scope="col" class="px-6 py-3 font-semibold">Role</th>
            <th scope="col" class="px-6 py-3 font-semibold">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="membre in filteredMembers"
            :key="membre.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="w-4 p-4">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label for="checkbox-table-search-1" class="sr-only"
                  >checkbox</label
                >
              </div>
            </td>
            <td
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              v-html="highlightMatches(membre.email)"
            ></td>
            <td class="px-6 py-4">
              <select
                v-model="membre.status"
                name="status"
                class="form-select rounded"
              >
                <option>Active</option>
                <option>Removed</option>
              </select>
            </td>
            <td class="px-6 py-4">
              <select
                v-model="membre.role"
                name="role"
                class="form-select rounded"
              >
                <option>Admin</option>
                <option>User</option>
              </select>
            </td>
            <td class="px-6 py-4 text-right">
              <router-link
                :to="{ name: 'profil', params: { user_id: membre.id } }"
                class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                >Editer</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { SearchIcon } from "@heroicons/vue/outline";
import Modal from "@/components/Modal.vue";
export default {
  name: "Team",
  components: {
    SearchIcon,
    Modal,
  },
  data() {
    return {
      teamModal: false,
      filter: "",
      members: [
        {
          id: "0",
          email: "florent@le.studio",
          status: "Active",
          role: "Admin",
        },
        {
          id: "1",
          email: "florent@le.studio",
          status: "Removed",
          role: "User",
        },
      ],
    };
  },
  methods: {
    test(event) {
      console.log(event);
    },
    highlightMatches(text) {
      const matchExists = text
        .toLowerCase()
        .includes(this.filter.toLowerCase());
      if (!matchExists) return text;

      const re = new RegExp(this.filter, "ig");
      return text.replace(
        re,
        (matchedText) => `<strong>${matchedText}</strong>`
      );
    },
    addTeam() {
      this.teamModal = false;
    },
  },
  computed: {
    filteredMembers() {
      return this.members.filter((member) => {
        const email = member.email.toLowerCase();
        const status = member.status.toLowerCase();
        const role = member.role.toLowerCase();
        const searchTerm = this.filter.toLowerCase();

        return (
          email.includes(searchTerm) ||
          status.includes(searchTerm) ||
          role.includes(searchTerm)
        );
      });
    },
  },
};
</script>
