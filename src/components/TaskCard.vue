<template>
  <div
    class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white mt-3"
    :class="[{ 'opacity-50': task.completed }]"
  >
    <router-link :to="{ name: 'task', params: { task_id: task.gid } }">
      <div class="flex justify-between">
        <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">
          {{ task.name }}{{ task.gid }}
        </p>

        <span class="flex justify-center">
          <!-- <HeartIconSolid v-if="task.hearted" class="text-red-600 h-5 w-5 inline mr-1" />
          <HeartIcon v-else class="text-gray-300 h-5 w-5 inline mr-1" />
           -->
          <BadgeCheckIconSolid
            v-if="task.completed"
            class="text-green-600 h-5 w-5 inline ml-2"
          />
          <BadgeCheckIcon v-else class="text-gray-300 h-5 w-5 inline" />
        </span>
      </div>

      <div class="flex justify-between items-center">
        <div class="mt-1 flex items-center text-gray-400">
          <div
            v-if="task.due_at"
            class="mt-2 flex items-center text-xs"
            :class="[{ 'text-red-600': isTaskLate }]"
          >
            <CalendarIcon class="mr-1.5 h-4 w-4 inline" />
            {{ task.due_at }}
          </div>
          <div
            v-if="!isCommentsEmpty"
            class="mt-2 flex items-center text-xs ml-4"
          >
            <ChatIcon class="mr-1.5 h-4 w-4 inline" />
            {{ task.comments }}
          </div>
          <div
            v-if="!isCommentsEmpty"
            class="mt-2 flex items-center text-xs ml-4"
          >
            <PaperClipIcon class="mr-1.5 h-4 w-4 inline" />
            {{ task.comments }}
          </div>
        </div>
        <div v-if="task.priority" class="mt-2 flex items-center text-xs ml-4">
          <span
            class="w-2 h-2 rounded-full mr-1.5"
            :class="
              task.priority == 'Élevée'
                ? 'bg-red-400'
                : task.priority == 'Moyenne'
                ? 'bg-orange-400'
                : task.priority == 'Faible'
                ? 'bg-green-400'
                : 'bg-primary-400'
            "
          ></span>
          <span
            :class="
              task.priority == 'Élevée'
                ? 'text-red-400'
                : task.priority == 'Moyenne'
                ? 'text-orange-400'
                : task.priority == 'Faible'
                ? 'text-green-400'
                : 'text-primary-400'
            "
            >{{ task.priority }}</span
          >
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import {
  ChatIcon,
  CalendarIcon,
  HeartIcon,
  BadgeCheckIcon,
  PaperClipIcon,
} from "@heroicons/vue/outline";
import {
  HeartIcon as HeartIconSolid,
  BadgeCheckIcon as BadgeCheckIconSolid,
} from "@heroicons/vue/solid";
export default {
  components: {
    HeartIcon,
    HeartIconSolid,
    BadgeCheckIcon,
    BadgeCheckIconSolid,
    CalendarIcon,
    ChatIcon,
    PaperClipIcon,
  },
  props: {
    task: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isCommentsEmpty() {
      return !this.task.comments || this.task.comments === "0";
    },
    isTaskLate() {
      const timeLate = 7 * 24 * 60 * 60 * 1000;
      return (
        new Date().getTime() - new Date(this.task.due_at).getTime() > timeLate
      );
    },
  },
};
</script>
