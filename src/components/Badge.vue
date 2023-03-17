<template>
  <div
    class="px-3 h-6 rounded-full text-xs font-semibold flex items-center"
    :class="background(color)"
  >
    <span class="w-2 h-2 rounded-full mr-1" :class="badge(color)"></span>
    <span>
      <slot></slot>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary",
    },
  },
  setup() {
    const background = (color) => {
      const mappings = {
        red: "bg-red-100 text-red-700",
        orange: "bg-orange-100 text-orange-700",
        green: "bg-completed-100 text-completed-700",
        primary: "bg-primary-100 text-primary-700",
      };
      return mappings[color] || mappings.default;
    };
    const badge = (color) => {
      const mappings = {
        red: "bg-red-400",
        orange: "bg-orange-400",
        green: "bg-completed-400",
        primary: "bg-primary-400",
      };
      return mappings[color] || mappings.default;
    };
    return {
      background,
      badge,
    };
  },
};
</script>
