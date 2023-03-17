<template>
  <div class="min-h-full">
    <nav class="bg-white">
      <div class="mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link to="/projects"
                ><img class="h-8 w-8" src="@/assets/logo.svg" alt="Workflow"
              /></router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <header class="bg-white shadow">
      <div class="mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Projects</h1>
      </div>
    </header>
    <main
      class="mx-auto mt-5 py-6 px-4 sm:px-6 lg:px-8 max-w-screen-lg grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
    >
      <div
        class="bg-white border-4 border-gray-300 text-gray-400 border-dashed rounded-2xl flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:-translate-y-3 hover:shadow-xl p-6 cursor-pointer"
      >
        <PlusIcon class="w-10 h-10" />
        <p class="font-bold text-center">
          {{ $t("Connecter un nouveau projet") }}
        </p>
      </div>

      <div v-for="project in projects" :key="project.gid">
        <ProjectCard :project="project" />
      </div>
    </main>
  </div>
</template>

<script>
import { PlusIcon } from "@heroicons/vue/outline";
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  name: "Projects",
  components: {
    ProjectCard,
    PlusIcon,
  },
  data() {
    return {
      projects: [
        {
          gid: "1",
          title: "test project",
        },
        {
          gid: "2",
          title: "test project 2",
        },
      ],
    };
  },
};
</script>
