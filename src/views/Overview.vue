<template>
  <div class="flex justify-center">
    <div class="flex overflow-x-scroll">

      <div
        v-for="column in columns"
        :key="column.name"
        class="bg-gray-100 rounded-lg px-3 pt-3 pb-10 column-width rounded mr-4"
      >
        <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{column.name}}</p>
        <!-- Draggable component comes from vuedraggable. It provides drag & drop functionality -->
        <draggable
          class="list-group min-h-full"
          v-model="column.tasks"
          v-bind="dragOptions"
          @start="drag = true"
          @end="drag = false"
          item-key="order"
        >
        <template #item="{ element }">
          <TaskCard
            :task="element"
          />
        </template>
      </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TaskCard from "@/components/TaskCard.vue";
import TaskModal from "@/components/TaskModal.vue";
export default {
  name: "Overview",
  components: {
    TaskCard,
    TaskModal,
    draggable,
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost-card"
      };
    }
  },
  data() {
    return {
      drag: false,
      columns: [
        {
          name: "Backlog",
          tasks: [
            {
              gid: "1",
              name: "Add discount code to checkout page",
              notes: "test",
              start_at: "01/01/2022",
              due_at: "01/08/2023",
              type: "Feature Request",
              priority: "Élevée",
              hearted: true,
              completed: true,
              memberships_section: {
                gid: "1201147062766211",
                name: "New request"
              },
              comments: 21,
            },
            {
              gid: "2",
              name: "Provide documentation on integrations",
              notes: "test",
              start_at: "01/01/2022",
              due_at: "Sep 12",
              completed: true,
              comments: 21,
            },
            {
              gid: "3",
              name: "Design shopping cart dropdown",
              notes: "test",
              start_at: "01/01/2022",
              due_at: "Sep 9",
              type: "Design",
              priority: "Élevée",
              hearted: true,
              comments: 21,
            },
            {
              gid: "5",
              name: "Test checkout flow",
              notes: "test",
              start_at: "01/01/2022",
              due_at: "Sep 15",
              type: "QA",
              priority: "Élevée",
              comments: 21,
            }
          ]
        },
        {
          name: "In Progress",
          tasks: [
            {
              gid: "6",
              name: "Design shopping cart dropdown",
              notes: "test",
              start_at: "01/01/2022",
              due_at: "Sep 9",
              type: "Design",
              priority: "Moyenne",
              comments: 21,
            },
            {
              gid: "8",
              name: "Provide documentation on integrations",
              notes: "test",
              start_at: "01/01/2022",
              due_at: "Sep 12",
              type: "Backend",
              priority: "Moyenne",
              hearted: true,
              comments: 21,
            }
          ]
        },
        {
          name: "Review",
          tasks: [
            {
              gid: "9",
              name: "Provide documentation on integrations",
              notes: "test",
              start_at: "01/01/2022",
              due_at: "Sep 12",
              comments: 21,
            },
            {
              gid: "10",
              name: "Design shopping cart dropdown",
              notes: "test",
              start_at: "01/01/2022",
              due_at: "Sep 9",
              type: "Design",
              priority: "Moyenne",
              completed: true
            },
            {
              gid: "12",
              name: "Design shopping cart dropdown",
              notes: "test",
              start_at: "01/01/2022",
              due_at: "Sep 9",
              type: "Design",
              priority: "Faible",
              comments: 21,
            },
          ]
        },
        {
          name: "Done",
          tasks: [
            {
              gid: "14",
              name: "Add discount code to checkout page",
              notes: "test",
              start_at: "01/01/2022",
              due_at: "Sep 14",
              type: "Feature Request",
              priority: "Faible"
            },
            {
              gid: "15",
              name: "Design shopping cart dropdown",
              notes: "test",
              start_at: "01/01/2022",
              due_at: "Sep 9",
              type: "Design",
              priority: "Faible"
            },
            {
              gid: "16",
              name: "Add discount code to checkout page",
              notes: "test",
              start_at: "01/01/2022",
              due_at: "Sep 14",
              type: "Feature Request",
              priority: "Faible"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.column-width {
  min-width: 320px;
  width: 320px;
}
.ghost-card {
  @apply border opacity-50 border-gray-200 bg-gray-200
}
</style>
