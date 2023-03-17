<template>
  <div class="ml-3 relative" @focusout="isVisible = false" tabindex="0">
    <div>
      <div
        class="bg-gray-800 flex text-sm rounded-full h-8 w-8 cursor-pointer"
        @click="isVisible = !isVisible"
      >
        <span class="sr-only">Open user menu</span>
        <UserAvatar :title="title" />
      </div>
    </div>

    <Transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="isVisible"
        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
      >
        <router-link
          class="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          to="/projects"
          ><ViewGridAddIcon
            class="h-4 w-4 inline mr-2"
            aria-hidden="true"
          />Tableau de bord</router-link
        >

        <router-link
          class="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          :to="{ name: 'settings' }"
          ><AdjustmentsIcon
            class="h-4 w-4 inline mr-2"
            aria-hidden="true"
          />Réglages</router-link
        >

        <router-link
          class="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          :to="{ name: 'team' }"
          ><UserGroupIcon
            class="h-4 w-4 inline mr-2"
            aria-hidden="true"
          />Équipe</router-link
        >

        <hr />

        <router-link
          class="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          :to="{ name: 'profil' }"
          ><IdentificationIcon
            class="h-4 w-4 inline mr-2"
            aria-hidden="true"
          />Profile</router-link
        >

        <button
          type="button"
          class="block px-4 py-2 text-sm text-gray-700"
          role="menuitem"
          id="user-menu-item-2"
        >
          <LogoutIcon class="h-4 w-4 inline mr-2" aria-hidden="true" />
          Deconnexion
        </button>
      </div>
    </Transition>
  </div>
</template>

<script>
import {
  LogoutIcon,
  AdjustmentsIcon,
  IdentificationIcon,
  ViewGridAddIcon,
  UserGroupIcon,
} from "@heroicons/vue/outline";
import UserAvatar from "@/components/UserAvatar.vue";
export default {
  name: "UserMenu",
  components: {
    LogoutIcon,
    AdjustmentsIcon,
    IdentificationIcon,
    ViewGridAddIcon,
    UserGroupIcon,
    UserAvatar,
  },
  props: ["title"],
  data() {
    return {
      isVisible: false,
    };
  },
};
</script>
