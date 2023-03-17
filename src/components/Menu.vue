<template>
  <nav class="bg-gray-800">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="filter brightness-0 invert h-8"
              src="@/assets/logo-client.svg"
              alt="Workflow"
            />
          </div>
          <div class="ml-10 flex items-baseline space-x-4">
            <router-link
              class="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              :to="{ name: 'board' }"
              ><ViewBoardsIcon
                class="h-4 w-4 inline mr-4"
                aria-hidden="true"
              />Tableau</router-link
            >

            <router-link
              class="text-gray-300 hover:bg-gray-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              :to="{ name: 'overview' }"
              ><ArchiveIcon
                class="h-4 w-4 inline mr-4"
                aria-hidden="true"
              />Résumé</router-link
            >
          </div>
        </div>

        <div class="ml-4 flex items-center md:ml-6">
          <router-link
            :to="{ name: 'new' }"
            class="bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white px-3 py-2 rounded-md"
          >
            <span class="sr-only">Ajouter ticket</span>
            <PlusIcon class="h-4 w-4 inline mr-4" aria-hidden="true" />Ajouter
            ticket
          </router-link>

          <UserMenu :title="title" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import SwitchLocal from "@/components/SwitchLocal.vue";
import {
  PlusIcon,
  CogIcon,
  ViewBoardsIcon,
  ArchiveIcon,
  LogoutIcon,
} from "@heroicons/vue/outline";
import UserMenu from "@/components/UserMenu.vue";
export default {
  name: "Menu",
  components: {
    UserMenu,
    PlusIcon,
    CogIcon,
    ArchiveIcon,
    LogoutIcon,
    ViewBoardsIcon,
    // SwitchLocal,
  },
  data() {
    return {
      project_id: "1",
      title: "test name",
    };
  },
};
</script>
