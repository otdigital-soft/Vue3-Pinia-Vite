<template>
  <div
    class="flex flex-col bg-white shadow-md p-6 rounded-2xl border-2 border-gray-50 transition duration-300 ease-in-out transform hover:-translate-y-3 hover:shadow-xl"
  >
    <router-link :to="{ name: 'board', params: { project_id: project.gid } }">
      <h2 class="font-bold text-gray-600 text-center capitalize">
        {{ project.title }}
      </h2>
      <div class="my-6">
        <div class="flex flex-row space-x-4 items-center justify-center">
          <ArchiveIcon class="w-10 h-10 fill-stroke" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { ArchiveIcon } from "@heroicons/vue/outline";
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    ArchiveIcon,
  },
};
</script>
