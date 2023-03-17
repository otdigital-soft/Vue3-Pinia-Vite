<template>
  <div>
    <img
      v-if="src"
      class="rounded-full object-cover bg-gray-100 h-full w-full"
      :src="src"
      alt="User"
    />
    <!-- <div v-if="title" class="flex items-center justify-center bg-gray-100 rounded-full font-semibold uppercase text-gray-500 w-8 h-8">
      <svg class="h-full w-full text-gray-300 mx-auto">
        <text x="0" y="15">{{ firstLetter(title) }}</text>
      </svg>
    </div> -->
    <div
      v-else
      class="rounded-full overflow-hidden bg-gray-100 overflow-hidden h-full w-full"
    >
      <svg
        class="h-full w-full text-gray-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserAvatar",
  props: ["title", "src"],
  setup() {
    const firstLetter = (title = "- -") => {
      return title
        .split(" ")
        .map((x) => x[0].toUpperCase())
        .join(".");
    };

    return {
      firstLetter,
    };
  },
};
</script>
