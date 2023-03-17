<template>
  <div class="antialiased mx-auto max-w-screen-md">
    <h3 class="mb-4 text-lg font-semibold text-gray-900">Comments</h3>

    <div class="space-y-4">
      <div class="flex">
        <div class="flex-shrink-0 mr-3 w-8 h-8">
          <UserAvatar title="test name" />
        </div>
        <div class="flex-1 leading-relaxed">
          <textarea
            @focus="newCommentIsVisible = true"
            @blur="newCommentIsVisible = false"
            class="form-textarea w-full rounded-lg border-gray-300"
            placeholder="Ask a question or post an update"
          ></textarea>
          <div v-show="newCommentIsVisible">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              @click="alert('test')"
            >
              <CheckIcon class="mr-2 h-5 w-5 inline" />
              {{ $t("Soumettre") }}
            </button>
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ml-3"
            >
              <XIcon class="mr-2 h-5 w-5 inline" />
              {{ $t("Annuler") }}
            </button>
          </div>
        </div>
      </div>

      <div v-for="comment in comments" :key="comment.gid" class="flex">
        <div class="flex-shrink-0 mr-3 w-8 h-8">
          <UserAvatar
            :title="comment.created_by.name"
            :src="comment.created_by.img"
          />
        </div>
        <div
          class="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed"
        >
          <strong>{{ comment.created_by.name }}</strong>
          <span class="text-xs text-gray-400">{{
            $d(new Date(comment.created_at), "short")
          }}</span>
          <p class="text-sm">{{ comment.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { CheckIcon, XIcon } from "@heroicons/vue/outline";
import UserAvatar from "@/components/UserAvatar.vue";
export default {
  name: "Comments",
  components: {
    CheckIcon,
    XIcon,
    UserAvatar,
  },
  prop: ["gid"],
  data() {
    return {
      newCommentIsVisible: false,
      comments: [
        {
          gid: "1202039992821767",
          created_at: "2022-03-29T08:20:15.655Z",
          text: "Version FR : Dans le premier zip « Archive-Ardèche.zip », il y a tous les fichiers à chargés sur les clients d‘AVIPUR Ardèche (Code filiale : A070) avec une table d’import comprenant la destination source par fichier et le client/Syndic de destination. Il faudra que le classement des fichiers dans les archives prennent en compte la date du fichier (2021/2020/2019 et avant)\nCe dossier est prioritaire",
          created_by: {
            name: "test name",
            img: "https://images.unsplash.com/photo-1604426633861-11b2faead63c?fit=crop&w=200&h=200",
          },
        },
        {
          gid: "1202039992821767",
          created_at: "2022-03-29T08:20:15.655Z",
          text: "Version FR : Dans le premier zip « Archive-Ardèche.zip », il y a tous les fichiers à chargés sur les clients d‘AVIPUR Ardèche (Code filiale : A070) avec une table d’import comprenant la destination source par fichier et le client/Syndic de destination. Il faudra que le classement des fichiers dans les archives prennent en compte la date du fichier (2021/2020/2019 et avant)\nCe dossier est prioritaire",
          created_by: {
            name: "John Doe",
            img: "",
          },
        },
      ],
    };
  },
};
</script>
