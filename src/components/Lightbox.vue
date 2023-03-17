<template>
  <div>
    <img
      class="w-full h-full object-cover cursor-pointer"
      src="https://www.kindacode.com/wp-content/uploads/2022/07/flower-4.jpeg"
      alt="Flower"
      onclick="showModal('https://www.kindacode.com/wp-content/uploads/2022/07/flower-4.jpeg')"
    />
  </div>
</template>

<script>
export default {
  name: "Lightbox",
  props: ["src"],
  computed: {},
};
</script>
