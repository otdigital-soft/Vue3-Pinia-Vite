<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div
      class="lg:flex lg:items-center lg:justify-between mx-auto max-w-screen-md mb-10"
    >
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold text-gray-900">{{ task.name }}</h2>

          <label
            for="toggle_button"
            class="ml-5 bg-white py-2 px-3 border rounded-md text-sm leading-4 font-medium hover:bg-completed-500 hover:text-white hover:border-completed-500 min-w-max cursor-pointer"
            :class="{
              'bg-completed-500 text-white border-completed-500':
                task.completed,
            }"
          >
            <span v-if="task.completed">
              <BadgeCheckIcon class="mr-1.5 h-4 w-4 inline" />
              Tache terminée
            </span>
            <span v-else>
              <CheckIcon class="mr-1.5 h-4 w-4 inline" />
              Marquer comme terminée
            </span>
            <input
              type="checkbox"
              id="toggle_button"
              v-model="checkedValue"
              class="hidden"
            />
          </label>

          <button
            type="button"
            class="ml-5 bg-white py-2 px-3 border rounded-md text-sm leading-4 font-medium hover:bg-red-500 hover:text-white hover:border-red-500 min-w-max cursor-pointer"
            @click="removeModal = true"
          >
            <XIcon class="h-4 w-4 inline" />
          </button>
          <Modal
            v-show="removeModal"
            title="Supprimer ticket"
            type="info"
            button="Supprimer"
            @on-close="removeModal = false"
            @on-validate="removeModal = false"
          >
            Êtes-vous sûr de vouloir supprimer ce ticket? Tous ses données
            seront définitivement supprimées. Cette action ne peut pas être
            annulée.
          </Modal>
        </div>

        <div class="my-4 max-w-max">
          <badge v-if="task.priority" :color="badgePriorityColor"
            >prioritée : {{ task.priority }}</badge
          >
        </div>

        <div
          class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6 text-gray-500"
        >
          <div class="mt-2 flex items-center text-sm">
            <SwitchHorizontalIcon class="flex-shrink-0 mr-1.5 h-5 w-5" />
            {{ $t("Statut") }} &ndash; {{ task.section_name }}
          </div>
          <div v-if="task.start_at" class="mt-2 flex items-center text-sm">
            <CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5" />
            {{ $t("Crée le") }} {{ $d(new Date(task.start_at), "short") }}
          </div>
          <div v-if="task.due_at" class="mt-2 flex items-center text-sm">
            <CalendarIcon class="flex-shrink-0 mr-1.5 h-5 w-5" />
            {{ $t("Livraison le") }} {{ $d(new Date(task.due_at), "short") }}
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-screen-md mb-10">
      <h3 class="mb-4 text-lg font-semibold text-gray-900">
        {{ $t("Description") }}
      </h3>
      <div v-html="task.note"></div>
    </div>

    <!-- component -->
    <Comments :gid="task.gid" />
  </div>
</template>
<script>
import Badge from "@/components/Badge.vue";
import Modal from "@/components/Modal.vue";
import Comments from "@/components/Comments.vue";
import {
  CalendarIcon,
  SwitchHorizontalIcon,
  CheckIcon,
  BadgeCheckIcon,
  XIcon,
} from "@heroicons/vue/outline";
export default {
  name: "Task",
  components: {
    Badge,
    Comments,
    CalendarIcon,
    CheckIcon,
    SwitchHorizontalIcon,
    BadgeCheckIcon,
    XIcon,
    Modal,
  },
  methods: {
    removeTicket() {
      this.removeModal = false;
    },
  },
  computed: {
    badgePriorityColor() {
      const mappings = {
        Élevée: "red",
        Moyenne: "orange",
        Faible: "green",
      };
      return mappings[this.task.priority] || mappings.default;
    },
    isCompleted: function () {
      return this.task.completed == false;
    },
    checkedValue: {
      get() {
        return this.task.completed;
      },
      set(newValue) {
        this.task.completed = newValue;
      },
    },
  },
  data() {
    return {
      removeModal: false,
      task: {
        gid: "1",
        name: "Add discount code to checkout page Add discount code to checkout page",
        note: "<p>test</p>",
        start_at: "01/01/2022",
        due_at: "01/08/2023",
        type: "Feature Request",
        priority: "Élevée",
        hearted: true,
        completed: true,
        section_name: "New request",
      },
    };
  },
};
</script>
