<template>
  <div class="min-h-full">
    <Menu />

    <header class="bg-white shadow">
      <div class="mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">{{ name }}</h1>
      </div>
    </header>
    <main>
      <div class="mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <router-view />
      </div>
      <UsersnapProvider />
    </main>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import UsersnapProvider from "@/services/UsersnapProvider.vue";

export default {
  name: "MainView",
  components: {
    Menu,
    UsersnapProvider,
  },
  data() {
    return {
      name: "Name project",
    };
  },
};
</script>
